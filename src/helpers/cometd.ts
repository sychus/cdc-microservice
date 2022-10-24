import { Logger } from 'node-json-logger';
import { getCometdURL } from './utils';
import * as lib from 'cometd';

// const logger = new Logger();

export const cometd_setup = async (cometd: lib.CometD, connection) => {
  const url = getCometdURL(connection);
  return await cometd.configure({
    appendMessageTypeToURL: false,
    requestHeaders: { Authorization: 'Bearer ' + connection.accessToken },
    url,
  });
};

export async function cometd_handshake(cometd: lib.CometD) {
  await cometd.handshake((h) => {
    if (h.successful) {
      console.error('Handshake ok!');
      cometd.subscribe('/data/ChangeEvents', function (m) {
        console.log(m.data);
      });
    }
  });
}
