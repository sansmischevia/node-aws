#!/usr/bin/env node

var program = require('commander');
var color = require('colors');
var aws = require('./lib/aws');

var client = aws.createClient({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
});

program
	.version('0.0.1')
	.parse(process.argv);

var topicArn = program.signingKey || process.env.NODE_ERR_ARN;

program.prompt('subject: ', function(subject) {
  program.prompt('message: ', function(message) {
      client.request('sns', 'publish', {
        'TopicArn': topicArn,
        'Subject': subject,
        'Message': message,
        'Action': 'Publish'
      }, function(response) {
        console.log('Response: ' + JSON.stringify(response, null, '  '));
        exit();
      })
    });
  });

function exit() {
  console.warn('Exiting ...'.yellow);
  process.exit();
}
