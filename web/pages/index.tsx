import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Buttons } from "../components/Button";
import FormCadastro from "../components/FormCadastro";
import ModelCar from "../components/ModelCar";
import { TextInput } from "../components/TextInput";

const Home: NextPage = () => {
  const [isModelcar, setModelCar] = useState(true);
  const buttonIndex = ["Cadastro", "Carros"];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex border-gray-100 text-sm font-medium align-top justify-center ">
        <button
          onClick={() => setModelCar(true)}
          className={
            isModelcar
              ? "-mb-px border-b border-current p-4 text-cyan-500"
              : "-mb-px border-b border- p-4 hover:text-cyan-500"
          }
        >
          Cadastro
        </button>

        <button
          onClick={() => setModelCar(false)}
          className={
            isModelcar
              ? "-mb-px border-b border- p-4 hover:text-cyan-500"
              : "-mb-px border-b border-current p-4 text-cyan-500"
          }
        >
          Carros
        </button>
      </nav>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex flex-col justify-center items-center gap-4 pt-3  ">
          {isModelcar ? <FormCadastro /> : <ModelCar />}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
};

export default Home;
