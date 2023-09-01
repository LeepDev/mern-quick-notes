// routes/api/notes.js

const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/notes'

router.get('/', ensureLoggedIn, notesCtrl.index)
router.post('/create', ensureLoggedIn, notesCtrl.create)

module.exports = router