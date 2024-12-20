const Note = require('../models/notes')

class NoteController {
    static async getAllNotes(req, res) {
        try {
            const notes = await Note.find();
            res.json(notes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getNoteById(req, res) {
        try {
            const { id } = req.params;
            const note = await Note.findById(id);
            if (!note) return res.status(404).json({ error: 'Note not found' });
            res.json(note);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createNote(req, res) {
        try {
            const { title, content } = req.body;
            const note = await Note.create({ title, content });
            res.status(201).json(note);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateNote(req, res) {
        try {
            const { id } = req.params;
            const note = await Note.findByIdAndUpdate(id, req.body, { new: true });
            if (!note) return res.status(404).json({ error: 'Note not found' });
            res.json(note);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async deleteNote(req, res) {
        try {
            const { id } = req.params;
            const note = await Note.findByIdAndDelete(id);
            if (!note) return res.status(404).json({ error: 'Note not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = NoteController;