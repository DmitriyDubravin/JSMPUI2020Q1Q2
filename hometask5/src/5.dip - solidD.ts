class BadFile {
  open() {
    console.log("opened");
  }
}

class DoomedCloud {
  showFile(file: BadFile) {
    file.open();
  }
}
new DoomedCloud().showFile(new BadFile());

// --- --- --- //

interface IFile {
  open(): void;
}

class GoodFile implements IFile {
  open() {
    console.log("opened");
  }
}

class Cloud {
  showFile(file: IFile) {
    file.open();
  }
}

new Cloud().showFile(new GoodFile());
