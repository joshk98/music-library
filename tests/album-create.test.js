const { expect } = require("chai");
const request = require("supertest");
const db = require("../src/db");
const app = require("../src/app");

describe("create album", () => {
  describe("/artists/:id/albums", () => {
    describe("POST", () => {
      it("creates a new album in the database", async () => {
        // const { status: artistStatus, body: artistBody } = await request(app)
        //   .post("/artists")
        //   .send({
        //     name: "Tame Impala",
        //     genre: "rock",
        //   });

        // expect(artistStatus).to.equal(201);
        // expect(artistBody.name).to.equal("Tame Impala");
        // expect(artistBody.genre).to.equal("rock");

        const { status: albumStatus, body: albumBody } = await request(app)
          .post(`/artists/${artistBody.id}/albums`)
          .send({
            name: "Innerspeaker",
            year: 2010,
          });

        expect(albumStatus).to.equal(201);
        expect(albumBody.name).to.equal("Innerspeaker");
        expect(albumBody.year).to.equal(2010);
        expect(albumBody.artist_id).to.equal(artistBody.id);

        const { rows: albumData } = await db.query(
          `SELECT * FROM Album WHERE id = ${albumBody.id}`
        );
        expect(albumData[0].name).to.equal("Innerspeaker");
        expect(albumData[0].year).to.equal(2010);
        expect(albumData[0].artist_id).to.equal(artistBody.id);
      });
    });
  });
});
