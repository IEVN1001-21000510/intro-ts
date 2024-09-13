class Persona3{
    protected nombre:string;
    protected edad:number;
    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }
    imprimir(){
        console.log(`Nombre ${this.nombre} Edad: ${this.edad}`);
    }
}
class Empleado extends Persona3{
    private sueldo:number;
    constructor(a:string,b:number,s:number){
        super(a,b);
        this.sueldo=s;
    }
    imprimir(){
        console.log(`Sueldo ${this.sueldo}`);
    }
    pagaImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.nombre} debe pagar impuestos Sueldo: ${this.sueldo}`);
        else
        console.log(`${this.nombre} no debe pagar impuestos Sueldo: ${this.sueldo}`);

    }
}
const persona3=new Persona3('Juan' , 45);
persona3.imprimir();
const empleado1=new Empleado('Ana',22,7000);
empleado1.imprimir();
empleado1.pagaImpuestos();