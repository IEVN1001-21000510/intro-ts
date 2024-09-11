interface Reproductor{
    Volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    Volumen:58,
    segundo:30,
    cancion:"La vida es un sueño",
    detalles:{
        autor:"Fernando Rojas",
        year:1500
    }
}
/*console.log(`El volumen actual es: ${reproductor.Volumen}`)
console.log(`Los segundos son: ${reproductor.segundo}`)
console.log(`La cancion es: ${reproductor.cancion}`)
console.log(`El cantante es: ${reproductor.detalles.autor}`)
console.log(`El año es: ${reproductor.detalles.year}`)*/

const{Volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;
console.log(`El volumen actual es: ${Volumen}`)
console.log(`Los segundos son: ${segundo}`)
console.log(`La cancion es: ${cancion}`)
console.log(`El cantante es: ${autor}`)
console.log(`El año es: ${year}`)

const dbz:string[]=['Goku', 'Majin boo', 'Babidy', 'Frezer']
console.log(`Personaje 1: ${dbz[0]}`)
console.log(`Personaje 2: ${dbz[1]}`)
console.log(`Personaje 3: ${dbz[2]}`)
console.log(`Personaje 4: ${dbz[3]}`)

const[a,b,c]=dbz;
console.log(`Personaje 1: ${a}`)
console.log(`Personaje 1: ${b}`)
console.log(`Personaje 1: ${c}`)
