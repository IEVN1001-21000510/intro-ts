import {Areas} from './Areas';

class Volumenes extends Areas {
    constructor(base: number, altura: number, radio: number) {
        super(base, altura, radio);
    }
    VolumenPrisma(): number {
        return this.Cuadrado() * this.altura;
    }
    VolumenPiramide(): number {
        return (this.Triangulo() * this.altura) / 3;
    }
    VolumenCilindro(): number {
        return Math.PI * this.radio * this.radio * this.altura;
    }
}
const rectangulo = new Areas(2, 0,0);
console.log(`Área del rectángulo: ${rectangulo.Cuadrado()}`);
const triangulo = new Areas(10, 2,0);
console.log(`Área del triángulo: ${triangulo.Triangulo()}`);
const circulo = new Areas(5, 4,5);
console.log(`Área del círculo: ${circulo.Circulo()}`);

const prisma = new Volumenes(2, 2, 0);
console.log(`Volumen del prisma: ${prisma.VolumenPrisma()}`);
const piramide = new Volumenes(10, 2, 0);
console.log(`Volumen de la pirámide: ${piramide.VolumenPiramide()}`);
const cilindro = new Volumenes(0, 2, 2);
console.log(`Volumen del cilindro: ${cilindro.VolumenCilindro()}`);