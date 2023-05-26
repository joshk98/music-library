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
<p>Create an .env file in your root with the following:</p>
<pre><code>PGUSER=postgres
PGHOST=localhost
PGPASSWORD=password
PGDATABASE=music_library_dev
PGPORT=5432
PORT=3000
</pre></code>

<h2>Testing</h2>
<p>The Music Library API includes unit tests to ensure its functionality.</p>
<p>Create a docker container:</p>
<pre><code>docker run --name music-library -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres</code></pre>
<p>Create an .env.test file in your root with the following:</p>
<pre><code>PGPASSWORD=password
PGDATABASE=music_library_test
PGUSER=postgres
PGHOST=localhost
PGPORT=5432
</pre></code>

<h3>Usage</h3>

<p>Start the server:</p>
<pre><code>npm start</code></pre>
<p>The server will start running on <code>http://localhost:3000</code>.</p>

<p>Run the tests:</p>
<pre><code>npm test</code></pre>

<h2>API Endpoints: /artists</h2>
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

<h2>Contributing</h2>
<p>Contributions are welcome! If you'd like to contribute to the Music Library API, please follow these guidelines:</p>
<ul>
  <li>Fork the repository</li>
  <li>Create a new branch</li>
  <li>Make your changes</li>
  <li>Submit a pull request</li>
</ul>
