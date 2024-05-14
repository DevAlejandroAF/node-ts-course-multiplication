import fs from "fs";

let base: number = 5;

const printTable = (baseNumber: number): void => {
  let outputMessage: string = '';
  const headerMessage: string = `
----------------------------
      Tabla del ${baseNumber}
----------------------------\n
`;

  for (let i: number = 1; i <= 10; i++) {
    outputMessage += `${baseNumber} x ${i} = ${baseNumber * i}\n`;
  }

  outputMessage = headerMessage + outputMessage;
  console.log(outputMessage);
  const outputPath: string = 'outputs';
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
  console.log('File created successfully!');
}

printTable(base);
