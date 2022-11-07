import type { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Buttons } from "../components/Button";
import FormCadastro from "../components/FormCadastro";
import ModelCar from "../components/ModelCar";

const Home: NextPage = () => {
  const [isModelcar, setModelCar] = useState<boolean>(true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Readi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex border-gray-100 text-sm font-medium align-top justify-center ">
        <Buttons.Index
          onClick={() => setModelCar(true)}
          text="Cadastro"
          ismodel={isModelcar ? 1 : 0}
        />
        <Buttons.Index
          onClick={() => setModelCar(false)}
          text="Carros"
          ismodel={isModelcar ? 0 : 1}
        />
      </nav>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="flex flex-col justify-center items-center gap-4 pt-3  ">
          {isModelcar ? <FormCadastro /> : <ModelCar />}
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Home;
