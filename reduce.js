const arrAngka = [1, 2, 3, 4, 5];

const result = arrAngka.reduce((nilaiSebelumnya, nilaiSaatIni) => {
  return nilaiSebelumnya + nilaiSaatIni;
});

console.log(result);