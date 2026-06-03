class PalabrasAhorcado{

private List <string> palabras;

public PalabrasAhorcado(){
    this.palabras = new List <string>();
    palabras.Add("AVENTURA");
    palabras.Add("ELEFANTE");
    palabras.Add("ORQUESTA");
    palabras.Add("GUITARRA");
    palabras.Add("MARIPOSA");
    palabras.Add("CHOCOLATE");
    palabras.Add("PRIMAVERA");
    palabras.Add("ASTRONAUTA");
    palabras.Add("COMPUTADORA");
    palabras.Add("ELECTRODOMESTICO");
}
public string ObtenerPalabra(){
    Random random = new Random();
    int numRandom = random.Next(0,11);
    string palabraAdivinar = palabras[numRandom];
    return palabraAdivinar;
}
}