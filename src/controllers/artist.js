const db = require("../db/index");

const createArtist = async (req, res) => {
  const { name, genre } = req.body;

  try {
    const {
      rows: [artist],
    } = await db.query(
      "INSERT INTO Artists (name, genre) VALUES ($1, $2) RETURNING *",
      [name, genre]
    );
    res.status(201).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAllArtists = async (_, res) => {
  try {
    const { rows } = await db.query("SELECT * from Artists");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getArtistById = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      rows: [artist],
    } = await db.query("SELECT * from Artists WHERE id = $1", [id]);

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const putArtist = async (req, res) => {
  const { name, genre } = req.body;
  const { id } = req.params;

  try {
    const {
      rows: [artist],
    } = await db.query(
      "UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *",
      [name, genre, id]
    );

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const patchArtist = async (req, res) => {
  const { name, genre } = req.body;
  const { id } = req.params;

  let query, params;

  if (name && genre) {
    query =
      "UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *";
    params = [name, genre, id];
  } else {
    query =
      "UPDATE Artists SET " +
      (name ? "name = $1" : "genre = $1") +
      "WHERE id = $2 RETURNING *";
    params = [name || genre, id];
  }

  try {
    const {
      rows: [artist],
    } = await db.query(query, params);

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteArtist = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      rows: [artist],
    } = await db.query("DELETE from Artists WHERE id = $1 RETURNING *", [id]);

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }

    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  putArtist,
  patchArtist,
  deleteArtist,
};
