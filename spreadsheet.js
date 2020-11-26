var GoogleSpreadsheet = require('google-spreadsheet')
var fs = require('fs')
var stripIndents = require('common-tags/lib/stripIndents')

var creds = {
  client_email: process.env.CLIENT_EMAIL,
  private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
}

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
  if (err) throw err
  // Get all of the rows from the spreadsheet.
  doc.getInfo(function(err, info) {
    if (err) throw err

    info.worksheets[8].getRows(function(err, rows) {
      if (err) throw err

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
          main_text: "${row.maintext}"
          fact_one_text: "${row.factonetext}"
          fact_two_text: "${row.facttwotext}"
          bigmac_index: "${row.bigmacindex}"
          images: "${row.images}"
          flight_button_title: "${row.flightbuttontitle}"
          flight_button_url: "${row.flightbuttonurl}"
          inspiration_url: "${row.inspirationurl}"
          country_code: "${row.countrycode}"
          hotels_url: "${row.hotelsurl}"
          continent: "${row.continent}"
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
