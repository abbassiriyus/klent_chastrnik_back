const express = require('express');
const pool = require('../db');
const { validateJWT } = require('../middleware/middleware');
const router = express.Router();
// CREATE - Yangi ma'lumot qo'shish
router.post('/documents',validateJWT, (req, res) => {
  // Ma'lumotlarni req.body dan olish
  const { user_id, file } = req.body;

  // Ma'lumotlar bazasiga INSERT so'rovi jo'natish
  const query = `INSERT INTO document (user_id, file) VALUES ($1, $2) RETURNING *`;
  const values = [user_id, file];

  pool.query(query, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(error => {
      console.error('Error creating document:', error);
      res.status(500).json({ error: 'An error occurred while creating the document.' });
    });
});

// READ - Barcha ma'lumotlarni olish
router.get('/documents', (req, res) => {
  // Ma'lumotlarni bazadan olish
  const query = `SELECT * FROM document`;

  pool.query(query)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => {
      console.error('Error fetching documents:', error);
      res.status(500).json({ error: 'An error occurred while fetching documents.' });
    });
});

// UPDATE - Ma'lumotni yangilash
router.put('/documents/:id',validateJWT, (req, res) => {
  const { id } = req.params;
  const { user_id, file } = req.body;

  const query = `UPDATE document SET user_id = $1, file = $2, time_update = current_timestamp WHERE id = $3`;
  const values = [user_id, file, id];

  pool.query(query, values)
    .then(() => {
      res.status(200).json({ message: 'Document updated successfully.' });
    })
    .catch(error => {
      console.error('Error updating document:', error);
      res.status(500).json({ error: 'An error occurred while updating the document.' });
    });
});

// DELETE - Ma'lumotni o'chirish
router.delete('/documents/:id',validateJWT, (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM document WHERE id = $1`;
  const values = [id];

  pool.query(query, values)
    .then(() => {
      res.status(200).json({ message: 'Document deleted successfully.' });
    })
    .catch(error => {
      console.error('Error deleting document:', error);
      res.status(500).json({ error: 'An error occurred while deleting the document.' });
    });
});

module.exports = router;