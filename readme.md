# automatic-imei-lock-service

This is example code of how to create a webhooks service that automatically will set the IMEI lock the first time a SIM comes online.

It is used in the Onomondo course [Lock SIM to the first device (IMEI) that used it](https://help.onomondo.com/en/course-lock-sim-to-the-first-imei-that-used-it).

## Deploy to Heroku

You can easily deploy to Heroku by clicking here

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

If you set it up manually you'll have change two `Config Vars`:
* Set `API_KEY` to the api key you received from Onomondo
* Set `TAG_ID` to the tag id of the "Never Used" tag you created
