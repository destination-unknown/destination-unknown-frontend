var GoogleSpreadsheet = require('google-spreadsheet')
var creds = require('./client_secret.json')
var fs = require('fs')
var path = require('path')
var stripIndents = require('common-tags/lib/stripIndents')

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1pZ3QgN3YfrfavRvf9281AQEmZ7RRxOPI5-3DJJyzNXw')

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function(err) {
  // Get all of the rows from the spreadsheet.
  doc.getInfo(function(err, info) {
    info.worksheets[3].getRows(function(err, rows) {
      for (let row of rows) {
        fs.writeFile(
          `src/pages/${slugify(row.country)}.md`,
          stripIndents`---
          title: "${row.title}"
          introtext: "${row.introtext}"
          introimage: "${row.introimages}"
          surface: "${row.surface}"
          inhabitants: "${row.inhabitants}"
          rate: "${row.rate}"
          valuta: "${row.valuta}"
          need_to_know_text: "${row.needtoknowtext}"
          need_to_know_more_text: "${row.needtoknowmoretext}"
          fact_one_text: "${row.factonetext}"
          fact_two_text: "${row.facttwotext}"
          bigmac_index: "${row.bigmacindex}"
          images: "${row.images}"
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
