import { getCometdURL } from './utils';
import * as lib from 'cometd';
import { getCometdChannel } from './utils';

export class SFConnector {
  cometd_setup = async (cometd: lib.CometD, connection) => {
    const url = getCometdURL(connection);
    return await cometd.configure({
      appendMessageTypeToURL: false,
      requestHeaders: { Authorization: 'Bearer ' + connection.accessToken },
      url,
    });
  };

  cometd_handshake = async (cometd: lib.CometD) => {
    await cometd.handshake((h) => {
      if (h.successful) {
        console.info('handshake...ok');
        cometd.subscribe(getCometdChannel(), function (m) {
          console.log(m.data);
        });
      }
    });
  };
}
