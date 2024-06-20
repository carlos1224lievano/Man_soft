import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { DeleteByIdUserUseCase } from "../application/DeleteByIdUserUseCase";
import { GetAllUserUseCase } from "../application/GetAllUserUseCase";
import { GetByIdUserUseCase } from "../application/GetByIdUserUseCase";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteByIdUserController } from "./controllers/DeleteByIdUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { GetByIdUserController } from "./controllers/GetByIdUserController";
import { InMemoryUserRepository } from "./InMemoryUserRepository"; // Importa InMemoryUserRepository
import { MysqlUserRepository } from "./MysqlUserRepository";

// Instancia de MysqlUserRepository (ya existente en tu código)
export const mysqlUserRepository = new MysqlUserRepository();

// Instancia de InMemoryUserRepository
export const inMemoryUserRepository = new InMemoryUserRepository();

// Casos de uso usando MysqlUserRepository
export const createUserUseCase = new CreateUserUseCase(mysqlUserRepository);
export const getAllUserUseCase = new GetAllUserUseCase(mysqlUserRepository);
export const getByIdUserUseCase = new GetByIdUserUseCase(mysqlUserRepository);
export const deleteByIdUserUseCase = new DeleteByIdUserUseCase(
  mysqlUserRepository
);

// Controladores usando MysqlUserRepository
export const createUserController = new CreateUserController(createUserUseCase);
export const getAllUserController = new GetAllUserController(getAllUserUseCase);
export const getByIdUserController = new GetByIdUserController(
  getByIdUserUseCase
);
export const deleteByIdUserController = new DeleteByIdUserController(
  deleteByIdUserUseCase
);

// Casos de uso usando InMemoryUserRepository
export const createInMemoryUserUseCase = new CreateUserUseCase(
  inMemoryUserRepository
);
export const getAllInMemoryUserUseCase = new GetAllUserUseCase(
  inMemoryUserRepository
);
export const getByIdInMemoryUserUseCase = new GetByIdUserUseCase(
  inMemoryUserRepository
);
export const deleteByIdInMemoryUserUseCase = new DeleteByIdUserUseCase(
  inMemoryUserRepository
);

// Controladores usando InMemoryUserRepository
export const createInMemoryUserController = new CreateUserController(
  createInMemoryUserUseCase
);
export const getAllInMemoryUserController = new GetAllUserController(
  getAllInMemoryUserUseCase
);
export const getByIdInMemoryUserController = new GetByIdUserController(
  getByIdInMemoryUserUseCase
);
export const deleteByIdInMemoryUserController = new DeleteByIdUserController(
  deleteByIdInMemoryUserUseCase
);
