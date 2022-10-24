const { GoogleSpreadsheet } = require('google-spreadsheet')
const fs = require('fs')
const stripIndents = require('common-tags/lib/stripIndents')

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

;(async function () {
  // Create a document object using the ID of the spreadsheet - obtained from its URL.
  const doc = new GoogleSpreadsheet(
    '1pZ3QgN3YfrfavRvf9281AQEmZ7RRxOPI5-3DJJyzNXw'
  )

  await doc.useServiceAccountAuth(creds)
  await doc.loadInfo()
  const rows = await doc.sheetsByIndex[8].getRows()

  for (let row of rows) {
    fs.writeFile(
      `src/pages/${slugify(row.country)}.md`,
      stripIndents`---
          title: "${row.title}"
          introtext: "${row.intro_text}"
          introimage: "${row.intro_images}"
          surface: "${row.surface}"
          inhabitants: "${row.inhabitants}"
          rate: "${row.rate}"
          valuta: "${row.valuta}"
          main_text: "${row.main_text}"
          fact_one_text: "${row.fact_one_text}"
          fact_two_text: "${row.fact_two_text}"
          bigmac_index: "${row.bigmac_index}"
          images: "${row.images}"
          flight_button_title: "${row.flight_button_title}"
          flight_button_url: "${row.flight_button_url}"
          inspiration_url: "${row.inspiration_url}"
          country_code: "${row.country_code}"
          hotels_url: "${row.hotels_url}"
          continent: "${row.continent}"
          usp_1: "${row.usp_1}"
          usp_2: "${row.usp_2}"
          usp_3: "${row.usp_3}"
          head_1: "${row.head_1}"
          head_2: "${row.head_2}"
          ---`.replaceAll('"undefined"', '""'),
      function (err) {
        if (err) throw err
        console.log('File is created successfully.')
      }
    )
  }
})()
