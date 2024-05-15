
interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

class CreateTable implements CreateTableUseCase {
  constructor(/*DI - Dependency Injection*/) { }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = '';
    const headerMessage: string = `
----------------------------
      Tabla del ${base}
----------------------------\n
`;
    for (let i: number = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    outputMessage = headerMessage + outputMessage;
    return outputMessage;
  }
}

export {
  CreateTable,
  CreateTableUseCase,
  CreateTableOptions,
}
