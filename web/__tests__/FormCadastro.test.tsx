import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../pages/index";

const setup: any = () => {
  const dom = render(<Home />);
  const marca = dom.getByPlaceholderText("Digite a marca");
  const modelo = dom.getByPlaceholderText("Digite o modelo");
  const anoFabricao = dom.getByPlaceholderText("Digite a Ano de fabricação");
  const cor = dom.getByPlaceholderText("Digite a Cor");
  const anoModelo = dom.getByPlaceholderText("Digite a Ano do modelo");
  const manual = dom.getByTestId("manual");
  const automatic = dom.getByTestId("automático");

  return {
    dom,
    marca,
    modelo,
    anoFabricao,
    cor,
    anoModelo,
    manual,
    automatic,
  };
};

const car = {
  Marca: "Honda",
  Modelo: "Civic",
  Cor: "Branca",
  anoFabricacao: "2018",
  anoModelo: "2019",
  tipoCambio: "manual",
};

describe("General CoinList test", () => {
  beforeAll(() => {});

  it("Verificar se os inputs aparecem", () => {
    //Arrange
    const { marca, modelo, anoFabricao, cor, anoModelo, manual, automatic } =
      setup();

    //Act
    fireEvent.change(marca, { target: { value: car.Marca } });
    fireEvent.change(modelo, { target: { value: car.Modelo } });
    fireEvent.change(anoFabricao, { target: { value: car.anoFabricacao } });
    fireEvent.change(cor, { target: { value: car.Cor } });
    fireEvent.change(anoModelo, { target: { value: car.anoModelo } });
    fireEvent.click(manual);

    //Assert

    expect(marca).toBeVisible();
    expect(marca.value).toBe("Honda");
    expect(modelo).toBeVisible();
    expect(modelo.value).toBe("Civic");
    expect(cor).toBeVisible();
    expect(cor.value).toBe("Branca");
    expect(anoFabricao).toBeVisible();
    expect(anoFabricao.value).toBe("2018");
    expect(anoModelo).toBeVisible();
    expect(anoModelo.value).toBe("2019");
    expect(manual).toBeVisible();
    expect(manual.value).toBe("manual");
    expect(automatic).toBeVisible();
  });
  it("Verificar se todos os campos são obrigatórios", async () => {
    //Arrange
    const {
      dom,
      marca,
      modelo,
      anoFabricao,
      cor,
      anoModelo,
      automatic,
      manual,
    } = setup();

    const submit = dom.getByText(/cadastrar/i);

    //Act
    await fireEvent.click(submit);

    //Assert
    expect(marca).toBeRequired();
    expect(modelo).toBeRequired();
    expect(anoFabricao).toBeRequired();
    expect(cor).toBeRequired();
    expect(anoModelo).toBeRequired();
    expect(manual).toBeRequired();
    expect(automatic).toBeRequired();
  });
});
