const { Router } =require('express');
const router = Router();

const { getNotes, 
    createNote, 
    deleteNote, 
    updateNote, 
    getNote } = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote)

module.exports = router