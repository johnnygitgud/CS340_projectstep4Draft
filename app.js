/*
    SETUP
*/
const express = require('express');
const path = require('path');
const db = require('./db-connector'); // Import the db-connector module
const app = express();
const PORT = 3128;

app.use(express.static(path.join(__dirname, 'public')));

/*
    ROUTES
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/adminIndex.html'));
});

app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/users.html'));
});

app.get('/messages', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/messages.html'));
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contacts.html'));
});

app.get('/encryptionKeys', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/encryptionKeys.html'));
});

// Create User
app.post('/api/users', (req, res) => {
    const { email, password } = req.body;
    const query = 'INSERT INTO Users (email, password, dateJoined) VALUES (?, ?, NOW())';
    db.pool.query(query, [email, password], (err, result) => {
        if (err) throw err;
        res.send('User created...');
    });
});

// Read All Users
app.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM Users';
    db.pool.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Read User by ID
app.get('/api/users/:id', (req, res) => {
    const query = 'SELECT * FROM Users WHERE userID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Update User
app.put('/api/users/:id', (req, res) => {
    const { email, password } = req.body;
    const query = 'UPDATE Users SET email = ?, password = ? WHERE userID = ?';
    db.pool.query(query, [email, password, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User updated...');
    });
});

// Delete User
app.delete('/api/users/:id', (req, res) => {
    const query = 'DELETE FROM Users WHERE userID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User deleted...');
    });
});

// Create Message
app.post('/api/messages', (req, res) => {
    const { senderID, recipientID, messageBody } = req.body;
    const query = 'INSERT INTO Messages (senderID, recipientID, messageBody, dateSent) VALUES (?, ?, ?, NOW())';
    db.pool.query(query, [senderID, recipientID, messageBody], (err, result) => {
        if (err) throw err;
        res.send('Message created...');
    });
});

// Read All Messages
app.get('/api/messages', (req, res) => {
    const query = 'SELECT * FROM Messages';
    db.pool.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Read Message by ID
app.get('/api/messages/:id', (req, res) => {
    const query = 'SELECT * FROM Messages WHERE messageID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Update Message
app.put('/api/messages/:id', (req, res) => {
    const { messageBody } = req.body;
    const query = 'UPDATE Messages SET messageBody = ? WHERE messageID = ?';
    db.pool.query(query, [messageBody, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Message updated...');
    });
});

// Delete Message
app.delete('/api/messages/:id', (req, res) => {
    const query = 'DELETE FROM Messages WHERE messageID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Message deleted...');
    });
});

// Create Encryption Key
app.post('/api/encryptionKeys', (req, res) => {
    const { userID, encryptionKey } = req.body;
    const query = 'INSERT INTO EncryptionKeys (userID, encryptionKey, keyCreated) VALUES (?, ?, NOW())';
    db.pool.query(query, [userID, encryptionKey], (err, result) => {
        if (err) throw err;
        res.send('Encryption key created...');
    });
});

// Read All Encryption Keys
app.get('/api/encryptionKeys', (req, res) => {
    const query = 'SELECT * FROM EncryptionKeys';
    db.pool.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Read Encryption Key by ID
app.get('/api/encryptionKeys/:id', (req, res) => {
    const query = 'SELECT * FROM EncryptionKeys WHERE keyID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Update Encryption Key
app.put('/api/encryptionKeys/:id', (req, res) => {
    const { encryptionKey } = req.body;
    const query = 'UPDATE EncryptionKeys SET encryptionKey = ? WHERE keyID = ?';
    db.pool.query(query, [encryptionKey, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Encryption key updated...');
    });
});

// Delete Encryption Key
app.delete('/api/encryptionKeys/:id', (req, res) => {
    const query = 'DELETE FROM EncryptionKeys WHERE keyID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Encryption key deleted...');
    });
});

// Create Contact
app.post('/api/contacts', (req, res) => {
    const { userID, contactEmail } = req.body;
    const query = 'INSERT INTO Contacts (userID, contactEmail, dateAdded) VALUES (?, ?, NOW())';
    db.pool.query(query, [userID, contactEmail], (err, result) => {
        if (err) throw err;
        res.send('Contact created...');
    });
});

// Read All Contacts
app.get('/api/contacts', (req, res) => {
    const query = 'SELECT * FROM Contacts';
    db.pool.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Read Contact by ID
app.get('/api/contacts/:id', (req, res) => {
    const query = 'SELECT * FROM Contacts WHERE contactID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Update Contact
app.put('/api/contacts/:id', (req, res) => {
    const { contactEmail } = req.body;
    const query = 'UPDATE Contacts SET contactEmail = ? WHERE contactID = ?';
    db.pool.query(query, [contactEmail, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Contact updated...');
    });
});

// Delete Contact
app.delete('/api/contacts/:id', (req, res) => {
    const query = 'DELETE FROM Contacts WHERE contactID = ?';
    db.pool.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Contact deleted...');
    });
});

/*
    LISTENER
*/
app.listen(PORT, function() {
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});
