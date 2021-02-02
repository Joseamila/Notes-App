const noteCtrl = {};
const { findByIdAndUpdate } = require('../models/note');
const Note = require('../models/note')

    noteCtrl.getNotes = async (req, res) =>{
        const note = await Note.find();
        res.json(note);
    }

    noteCtrl.createNote = async (req, res) => {
        const { title, content, date, author } = req.body;
        const newNote = new Note({ title, content, date, author })
        await newNote.save();
        res.json({Message: 'Note created'})
    
    }
    
    noteCtrl.getNote = async (req, res) => {
        const note = await Note.findById(req.params.id);
        res.json(note)
    }

    noteCtrl.updateNote = async (req, res) => {
        const {title, content, author } = req.body;
        await Note.findByIdAndUpdate(req.params.id, { title, content, author})
        res.json({Message: 'Note saved'})
    }
    
    noteCtrl.deleteNote = async(req, res) => {
        await Note.findByIdAndDelete(req.params.id)
        res.json({Message: 'Note deleted'});
    }

module.exports = noteCtrl;
