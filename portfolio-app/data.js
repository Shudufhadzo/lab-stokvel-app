const mysql = require('mysql');
const data = require('./dummy.js'); // Corrected require statement

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Liverpool10##",
  database: "stokvel"
});

connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB');
    throw error;
  }
  console.log('Connected!');

  // Function to insert a user and handle duplicate entry error
  const insertUser = (userId) => {
    connection.query('INSERT INTO users SET ?', { id: userId }, (error, results, fields) => {
      if (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          console.log(`User with userId ${userId} already exists. Skipping insertion.`);
        } else {
          throw error;
        }
      } else {
        console.log(`Inserted user with userId ${userId}`);
      }
    });
  };

  // Function to insert stokvels for a user
  const insertStokvels = (userId, stokvels) => {
    stokvels.forEach(stokvel => {
      stokvel.userId = userId; // Add userId to stokvel object
      connection.query('INSERT INTO stokvels SET ?', stokvel, (error, results, fields) => {
        if (error) throw error;
      });
    });
  };

  // Insert users
  data.forEach(user => {
    const { userId, stokvels } = user;

    // Check if user already exists before inserting
    connection.query('SELECT * FROM users WHERE id = ?', userId, (error, results, fields) => {
      if (error) throw error;

      if (results.length === 0) {
        // User doesn't exist, insert user
        insertUser(userId);
      } else {
        console.log(`User with userId ${userId} already exists. Skipping insertion.`);
      }

      // Insert stokvels for this user
      insertStokvels(userId, stokvels);

      // Check if this is the last user
      if (userId === data[data.length - 1].userId) {
        // Close the connection after all queries have completed
        connection.end();
      }
    });
  });
});
