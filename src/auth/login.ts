import * as jsforce from 'jsforce';

/**
 * Login to Salesfoce
 * @param {object} args The arguments passed in
 * @returns {Promise} A promise for when the login has occurred
 */
export const login = async (args) => {
  const config: any = {};
  if (args.sandbox) {
    config.loginUrl = 'https://sandoxExample.com';
  }
  const conn = new jsforce.Connection(config);
  const userInfo = await conn.login(args.username, args.password + args.token);
  return {
    userInfo,
    conn,
  };
};
