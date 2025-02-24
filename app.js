const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Home - List contacts
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM contacts';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.render('index', { contacts: results });
    });
});

// Add contact form
app.get('/add', (req, res) => {
    res.render('add');
});

// Add new contact
app.post('/add', (req, res) => {
    const { name, phone, email } = req.body;
    const sql = 'INSERT INTO contacts (name, phone, email) VALUES (?, ?, ?)';
    db.query(sql, [name, phone, email], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Edit contact form
app.get('/edit/:id', (req, res) => {
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.render('edit', { contact: result[0] });
    });
});

// Update contact
app.post('/edit/:id', (req, res) => {
    const { name, phone, email } = req.body;
    const sql = 'UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?';
    db.query(sql, [name, phone, email, req.params.id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete contact
app.get('/delete/:id', (req, res) => {
    const sql = 'DELETE FROM contacts WHERE id = ?';
    db.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
