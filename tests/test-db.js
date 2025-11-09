import pool from "../db/db.js";

(async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Conexión exitosa a PostgreSQL:", result.rows[0]);
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
  } finally {
    await pool.end();
  }
})();