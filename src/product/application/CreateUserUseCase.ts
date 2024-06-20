import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class CreateUserUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    name: string,
    lastname: string,
    email: string,
    password: string
  ): Promise<User | null> {
    try {
      const User = await this.userRepository.createUser(
        name,
        lastname,
        email,
        password
      );
      return User;
    } catch (error) {
      return null;
    }
  }
}
