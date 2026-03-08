import { pool } from "./database.js";
import "./dotenv.js";
import upperMoonData from "../data/uppermoons.js";

const createUpperMoonsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS uppermoons;

    CREATE TABLE IF NOT EXISTS uppermoons (
      id            SERIAL PRIMARY KEY,
      slug          VARCHAR(50)  UNIQUE NOT NULL,
      name          VARCHAR(100) NOT NULL,
      upper_rank    INTEGER      NOT NULL,
      ability_type  VARCHAR(255) NOT NULL,
      arc           VARCHAR(100) NOT NULL,
      threat_level  VARCHAR(50)  NOT NULL,
      image         VARCHAR(255) NOT NULL,
      description   TEXT         NOT NULL
    )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 uppermoons table created successfully");
  } catch (err) {
    console.error("⚠️ error creating uppermoons table", err);
  }
};

const seedUpperMoonsTable = async () => {
  await createUpperMoonsTable();

  upperMoonData.forEach((moon) => {
    const insertQuery = {
      text: "INSERT INTO uppermoons (slug, name, upper_rank, ability_type, arc, threat_level, image, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    };

    const values = [
      moon.slug,
      moon.name,
      moon.upperRank,
      moon.abilityType,
      moon.arc,
      moon.threatLevel,
      moon.image,
      moon.description,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting moon", err);
        return;
      }

      console.log(`✅ ${moon.name} added successfully`);
    });
  });
};

seedUpperMoonsTable();
