import { User } from "./User";

export interface UserRepository {
  getAll(): Promise<User[] | null>;

  deletebyid(id: number): Promise<string | null>;

  getById(userId: number): Promise<User | null>;

  createUser(
    name: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<User | null>;
}
