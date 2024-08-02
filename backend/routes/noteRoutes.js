const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/:groupId', noteController.getNotes);
router.post('/', noteController.createNote);

module.exports = router;
