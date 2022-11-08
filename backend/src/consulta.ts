import Carro from "./Car";

const Consultar = async (
  Marca,
  Modelo,
  Cor,
  anoFabricacao,
  anoModelo,
  tipoCambio
) => {
  let carro = await Carro.findAll({
    where: {
      Modelo,
    },
  });

  if (carro.length === 0) {
    await Carro.create({
      Marca: Marca,
      Modelo: Modelo,
      Cor: Cor,
      anoFabricacao: anoFabricacao,
      anoModelo: anoModelo,
      tipoCambio: tipoCambio,
    });
    return "Carro adicionado";
  }
  const car = {
    Modelo: Modelo,
    Cor: Cor,
    anoFabricacao: anoFabricacao,
    anoModelo: anoModelo,
    tipoCambio: tipoCambio,
  };

  const reduceData = reduce(carro);
  const test = isEquivalent(reduceData, car);

  if (test == true) {
    await Carro.create({
      Marca: Marca,
      Modelo: Modelo,
      Cor: Cor,
      anoFabricacao: anoFabricacao,
      anoModelo: anoModelo,
      tipoCambio: tipoCambio,
    });
    return "Carro adicionado";
  }

  throw new Error("Carro já existente");
};

function reduce(arr) {
  const array = {
    Modelo: arr.Modelo,
    Cor: arr.Cor,
    anoFabricacao: arr.anoFabricacao,
    anoModelo: arr.anoModelo,
    tipoCambio: arr.tipoCambio,
  };
  return array;
}

function isEquivalent(a, b) {
  
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

  
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  
  return true;
}

export default Consultar;
