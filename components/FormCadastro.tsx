import React, { SetStateAction } from "react";
import { useState } from "react";

import { Buttons } from "./Button";
import { TextInput } from "./TextInput";

export interface CarData {
  Marca: string;
  Modelo: string;
  Cor: string;
  anoFabricacao: number;
  anoModelo: number;
  tipoCambio: "automático" | "manual";
}

function FormCadastro() {
  const [data, setData] = useState<CarData>({
    Marca: "",
    Modelo: "",
    Cor: "",
    anoFabricacao: 0,
    anoModelo: 0,
    tipoCambio: "manual",
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(`/events`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    console.log(data);

    setLoading(false);
  };
  return (
    <>
      <form
        className="flex flex-col  items-stretch gap-4 w-full max-w-sm "
        onSubmit={handleLogin}
      >
        <div className="grid grid-flow-col-dense justify-center grid-cols-2 gap-3 grid-rows-3">
          <label htmlFor="Marca" className="flex flex-col col-span-2 gap-3">
            <TextInput.Text text={"Marca"} required={true} />
            <TextInput.Root className="bg-gray-100 ring-messenger">
              <TextInput.Input
                placeholder={`Digite a marca`}
                value={data.Marca}
                onChange={(evt: any) =>
                  setData({ ...data, Marca: evt.target.value })
                }
                required
              />
            </TextInput.Root>
          </label>
          <label htmlFor="Modelo" className="flex flex-col gap-3">
            <TextInput.Text text={"Modelo"} required={true} />
            <TextInput.Root className="bg-gray-100 ring-messenger">
              <TextInput.Input
                placeholder={`Digite o modelo`}
                value={data.Modelo}
                onChange={(evt: any) =>
                  setData({ ...data, Modelo: evt.target.value })
                }
                required
              />
            </TextInput.Root>
          </label>

          <label htmlFor="Ano de fabricação" className="flex flex-col gap-3">
            <TextInput.Text text={"Ano de fabricação"} required={true} />
            <TextInput.Root className="bg-gray-100 ring-messenger">
              <TextInput.Input
                placeholder={`Digite a Ano de fabricação`}
                value={data.anoFabricacao}
                type="number"
                min="1900"
                max="2023"
                onChange={(evt: any) =>
                  setData({ ...data, anoFabricacao: evt.target.value })
                }
                required
              />
            </TextInput.Root>
          </label>
          <label htmlFor="Cor" className="flex flex-col gap-3">
            <TextInput.Text text={"Cor"} required={true} />
            <TextInput.Root className="bg-gray-100 ring-messenger">
              <TextInput.Input
                placeholder={`Digite a Cor`}
                value={data.Cor}
                onChange={(evt: any) =>
                  setData({ ...data, Cor: evt.target.value })
                }
                required
              />
            </TextInput.Root>
          </label>
          <label htmlFor="Ano do Modelo" className="flex flex-col gap-3">
            <TextInput.Text text={"Ano do modelo"} required={true} />
            <TextInput.Root className="bg-gray-100 ring-messenger">
              <TextInput.Input
                placeholder={`Digite a Ano do modelo`}
                value={data.anoModelo}
                type="number"
                min="1900"
                max="2023"
                onChange={(evt: any) =>
                  setData({ ...data, anoModelo: evt.target.value })
                }
                required
              />
            </TextInput.Root>
          </label>
        </div>
        <div className="grid grid-row-2 bg-gray-100 ">
          <TextInput.Root className="bg-gray-100 ring-cyan-500 ">
            <TextInput.Input
              type={"radio"}
              value={"automático"}
              onChange={(event: any) =>
                setData({ ...data, tipoCambio: event.target.value })
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
                setData({ ...data, tipoCambio: event.target.value })
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

        <Buttons.Submit>
          {loading ? (
            <>
              <Buttons.Icon
                icon="icomoon-free:spinner2"
                className="animate-spin h-5 w-5 mx-2 cursor-progress"
              />
              <Buttons.Text text="Processing..." />
            </>
          ) : (
            <Buttons.Text text="Cadastrar" />
          )}
        </Buttons.Submit>
      </form>
    </>
  );
}

export default FormCadastro;
