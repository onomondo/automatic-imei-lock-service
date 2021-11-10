const express = require('express')
const axios = require('axios')

const API_KEY = process.env.API_KEY
const TAG_ID = process.env.TAG_ID

const app = express()

axios.defaults.baseURL = 'https://api.onomondo.com'
axios.defaults.headers.common['authorization'] = API_KEY

app.post('/imei_lock', express.json(), async (req, res) => {
  const simId = req.body.sim_id
  const imei = req.body.imei

  console.log(`Received webhook request: ${JSON.stringify(req.body)}`)

  // Set the IMEI Lock
  await axios.patch(`/sims/${simId}`, { imei_lock: imei })

  // Remove the tag from the sim, ensuring that this webhook is not called again
  await axios.delete(`/sims/${simId}/tags/${TAG_ID}`)

  console.log(`Done setting IMEI lock for ${simId}`)
})
app.listen(process.env.PORT || 8145)
