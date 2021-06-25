import * as AWSXRay from 'aws-xray-sdk-core';
import * as AWSSdk from 'aws-sdk';

AWSXRay.captureAWS(AWSSdk);

export const hello = (event, context, callback) => {
  callback(null, null);
};

export const ciao = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'ciao world!'
    }),
  };

  callback(null, response);
};
