import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

const { b: base, l: limit, s: show } = yarg;

const printTable = (baseNumber: number, limitNumber: number, showTable: boolean): void => {
  let outputMessage: string = '';
  const headerMessage: string = `
----------------------------
      Tabla del ${baseNumber}
----------------------------\n
`;

  for (let i: number = 1; i <= limitNumber; i++) {
    outputMessage += `${baseNumber} x ${i} = ${baseNumber * i}\n`;
  }

  outputMessage = headerMessage + outputMessage;

  if (showTable) {
    console.log(outputMessage);
  }

  const outputPath: string = 'outputs';
  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
  console.log('File created successfully!');
}

printTable(base, limit, show);
