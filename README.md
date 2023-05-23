  <h1>Music Library API</h1>
  <p>The Music Library API is an application for managing a music library. It allows users to perform CRUD operations on a database of artists and albums.</p>
  <h2>Learning Objectives</h2>
  <ol>
    <li>Designing and implementing an API for CRUD operations on a database</li>
    <li>Database design and management</li>
    <li>Working with SQL and Postgres</li>
  </ol>
  <h2>Getting Started</h2>
  <p>To use the Music Library API, follow the instructions below:</p>
  <h3>Installation</h3>
  <p>Clone the repository:</p>
  <pre><code>git clone https://github.com/your-username/music-library.git</code></pre>
  <p>Install the dependencies:</p>
  <pre><code>npm install</code></pre>
  <h3>Usage</h3>
  <p>Start the server:</p>
  <pre><code>npm start</code></pre>
  <p>The server will start running on <code>http://localhost:3000</code>.</p>
  <h2>API Endpoints Example - /artists</h2>
  <h3>POST /artists</h3>
  <p>Create a new artist in the database.</p>
  <h3>GET /artists</h3>
  <p>Get all artists records from the database.</p>
  <h3>GET /artists/:id</h3>
  <p>Get an artist record by ID from the database.</p>
  <h3>PUT /artists/:id</h3>
  <p>Update an artist record by ID in the database.</p>
  <h3>PATCH /artists/:id</h3>
  <p>Partially update an artist record by ID in the database.</p>
  <h3>DELETE /artists/:id</h3>
  <p>Delete an artist record by ID from the database.</p>
  
  <h2>Testing</h2>
  <p>The Music Library API includes unit tests to ensure its functionality. To run the tests, use the following command:</p>
  <pre><code>npm test</code></pre>
