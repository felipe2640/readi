import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarData } from "../components/FormCadastro";
import Home from "../pages/index";

const setFetchReturnData = (data: CarData[]) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  ) as jest.Mock;
};

const setup = () => {
  const dom = render(<Home />);
  const carros = dom.getByText(/carros/i);
  fireEvent.click(carros);
  return {
    dom,
  };
};

describe("General CoinList test", () => {
  beforeAll(() => {
    setFetchReturnData([
      {
        Marca: "Hyundai",
        Modelo: "HB20",
        Cor: "Branca",
        anoFabricacao: 2014,
        anoModelo: 2015,
        tipoCambio: "automático",
      },
      {
        Marca: "Honda",
        Modelo: "Civic",
        Cor: "Branca",
        anoFabricacao: 2018,
        anoModelo: 2019,
        tipoCambio: "manual",
      },
      {
        Marca: "Fiat",
        Modelo: "Palio",
        Cor: "Branca",
        anoFabricacao: 2022,
        anoModelo: 2022,
        tipoCambio: "manual",
      },
    ]);
  });

  it("Verificar se Renderizando os dados dos carros", async () => {
    //Arrange
    setup();
    const data1 = await screen.findByText("Hyundai");
    const data2 = await screen.findByText("Honda");

    //Assert
    expect(data1).toBeVisible();
    expect(data2).toBeVisible();
  });

  it("Verificando se o filtro está separando carros automáticos e manuais", async () => {
    //Arrange
    const { dom } = setup();
    const automatic = dom.getByTestId("automático");

    //Act

    fireEvent.click(automatic);

    //Assert

    const data = await screen.findByText("Exibindo 1 de 3");
    expect(data).toBeVisible();
  });

  it("Verificando os dois filtros está filtrando corretamente", async () => {
    //Arrange
    const { dom } = setup();
    const manual = dom.getByTestId("manual");
    const filterText = dom.getByPlaceholderText(/modelo do carro/i);

    //Act

    fireEvent.click(manual);
    fireEvent.change(filterText, { target: { value: "Civic" } });

    //Assert

    const data = await screen.findByText("Exibindo 1 de 3");
    expect(data).toBeVisible();
  });
  it("Verificando o botão de limpar os filtros", async () => {
    //Arrange
    const { dom } = setup();
    const clean = dom.getByText(/limpar/i);

    //Act
    fireEvent.click(clean);

    //Assert

    const data = await screen.findByText("Exibindo 3 de 3");
    expect(data).toBeVisible();
  });
});
