const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/manipulacao-string', (req, res) => {
  const texto = req.body.texto;

  // Verificar se a string é um palíndromo
  const isPalindromo = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  // Contar o número de ocorrências de cada caractere na string
  const countCharacters = (str) => {
    const charMap = {};
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  };

  // Retornar resposta
  const resultado = {
    palindromo: isPalindromo(texto),
    ocorrencias_caracteres: countCharacters(texto)
  };

  res.json(resultado);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
