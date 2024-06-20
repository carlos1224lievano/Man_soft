import { Request, Response } from "express";

import { DeleteByIdUserUseCase } from "../../application/DeleteByIdUserUseCase";

/*Se utiliza private en el constructor para marcar la propiedad 
deleteByIdUserUseCase como privada, ya que es una buena práctica para las dependencias internas de la clase.*/
export class DeleteByIdUserController {
  constructor(readonly deleteByIdUserUseCase: DeleteByIdUserUseCase) {}
  async run(req: Request, res: Response) {
    /*Se agregó una validación para asegurar que el id sea un número válido. 
    Si no es un número válido, la api responderá con un código de estado 400 (Bad Request) y un mensaje de error.*/
    try {
      const id = parseInt(req.params.id);
      const dataUsers = await this.deleteByIdUserUseCase.run(id);
      res.status(200).json(dataUsers);
      /*devuelve datos o no. Si no se encuentran datos, significa que el usuario no existe en la base de datos, 
        y se responde con un código de estado 404 (Not Found) y un mensaje de error.*/
    } catch (Error) {
      res.status(500).json({ Error: "Error del servidor" });
    }
  }
}
