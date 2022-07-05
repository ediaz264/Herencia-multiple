package herencia;

public interface Afectuoso {

	default String saludar(String nombre) {
        return "¡Saludos " + nombre + "! Venga ese abrazo";
    }
}
