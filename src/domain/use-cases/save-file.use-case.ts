import fs from 'fs';

interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

class SaveFile implements SaveFileUseCase {
  constructor() { }

  execute({ fileContent, destination = 'outputs', fileName = 'table' }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

export {
  SaveFile,
  SaveFileUseCase,
  Options,
}
