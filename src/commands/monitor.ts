import { login } from '../auth/login';
import * as cometdNodejsClient from 'cometd-nodejs-client';
import * as lib from 'cometd';
import { cometd_setup, cometd_handshake } from 'src/helpers/cometd';

cometdNodejsClient.adapt();

/**
 * The monitoring subcommand
 * @param {object} args The arguments passed in
 * @returns {undefined}
 */
export const monitor: any = async () => {
  try {
    const args = {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      token: process.env.TOKEN,
    };
    const cometd: lib.CometD = new lib.CometD();
    const TimeStampExtension = require('cometd/TimeStampExtension');
    cometd.registerExtension('timestamp', new TimeStampExtension());

    const { conn } = await login(args);
    console.log('setup...');
    await cometd_setup(cometd, conn);
    console.log('handshake...');
    await cometd_handshake(cometd);
  } catch (err) {
    console.log('Error: ', err);
  }
};
