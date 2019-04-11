var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./client_secret.json')
var fs = require('fs')
var path = require('path')
const slugify = require('@sindresorhus/slugify')
var stripIndents = require('common-tags/lib/stripIndents')

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1pZ3QgN3YfrfavRvf9281AQEmZ7RRxOPI5-3DJJyzNXw')

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function(err) {
  // Get all of the rows from the spreadsheet.
  doc.getInfo(function(err, info) {
    info.worksheets[3].getRows(function(err, rows) {
      console.log()
      for (let row of rows) {
        fs.writeFile(
          `src/pages/${slugify(row.country)}.md`,
          stripIndents`---
          title: "${row.country}"
          introtext: "${row.introtext}"
          introimage: "${row.introimages}"
          surface: "${row.surface}"
          inhabitants: "${row.inhabitants}"
          rate: "${row.rate}"
          valuta: "${row.valuta}"
          ---`,
          function(err) {
            if (err) throw err
            console.log('File is created successfully.')
          }
        )
      }
    })
  })
})
