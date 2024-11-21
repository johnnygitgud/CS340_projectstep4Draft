-- Create User
INSERT INTO Users (email, password, dateJoined)
VALUES ('newuser@example.com', 'newpassword123', NOW());

-- Read All Users
SELECT * FROM Users;

-- Read User by ID
SELECT * FROM Users WHERE userID = 1;

-- Update User
UPDATE Users
SET email = 'updatedemail@example.com', password = 'newpassword456'
WHERE userID = 1;

-- Delete User
DELETE FROM Users WHERE userID = 1;

-- -------------------------------
-- CRUD Operations for Messages Table
-- -------------------------------

-- Create Message
INSERT INTO Messages (senderID, recipientID, messageBody, dateSent)
VALUES (1, 2, 'Hello, how are you?', NOW());

-- Read All Messages
SELECT * FROM Messages;

-- Read Message by ID
SELECT * FROM Messages WHERE messageID = 1;

-- Update Message
UPDATE Messages
SET messageBody = 'Updated message content.'
WHERE messageID = 1;

-- Delete Message
DELETE FROM Messages WHERE messageID = 1;

-- -------------------------------
-- CRUD Operations for EncryptionKeys Table
-- -------------------------------

-- Create Encryption Key
INSERT INTO EncryptionKeys (userID, encryptionKey, keyCreated)
VALUES (1, 'new_encryption_key_123', NOW());

-- Read All Encryption Keys
SELECT * FROM EncryptionKeys;

-- Read Encryption Key by ID
SELECT * FROM EncryptionKeys WHERE keyID = 1;

-- Update Encryption Key
UPDATE EncryptionKeys
SET encryptionKey = 'updated_encryption_key_456'
WHERE keyID = 1;

-- Delete Encryption Key
DELETE FROM EncryptionKeys WHERE keyID = 1;

-- -------------------------------
-- CRUD Operations for Contacts Table
-- -------------------------------

-- Create Contact
INSERT INTO Contacts (userID, contactEmail, dateAdded)
VALUES (1, 'contact@example.com', NOW());

-- Read All Contacts
SELECT * FROM Contacts;

-- Read Contact by ID
SELECT * FROM Contacts WHERE contactID = 1;

-- Update Contact
UPDATE Contacts
SET contactEmail = 'updatedcontact@example.com'
WHERE contactID = 1;

-- Delete Contact
DELETE FROM Contacts WHERE contactID = 1;