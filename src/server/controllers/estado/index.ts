import * as create from "./Create";
import * as getall from "./GetAll";
import * as getbyid from "./GetById";
import * as updatebyid from "./UpdateById";
//import * as deletebyid from "./DeleteById";

export const EstadoController = {
  ...create,
  ...getall,
  ...getbyid,
  ...updatebyid,
  //...deletebyid,
};
