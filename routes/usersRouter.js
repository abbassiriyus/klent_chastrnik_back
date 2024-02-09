const express = require('express');
const router = express.Router();
const db = require('../db');

// Kullanıcı oluşturma
router.post('/users', async (req, res) => {
  try {
    const {
      phone,
      position,
      inn,
      litso,
      image,
      type,
      nomer_registratsiya,
      lastname,
      firstname,
      name,
      super_admin,
    } = req.body;

    const query = `INSERT INTO users (phone, position, inn, litso, image, type, nomer_registratsiya, lastname, firstname, name, super_admin) 
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
                   RETURNING *`;

    const values = [
      phone,
      position,
      inn,
      litso,
      image,
      type,
      nomer_registratsiya,
      lastname,
      firstname,
      name,
      super_admin,
    ];

    const result = await db.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

// Tüm kullanıcıları getirme
router.get('/users', async (req, res) => {
  try {
    const query = 'SELECT * FROM users';
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});

// Kullanıcı güncelleme
router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {
      phone,
      position,
      inn,
      litso,
      image,
      type,
      nomer_registratsiya,
      lastname,
      firstname,
      name,
      super_admin,
    } = req.body;

    const query = `UPDATE users SET phone = $1, position = $2, inn = $3, litso = $4, image = $5, type = $6, 
                   nomer_registratsiya = $7, lastname = $8, firstname = $9, name = $10, super_admin = $11, 
                   time_update = current_timestamp WHERE id = $12 RETURNING *`;

    const values = [
      phone,
      position,
      inn,
      litso,
      image,
      type,
      nomer_registratsiya,
      lastname,
      firstname,
      name,
      super_admin,
      id,
    ];

    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'An error occurred while updating the user.' });
  }
});

// Kullanıcı silme
router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = $1';
    const result = await db.query(query, [id]);
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'An error occurred while deleting the user.' });
  }
});

module.exports = router;