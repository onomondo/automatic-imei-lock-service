# automatic-imei-lock-service

This is example code of how to create a webhooks service that automatically will set the IMEI lock the first time a SIM comes online.

## Deploy to Heroku

The repository serves as an example, but can actually be deployed as-is to Heroku and used without changing the code.

All you have to do is set to `Config Vars`:
* Set `API_KEY` to the api key you received from Onomondo
* Set `TAG_ID` to the tag id of the "Never Used" tag you created
