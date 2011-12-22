# Node AWS

Node AWS is an easy-to-use AWS client.

**Adding support for SNS**

You will need scons to build node-aws, which has a dependency on libxmljs, which uses scons: http://www.scons.org/

## Usage

```javascript
var aws = require('node-aws');

var client = aws.createClient({
  accessKeyId: '...',
  secretAccessKey: '...',
});

client.request('sns', 'publish', {
  'TopicArn': topicArn,
  'Subject': subject,
  'Message': message,
  'Action': 'Publish'
}, function(response) {
  if (response instanceof Error) {
    // uh oh
    console.log(response.code, response.message);
  } else {
    // it worked!
  }
})
```

## Status

The most up-to-date list of supported AWS services and methods is available by calling `require('node-aws').getSupportedMethods()`. A potentially outdated list is provided below:

### SNS (Simple Notification Server)
 
 * publish

### EC2 (Elastic Compute Cloud)

 * allocateAddress
 * associateAddress
 * createKeyPair
 * deleteKeyPair
 * describeAddresses
 * describeAvailabilityZones
 * describeInstances
 * describeKeyPairs
 * describeRegions
 * disassociateAddress
 * getConsoleOutput
 * importKeyPair
 * rebootInstances
 * releaseAddress
 * startInstances
 * stopInstances

### Route53

 * changeResourceRecordSets
 * createHostedZone
 * deleteHostedZone
 * getChange
 * getHostedZone
 * listHostedZones
 * listResourceRecordSets

### S3 (Simple Storage Service)

 * createBucket
 * deleteBucket
 * deleteObject
 * getObject
 * listAllMyBuckets
 * listBucket
 * putObject

### SES (Simple Email Service)

 * deleteVerifiedEmailAddress
 * getSendQuota
 * getSendStatistics
 * listVerifiedEmailAddresses
 * sendEmail
 * verifyEmailAddress

### SimpleDB

 * batchDeleteAttributes
 * batchPutAttributes
 * createDomain
 * deleteAttributes
 * deleteDomain
 * domainMetadata
 * getAttributes
 * listDomains
 * putAttributes
 * select
