


class Calc():

    def __init__(self, numA = []):
        self.numA = numA

    def suma (self):
        return(f'resultado{self.numA[0]+self.numA[1]}')

    def resta (self):
        return(f'resultado{self.numA[0]-self.numA[1]}')
    
    def multi (self):
        return(f'resultado{self.numA[0]*self.numA[1]}')

class Calc2():
    def __init__(self, numA, numB,):
        self.numA = numA
    
    def div (self):
        return(f'resultado{self.numA[0]/self.numA[1]}')
    
    def pow (self):
        return(f'resultado{self.numA[0]**self.numA[1]}')

class Suma (Calc, Calc2):
    def __init__(self,numA, numB, textA, textB):
        super().__init__(self, numA ,numB)
        self.textA = textA
        self.textB = textB
        
    textA=[]
    for i in range (0,1):
        if i <= 1:
            cifras = (f'ingrese la cifra{i}')
            textA.append(cifras)
    concatenar = Calc(textA),Calc(textA)
    concatenar.suma()
    concatenar.pow()
Suma()
    