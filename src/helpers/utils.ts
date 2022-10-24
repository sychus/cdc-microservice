export const getCometdURL = (conn) => {
  return conn.instanceUrl + '/cometd/40.0';
};

export const getCometdChannel = () => {
  const channel = '/data/ChangeEvents';
  return channel;
};
