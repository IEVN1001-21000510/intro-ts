export class Areas{
    public base:number;
    public altura:number;
    public radio:number;
    constructor(a:number,b:number, c:number){
        this.base=a;
        this.altura=b;
        this.radio=c;
    }

    Cuadrado(): number {
        return (this.base) * ( this.base);
    }

    Circulo(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }

    Triangulo(): number{
        return (this.base * this.altura)/2
    }

}
    let cuadrado = new Areas(4, 0, 0);
    console.log(`Área del cuadrado:, `,cuadrado.Cuadrado());

    let triangulo = new Areas(10, 5, 0);
    console.log(`Área del triángulo:`, triangulo.Triangulo());   

    let circulo = new Areas(3, 5, 3);
    console.log(`Área del círculo:`, circulo.Circulo());



