export class Computer {
  constructor(cpu, gpu, ram, storage, motherboard) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.storage = storage;
    this.motherboard = motherboard;
  }

  powerOn() {
    console.log(`Ligando...`);
  }

  powerOff() {
    console.log(`Desligando...`);
  }
}