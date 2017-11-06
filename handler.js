'use strict';

const { execSync } = require('child_process');

global.invocationCount = 0

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      invocationCount: ++global.invocationCount,
      input: event,
      context: context,
      pid: process.pid,
      env: process.env,
//      commands: ["whoami", "uname -a", "pwd", "w", "ps -aux", "ls", "ls /usr/bin", "ls /bin"].reduce((o, v) => { o[v] = execSync(v).toString(); return o; }, {})
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
