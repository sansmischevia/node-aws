#!/usr/bin/env node

var program = require('commander');
var color = require('colors');
var sys = require('sys');
var aws = require('./lib/aws');

var client = aws.createClient({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
});

program
	.version('0.0.1')
	.parse(process.argv);

var topicArn = program.signingKey || process.env.NDOE_ERR_ARN;

program.prompt('subject: ', function(subject) {
  program.prompt('message: ', function(message) {
      client.request('sns', 'publish', {
        'TopicArn': 'arn:aws:sns:us-east-1:443824109149:vungle-errors',
        'Subject': subject,
        'Message': message,
        'Action': 'Publish'
      }, function(response) {
        console.log('Response: --- ' + JSON.stringify(response, null, '  '));
        if (response instanceof Error) {
          // uh oh
          console.log(response.code, response.message);
        } else {
          console.log(response.code, response.message);
        }
        exit();
      })
    });
  });

function exit() {
  console.warn('Exiting ...'.yellow);
  process.exit();
}
