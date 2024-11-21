-- CS340 Project Step 2 Draft - Database Schema and Sample Data
-- Author: Elvis Ardon, Felipe Ventura
-- Date: 10/31/2024

-- Disable foreign key checks and autocommit
SET FOREIGN_KEY_CHECKS = 0;
SET AUTOCOMMIT = 0;

-- Create Users table
CREATE TABLE Users (
    userID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    dateJoined DATETIME NOT NULL
);

-- Create Messages table
CREATE TABLE Messages (
    messageID INT AUTO_INCREMENT PRIMARY KEY,
    senderID INT,
    recipientID INT,
    messageBody TEXT NOT NULL,
    dateSent DATETIME NOT NULL,
    FOREIGN KEY (senderID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (recipientID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create EncryptionKeys table
CREATE TABLE EncryptionKeys (
    keyID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    encryptionKey VARCHAR(255) NOT NULL,
    keyCreated DATETIME NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Contacts table
CREATE TABLE Contacts (
    contactID INT AUTO_INCREMENT PRIMARY KEY,
    userID INT,
    contactEmail VARCHAR(255) NOT NULL,
    dateAdded DATETIME NOT NULL,
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insert sample data into Users table
INSERT INTO Users (email, password, dateJoined) VALUES 
('user1@example.com', 'pass1234', '2023-01-05 12:34:56'),
('user2@example.com', 'password5678', '2023-01-07 08:30:00'),
('user3@example.com', 'mysecurepass', '2023-01-09 10:15:24'),
('user4@example.com', 'abc123xyz', '2023-01-12 11:45:50'),
('user5@example.com', 'passw0rd9!', '2023-01-14 14:00:12');

-- Insert sample data into Messages table
INSERT INTO Messages (senderID, recipientID, messageBody, dateSent) VALUES 
(1, 2, 'Hello there!', '2023-01-05 12:40:12'),
(2, 1, 'Hi! How are you?', '2023-01-05 12:41:30'),
(3, 1, 'Good morning!', '2023-01-09 10:20:15'),
(4, 3, 'Meet me at noon.', '2023-01-12 11:50:00'),
(1, 5, 'Project update?', '2023-01-14 14:05:50');

-- Insert sample data into EncryptionKeys table
INSERT INTO EncryptionKeys (userID, encryptionKey, keyCreated) VALUES 
(1, 'privKey_V7FLUT3T', '2023-01-05 12:34:56'),
(2, 'privKey_V5U4T3S2', '2023-01-07 08:30:00'),
(3, 'privKey_R1Q2P3O4', '2023-01-09 10:15:24'),
(4, 'privKey_N8M7L6K5', '2023-01-12 11:45:50'),
(5, 'privKey_J2I1H0G9', '2023-01-14 14:00:12');

-- Insert sample data into Contacts table
INSERT INTO Contacts (userID, contactEmail, dateAdded) VALUES 
(1, 'user1@example.com', '2023-01-15 09:00:00'),
(2, 'user2@example.com', '2023-01-16 10:00:00'),
(3, 'user3@example.com', '2023-01-17 11:00:00'),
(4, 'user4@example.com', '2023-01-18 12:00:00'),
(5, 'user5@example.com', '2023-01-19 13:00:00');

-- Enable foreign key checks and autocommit
SET FOREIGN_KEY_CHECKS = 1;
COMMIT;