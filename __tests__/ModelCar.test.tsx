import { fireEvent, render, screen } from "@testing-library/react";
import { CarData } from "../components/FormCadastro";
import Home from "../pages/index";
const setFetchReturnData = (data: CarData[]) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  ) as jest.Mock;
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
    ]);
  });

  it("It should render API data", async () => {
    render(<Home />);
    const carros = screen.getByText(/carros/i);
    fireEvent.click(carros);
    await screen.findByText("Hyundai");
    await screen.findByText("Honda");
  });

  it("It should filter correctly", async () => {
    render(<Home />);
    const carros = screen.getByText(/carros/i);
    fireEvent.click(carros);
    await screen.getByLabelText(/Automático/i);
    // fireEvent.click(filter);

    // await screen.getByText("Hyundai");
  });

  it("It should render Button", async () => {
    render(<Home />);
    const carros = screen.getByText(/carros/i);
    fireEvent.click(carros);
    const clean = screen.getByText(/limpar/i);

    fireEvent.click(clean);
  });
});
