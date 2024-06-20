import { UserRepository } from "../domain/UserRepository";

export class DeleteByIdUserUseCase {
  constructor(readonly userRepository: UserRepository) {}
  async run(id: number) {
    return this.userRepository
      .deletebyid(id)
      .then((deletebyid) => {
        console.log([deletebyid]);
        return deletebyid;
      })
      .catch((Error) => {
        console.log(Error);
      });
  }
}
