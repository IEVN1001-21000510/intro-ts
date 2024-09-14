import {Areas} from './Areas';

class Volumenes extends Areas {
    
    alturaV: number;

    constructor(base: number, radio: number, alturaV: number,) {
        super(base, radio,  alturaV);
        this.alturaV = alturaV;
    }

    Prisma(): number {
        return this.Cuadrado() * this.alturaV;
    }

    Piramide(): number {
        return (this.Cuadrado() * this.alturaV) / 3;
    }

    Cilindro(): number {
        return this.Circulo() * this.alturaV;
    }
}

let prisma = new Volumenes(4, 10, 5); 
console.log(`Volumen del prisma: `, prisma.Prisma());

let piramide = new Volumenes(6, 9, 1); 
console.log(`Volumen de la pirámide: `, piramide.Piramide());

let cilindro = new Volumenes(0, 7, 3);
console.log(`Volumen del cilindro: `, cilindro.Cilindro());
