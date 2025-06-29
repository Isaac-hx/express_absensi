import mysql from 'mysql2/promise';
import dotenv from "dotenv"

dotenv.config()
export const pool = mysql.createPool({
  host:  process.env.DB_HOST || 'localhost',
  user:  process.env.DB_USER || 'root',
  password:  process.env.DB_PASSWORD || 'saydimas78',
  database:  process.env.DB_NAME || 'db_absensi',
  port:process.env.DB_PORT || 3306,
  connectionLimit: 10,
});
