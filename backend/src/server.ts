import app from "./app";

import sequelize from "./db";

sequelize.sync().then(async () => {
  await console.log("Conectado ao banco de dados!");
});

app.listen(process.env.PORT ? process.env.PORT : 5678, () => {
  console.log("Aplicação na porta 5678!");
});
