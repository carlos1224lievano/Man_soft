import { query } from "../../database/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MysqlUserRepository implements UserRepository {
  async deletebyid(id: number): Promise<string | null> {
    const sql = "DELETE FROM users WHERE id=?";
    const params: any[] = [id];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      if (result.affectedRows == 1) {
        return "Ya fue, lo eliminaste";
      } else {
        return "algo resulto mal :(";
      }
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<User[] | null> {
    const sql = "SELECT * FROM users";
    try {
      const [data]: any = await query(sql, []);
      const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));

      return dataUsers.map(
        (user: any) =>
          new User(user.id, user.name, user.lastname, user.email, user.password)
      );
    } catch (error) {
      return null;
    }
  }

  async getById(userId: number): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(
        result[0].id,
        result[0].name,
        result[0].lastname,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }
  async deleteById(userId: number): Promise<User | null> {
    const sql = "DELETE SELECT * FROM users WHERE id=?";
    const params: any[] = [userId];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(
        result[0].id,
        result[0].name,
        result[0].lastname,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }

  async createUser(
    name: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<User | null> {
    const sql =
      "INSERT INTO users (name, lastname, email, password) VALUES (?, ?, ?, ?)";
    const params: any[] = [name, lastname, email, password];
    try {
      const [result]: any = await query(sql, params);
      //El objeto Result es un objeto que contiene info generada de la bd
      /*No es necesaria la validación de la cantidad de filas afectadas, ya que, al
            estar dentro de un bloque try/catch si hay error se captura en el catch */
      return new User(result.insertId, name, lastname, email, password);
    } catch (error) {
      return null;
    }
  }
}
