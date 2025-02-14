import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("bairro - create", () => {
  it("Cria registro", async () => {
    const res1 = await testServer.post("/bairro").send({
      NOME: "São Genaro",
      ID_CIDADE: 1,
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });

  it("Tenta criar registro com campo faltando", async () => {
    const res2 = await testServer.post("/bairro").send({
      NOME: "São Genaro",
    });
    expect(res2.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res2.body).toHaveProperty('errors.ID_CIDADE');
  });
});
