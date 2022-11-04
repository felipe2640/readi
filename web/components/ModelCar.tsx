import React, { useEffect, useState } from "react";
import { CarData } from "./FormCadastro";

import { TextInput } from "./TextInput";

const ModelCar = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterText, setFilterText] = useState({
    marca: "",
    tipoCambio: "",
  });

  const carTH = [
    "Marca",
    "Modelo",
    "Cor",
    "Ano de Fabricação",
    "Ano do Modelo",
    "Tipo de Cambio",
  ];
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/exchanges/?per_page=100&page=1`)
      .then((resp) => resp.json())
      .then(setData);
  }, []);

  useEffect(() => {
    if (data) {
      const marca = filterText.marca;
      const type = filterText.tipoCambio;

      setFilteredData(
        data.filter(
          (item: CarData) =>
            item.Marca.toLowerCase().includes(marca.toLowerCase()) &&
            item.tipoCambio.includes(type)
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [filterText, data]);

  return (
    <>
      <div className="flex flex-col  items-stretch gap-4 w-full max-w-sm align-top ">
        <div>
          <TextInput.Text text="Filtro" required={false} />
          <TextInput.Root className="bg-gray-100 ring-cyan-500">
            <TextInput.Input
              placeholder="Digite o modelo do carro"
              onChange={(event: any) =>
                setFilterText({ ...filterText, marca: event.target.value })
              }
            />
          </TextInput.Root>
        </div>
        <div className="grid grid-cols-3 bg-gray-100 text-center justify-center">
          <TextInput.Root className=" ring-cyan-500 ">
            <TextInput.Input
              type={"radio"}
              value={"automático"}
              onChange={(event: any) =>
                setFilterText({ ...filterText, tipoCambio: event.target.value })
              }
              id="automatico"
              className="peer/automatico form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300"
              name="status"
            />
            <label
              htmlFor="automatico"
              className="peer-checked/automatico:text-sky-500"
            >
              Automático
            </label>
            <TextInput.Input
              type={"radio"}
              value={"manual"}
              onChange={(event: any) =>
                setFilterText({ ...filterText, tipoCambio: event.target.value })
              }
              id="manual"
              className="peer/manual form-radio mr-2 mb-0.5 ml-4 border-slate-300 text-sky-400 focus:ring-sky-300"
              name="status"
            />
            <label
              htmlFor="manual"
              className="peer-checked/manual:text-sky-500"
            >
              Manual
            </label>
          </TextInput.Root>
        </div>
        <a
          className="text-blue-600 py-1 cursor-pointer"
          onClick={() =>
            setFilterText({
              marca: "",
              tipoCambio: "",
            })
          }
        >
          Limpar
        </a>
      </div>

      <div className="flex content-center justify-center">
        <span className="text-center">{`Exibindo ${filteredData.length} de ${data.length}`}</span>
      </div>

      <div className="flex content-center justify-center flex-col">
        <table className="table-fixed">
          <thead className="bg-gray-100">
            <tr className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
              {carTH.map((item: any) => {
                return (
                  <th
                    key={`${item}_blank`}
                    className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900"
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          {data.map((item: CarData) => (
            <tbody className="text-gray-600 bg-white justify-center">
              <tr className="text-center">
                <td className="border-b border-slate-200 p-4 pl-8 ">
                  {item.Marca}
                </td>
                <td className="border-b border-slate-200 p-4 pl-8 ">
                  {item.Modelo}
                </td>
                <td className="border-b border-slate-200 p-4 pl-8 ">
                  {item.Cor}
                </td>
                <td className="border-b border-slate-200 p-4 pl-8 ">
                  {item.anoFabricacao}
                </td>
                <td className="border-b border-slate-200 p-4 pl-8 ">
                  {item.anoModelo}
                </td>
                <td className="border-b border-slate-200 p-4 pl-8 ">
                  {item.tipoCambio}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default ModelCar;
