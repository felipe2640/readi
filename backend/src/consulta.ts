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

  if (carro === null) {
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
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

export default Consultar;
