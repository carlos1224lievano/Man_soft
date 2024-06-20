import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[];
  private currentId: number;

  constructor() {
    this.users = [];
    this.currentId = 1;
  }

  async deletebyid(id: number): Promise<string> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return "Usuario eliminado correctamente";
    } else {
      throw new Error("No se encontró el usuario");
    }
  }

  async getAll(): Promise<User[]> {
    return this.users.map(
      (user) =>
        new User(user.id, user.name, user.lastname, user.email, user.password)
    );
  }

  async getById(userId: number): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      return new User(
        user.id,
        user.name,
        user.lastname,
        user.email,
        user.password
      );
    } else {
      return null;
    }
  }

  async createUser(
    name: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<User> {
    const user = new User(this.currentId++, name, lastname, email, password);
    this.users.push(user);
    return user;
  }
}
