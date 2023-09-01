const Note = require('../../models/note')

module.exports = {
    create,
    index
}

async function create(req, res) {
    try {
        console.log(req.body)
        const note = await Note.create(req.body)
        res.json(note)
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id})
        res.json(notes)
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(err)
    }
}