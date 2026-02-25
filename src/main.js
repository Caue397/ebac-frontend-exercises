import { Computer } from './entity/Computer.js';
import { Desktop } from './entity/Desktop.js';
import { Notebook } from './entity/Notebook.js';

const computer = new Computer('Intel Core i5', 'NVIDIA GeForce RTX 3060', '16GB', '512GB', 'ASUS ROG STRIX B550-I GAMING');
const desktop = new Desktop('Intel Core i5', 'NVIDIA GeForce RTX 3060', '16GB', '512GB', 'ASUS ROG STRIX B550-I GAMING', '500W', '4');
const notebook = new Notebook('Intel Core i5', 'NVIDIA GeForce RTX 3060', '16GB', '512GB', 'ASUS ROG STRIX B550-I GAMING', '5000mAh');

computer.powerOn();
desktop.powerOn();
notebook.powerOn();

notebook.chargeBattery();
desktop.activateFans();

desktop.deactivateFans();

computer.powerOff();
desktop.powerOff();
notebook.powerOff();