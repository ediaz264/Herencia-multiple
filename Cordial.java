package herencia;

public interface Cordial {

	default String saludar(String nombre) {
        return "Buenas " + nombre;
    }
}
