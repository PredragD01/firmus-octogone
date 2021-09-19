const express = require('express')
const PORT = process.env.PORT || 5000  # Fall back to port 5000 if process.env.PORT is not set

express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
