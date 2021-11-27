const mongoose = require('mongoose');

require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

mongoose.connect(process.env.MONGODB_URL);