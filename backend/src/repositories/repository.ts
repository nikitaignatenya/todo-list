import { pool } from "../db";
import { iTask } from "../interfacies/interface";

async function getDataRep() {
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const sql = "select * from tasks";
    const result = await connection.query(sql);
    await connection.query("COMMIT");
    return result.rows;
  } catch (error) {
    await connection.query("ROLLBACK");
    throw new Error();
  }
}
async function postDataRep(
  title: string,
  description: string,
  completed: string,
  createdAt: any,
): Promise<iTask[]> {
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const sql1 =
      "insert into tasks (title, description, completed, createdAt) values ($1, $2, $3, $4)";
    await connection.query(sql1, [title, description, completed, createdAt]);
    const sql2 = "select * from tasks";
    const result = await connection.query(sql2);
    await connection.query("COMMIT");
    return result.rows;
  } catch (error) {
    await connection.query("ROLLBACK");
    throw new Error();
  }
}
async function putDataRep(
  id: number,
  title: string,
  description: string,
  completed: string,
  createdAt: string,
): Promise<iTask[]> {
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const sql1 =
      "update tasks set title = $1, description = $2, completed = $3, createdAt = $4  where id = $5";
    await connection.query(sql1, [
      title,
      description,
      completed,
      createdAt,
      id,
    ]);
    const sql2 = "select * from tasks";
    const result = await connection.query(sql2);
    await connection.query("COMMIT");
    return result.rows;
  } catch (error) {
    await connection.query("ROLLBACK");
    throw new Error();
  }
}
async function deleteDataRep(id: number): Promise<iTask[]> {
  const connection = await pool.connect();
  try {
    await connection.query("BEGIN");
    const sql1 = "delete from tasks where id = $1";
    await connection.query(sql1, [id]);
    const sql2 = "select * from tasks";
    const result = await connection.query(sql2);
    await connection.query("COMMIT");
    return result.rows;
  } catch (error) {
    await connection.query("ROLLBACK");
    throw new Error();
  }
}

export { getDataRep, postDataRep, putDataRep, deleteDataRep };
