const request = require('request-promise');
const { findIssues } = require('./utils');

const URI = 'https://mercurio.psl.com.co/jira/rest/psl-worklog/1.0/psl-worklog';
const USERNAME = process.env.JIRA_USERNAME;
const PASSWORD = process.env.JIRA_PASSWORD;

const auth = {
  user: USERNAME,
  pass: PASSWORD
};

var issues = findIssues();
issues.forEach((json) => {
  request
      .post(URI, { auth, json })
      .then((res) => {
          console.log('%s has been reported!', json.comment)
      })
      .catch((err) => {
          console.error('Could not report %s!', json.comment);
      });
});
