import { describe, expect, test, beforeEach, afterAll } from "@jest/globals";
import * as request from "supertest";
import app from "../src/app";
import sequelize from "../src/db";

import Carro from "../src/Car";

describe("Testes de integração", () => {
  beforeEach(async () => {
    await Carro.destroy({ where: {} });
  });

  afterAll(async () => sequelize.close());

  const payloadRequest = {
    Marca: "Renault",
    Modelo: "Sandeiro",
    Cor: "Branca",
    anoFabricacao: 2016,
    anoModelo: 2017,
    tipoCambio: "manual",
  };
  test("responder HTTP na raiz", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
  test("Todos os campos são obrigatórios", async () => {
    //Arrange
    const res = await request(app).post("/consulta").send(payloadRequest);

    //Assert
    expect(res.body.erro).toBeUndefined();
    expect(res.status).toBe(201);
    expect(res.body).toEqual("Carro adicionado");
  });
  test("Não se deve cadastrar o mesmo carro duas vezes", async () => {
    //Arrange
    //Criação direto no banco de dados
    Carro.create({
      Marca: "renault",
      Modelo: "sandeiro",
      Cor: "branca",
      anoFabricacao: 2016,
      anoModelo: 2017,
      tipoCambio: "manual",
    });

    //Tentativa de criação de dados repetidos
    const res = await request(app).post("/consulta").send(payloadRequest);

    //Assert
    expect(res.body.erro).toBeDefined();
    expect(res.status).toBe(405);
  });
});
