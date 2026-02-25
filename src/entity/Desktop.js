import { Computer } from './Computer.js';

export class Desktop extends Computer {
  constructor(cpu, gpu, ram, storage, motherboard, powerSupply, fans) {
    super(cpu, gpu, ram, storage, motherboard);
    this.powerSupply = powerSupply;
    this.fans = fans;
  }
  
  activateFans() {
    console.log(`Ativando as fans...`);
  }

  deactivateFans() {
    console.log(`Desativando as fans...`);
  }
}