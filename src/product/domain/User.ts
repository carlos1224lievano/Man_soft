export class User {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly lastname: string,
    readonly email: string,
    readonly password: string
  ) {}
}
