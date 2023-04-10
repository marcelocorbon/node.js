const fs = require("fs");

// Lê o arquivo de entrada
fs.readFile("teste.txt", "utf8", function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  // Converte o texto para letras maiúsculas
  const textoConvertido = data.toUpperCase();

  // Escreve o texto convertido no arquivo de saída
  fs.writeFile("saida.txt", textoConvertido, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log("O arquivo de saída foi salvo com sucesso.");
  });
});
