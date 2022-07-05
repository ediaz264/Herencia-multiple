package herencia;

public class Persona implements Afectuoso, Cordial {
	
    @Override
    public String saludar(String nombre) {
        return Afectuoso.super.saludar(nombre);
      
    }

    public static void main(String[] args) {
        Persona persona = new Persona();
        System.out.println(persona.saludar("Faider Camilo Trujillo Olaya"));
        System.out.println(persona.saludar("Hector David Alejandro Pacheco Mora"));
    }
}
