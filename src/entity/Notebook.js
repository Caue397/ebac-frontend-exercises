import { Computer } from './Computer.js';

export class Notebook extends Computer {
  constructor(cpu, gpu, ram, storage, motherboard, battery) {
    super(cpu, gpu, ram, storage, motherboard);
    this.battery = battery;
  }

  chargeBattery() {
    console.log(`Carregando a bateria...`);
  }
}