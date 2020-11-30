# Setup
Make sure you have netlify-cli installed and the netlify large media plugin installed and you're logged in. This is necessary to pull the images.

## Running spreadsheet.js

The script spreadsheet.js updates the data for the countries. To run the script you need to do:

`CLIENT_EMAIL=$EMAIL PRIVATE_KEY=$PRIVATE_KEY node spreadsheet.js`

The two environment variables come from a service account JSON, if you go here: https://console.cloud.google.com/iam-admin/serviceaccounts?authuser=1&project=destination-unknown-237115 you can do Create Key and in the JSON file you'll see private_key and client_email fields which you need to use.
