import { login } from '../auth/login';
import * as cometdNodejsClient from 'cometd-nodejs-client';
import * as lib from 'cometd';
import { SFConnector } from '../helpers/cometd';

cometdNodejsClient.adapt();

export class MonitorService {
  cdcSubscriptor = async (params) => {
    try {
      const args = {
        username: params.username,
        password: params.password,
        token: params.token,
      };
      const sfConnector = new SFConnector();
      const cometLib: lib.CometD = new lib.CometD();
      const TimeStampExtension = require('cometd/TimeStampExtension');
      cometLib.registerExtension('timestamp', new TimeStampExtension());

      const { conn } = await login(args);
      console.info('login...ok');
      await sfConnector.cometd_setup(cometLib, conn);
      console.info('setup...ok');
      await sfConnector.cometd_handshake(cometLib);
    } catch (err) {
      console.error('Error: ', err);
    }
  };
}
