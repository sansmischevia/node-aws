var
  util = require('util'),
  sns = require('../sns'),
  aws = require('../aws'),
  _ = require('../util');

/**
 * GET StartInstances
 */
var Request = module.exports.Request = function(args) {
  
  sns.Request.call(this, args, 'Publish');

  var self = this;

  if (_.isString(args.Subject)) {
    self._query['Subject'] = args.Subject;
  }
  if (_.isString(args.Message)) {
    self._query['Message'] = args.Message;
  }
  if (_.isString(args.TopicArn)) {
    self._query['TopicArn'] = args.TopicArn;
  }
}

util.inherits(Request, sns.Request);

/**
 * Publish Response
 */
var Response = module.exports.Response = function(response) {
  sns.Response.call(this, response);

  var self          = this;
  this.response = _.xmlToJson(self._xml.get('/PublishResponse'));
}

util.inherits(Response, sns.Response);