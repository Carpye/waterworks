// podstawowe tworzenie zmiennych
int n = 5, m;

// dostepne typy dancyh
int a; // 8
long b; // 190234890124589158911231
float c; // 3.14
double d; // 195929.569029054
char e; // 'c'
string f; // "ala ma kota"
bool g; // true/false
decimal h; // 192038091843458

public float y = 20; // normalnie dostepne poprzez instancje i w klasie
private float x = 5; // dostepne tylko dla metod i wlasciwosci w klasie w ktorej jest zdefiniowane
protected float z = -5; // to samo co private ale dostepne tez w klasach dziedziczacych
static void ukraina() {this.destroy()} // static znaczy, ze nie mozna stworzyc tego instatncji i nie mozna dostac sie do statycznych rzeczy poprzez obiekt

// tworzenie klas
namespace Swiat {
  class Wojna { // klasa
    /* wyrazenia public, private, static
    i protected dostepne sa tylko w klasach*/
    private string ukraina = "😅";

    private static void rosja() {
      ukraina = "😢";
    }

  }
}


