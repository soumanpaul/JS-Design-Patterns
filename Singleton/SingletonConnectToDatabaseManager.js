class DatabaseConnectionManager {
    constructor() {
      // Check if an instance already exists
      if (!DatabaseConnectionManager.instance) {
        // Simulating the process of creating a database connection
        this.connectToDatabase();
  
        // Create the instance
        DatabaseConnectionManager.instance = this;
      }
  
      // Return the instance
      return DatabaseConnectionManager.instance;
    }
  
    connectToDatabase() {
      console.log('Connected to the database.');
      // Additional connection logic...
    }
  
    // Example method to perform a database query
    query(sql) {
      console.log(`Executing query: ${sql}`);
      // Database query logic...
    }
  }
  
  // Usage example
  const dbConnectionManager1 = new DatabaseConnectionManager();
  const dbConnectionManager2 = new DatabaseConnectionManager();
  
  console.log(dbConnectionManager1 === dbConnectionManager2); // Output: true
  
  dbConnectionManager1.query('SELECT * FROM users'); // Output: Executing query: SELECT * FROM users
  dbConnectionManager2.query('INSERT INTO products (name, price) VALUES ("Product A", 10.99)'); // Output: Executing query: INSERT INTO products (name, price) VALUES ("Product A", 10.99)
  