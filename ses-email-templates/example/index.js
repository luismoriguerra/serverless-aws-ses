
const fs = require('fs');
const path = require('path');

function getHTML() {
  const URL = path.resolve(__dirname, 'template.html');
  const html = fs.readFileSync(URL).toString('utf-8');
  return html;
}

const jsonTemplate = {
  name: 'my-ses-example',
  subject: 'Serveress AWS SES: exmaple',
  html: getHTML()
}

module.exports = jsonTemplate