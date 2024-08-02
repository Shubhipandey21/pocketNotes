const Note = require('../models/note');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ groupId: req.params.groupId });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createNote = async (req, res) => {
    const note = new Note({
        groupId: req.body.groupId,
        text: req.body.text
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
