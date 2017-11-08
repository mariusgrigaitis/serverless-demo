'use strict';

const { spawn } = require('child_process');

module.exports.handler = (event, context, callback) => {
  let result = '';

  const proc = spawn('./php', ["phpinfo.php"]);

  proc.stdout.on('data', (data) => {
    result += data;
  });

  proc.on('close', (code) => {
    if (code !== 0) {
      callback(new Error("Process exited with non zero code " +code))
    }

    const response = {
        statusCode: 200,
        body: result
    };

    callback(null, response)
  });
};
