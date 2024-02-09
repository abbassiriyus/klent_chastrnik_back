const express = require('express');
const router = express.Router();
const db = require('../db');

// Blog oluşturma
router.post('/blogs', async (req, res) => {
  try {
    const { title } = req.body;

    const query = `INSERT INTO blog (title) 
                   VALUES ($1) 
                   RETURNING *`;

    const values = [title];

    const result = await db.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'An error occurred while creating the blog.' });
  }
});

// Tüm blogları getirme
router.get('/blogs', async (req, res) => {
  try {
    const query = 'SELECT * FROM blog';
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'An error occurred while fetching blogs.' });
  }
});

// Blog güncelleme
router.put('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const query = `UPDATE blog SET title = $1, 
                   time_update = current_timestamp WHERE id = $2 RETURNING *`;

    const values = [title, id];

    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'An error occurred while updating the blog.' });
  }
});

// Blog silme
router.delete('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM blog WHERE id = $1';
    const result = await db.query(query, [id]);
    res.json({ message: 'Blog deleted successfully.' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'An error occurred while deleting the blog.' });
  }
});

module.exports = router;