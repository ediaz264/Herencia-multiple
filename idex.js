class Calc{
    constructor(numA=[]){
        this.numA = numA
    }
    }{
    const suma =()=> {
        return(`resultado ${this.numA[0]+this.numA[1]}`)
    }
    const resta =()=> {
        return(`resultado ${this.numA[0]-this.numA[1]}`)
    }
    const multi =()=> {
        return(`resultado ${this.numA[0]*this.numA[1]}`)
    }

}

class Calc2{
    constructor(numA=[]){
        this.numA = numA
    }
}{
    const div =()=> {
        return(`resultado ${this.numA[0]/this.numA[1]}`)
    }
    const pow =()=> {
        return(`resultado ${this.numA[0]**this.numA[1]}`)
    }
    
}

class Suma extends (Calc2, Calc){
    constructor(textA,textB){
        super(numA,numB)
        this.textA = textA
        this.textB = textB
    }
    }{   
    let textA=[]
    for (let i = 0; i <= 1; i++) {
        if (i <= 1){
            let cifras = prompt(`ingrese la cifra &{i}`)
            textA.append(cifras)    
        }
    }
    Calc.suma(textA)
    Calc2.pow(textA)
}