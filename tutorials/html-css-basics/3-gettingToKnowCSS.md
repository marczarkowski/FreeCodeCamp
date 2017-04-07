## Lekcja 3 - Poznając CSS

CSS obowiązuje kaskadowość stylów. W związku z tym w przypadku konfliktu właściwości wskazanego przez selektor
o tej samej wadze pierwszeństwo ma ten, który pojawił się jako ostatni.

#### Specyficzność selektorów

Poszczególne selektory (typ, klasa, ID) posiadają różne wagi specyficzności. Selektor typu posiada najniższą wagę równą
0-0-1. Selektor klasy ma średnią wagę specyficzności równą 0-1-0. Najwyższą wagę specyficzności posiada selektor ID
równą 1-0-0. Jak widać punkty specyficzności są podzielona na trzy kolumny. Pierwsza liczy selektory ID, druga kolumna
liczy selektory klas, a trzecia selektory typu.

Waga specyficzności ma wpływ na pierwszeństwo właściwości i może naruszać kaskadowość.
```aidl
// HTML

<p id="food">...</p>

// CSS
#food {
  background: green;
}
p {
  background: orange;
}
Ostateczny kolor elementu p#food = green.
```

#### Łączenie selektorów

Gdy zachodzi połączenie selektorów powinniśmy je czytać od prawej do lewej. Selektor najbardziej po prawej,
przy samym nawiasie klamrowym, jest nazywany _selektorem kluczowym_. Selektor kluczowy identyfikuje jakiego elementu
będą dotyczyły style.
```aidl
// HTML
<div class="hotdog">
  <p>...</p>
  <p>...</p>
  <p class="mustard">...</p>
</div>

// CSS
.hotdog p {
  background: brown;
}
.hotdog p.mustard {
  background: yellow;
}
```
Pierwszy połączony selektor zawiera dwa selektory: klasy i typu. Selektorem kluczowym jest selektor typu wskazujący na
elementy paragraph (`p`). Ten selektor jest wstępnie kwalifikowany przez selektor klasy `hotdog`. W ten sposób połączony
selektor wybierze elementy `p` znajdujące się wewnątrz elementów z klasą `hotdog`.

Drugi selektor łączy w sobie trzy selektory: dwa klasowe i jeden typu. Z przykładem poprzednim różni go jedynie
dodanie dodatkowego selektora klasowego `mustard` do selektora typu `p`. Nowy selektor klasowy znajduje się najbliżej
nawiasu klamrowego, więc to on jest selektorem kluczowym i wszystkie poprzedzające go selektory są wstępnymi kwalifikatorami.

#### Spacje w selektorach

Spacje mają decydujący wpływ na semantykę selektora. Gdybyśmy pozbyli się selektora `p` i zastąpili go spacją wybrane
zostałyby wszystkie elementy posiadające klasę `mustard`. Najlepszą praktyką jest unikanie łączenia selektorów klas i typów.
Na ogół powinniśmy wybierać wszystkie elementy posiadające daną klasę, a nie tylko te posiadające określony typ.
Przykład: `.hotdog .mustard` zamiast `.hotdog p.mustard`.

#### Specyficzność w połączonych selektorach

Łącząc selektory, łączymy ich wagi specyficzności. Wracając do poprzedniego przykładu, pierwszy selektor, `.hotdog p`
posiada selektor klasy i typu. Jego łączna waga wynosi: 0-1-1.

Drugi selektor, `.hotdog p.mustard`, zawiera dwa selektory klas i jeden typu. Jego łączna waga wynosi: 0-2-1.

Biorąc pod uwagę, że selektor drugi posiada wyższą wagę, niż pierwszy to nawet zamiana ich kolejności w strukurze pliku
nie wpłynęłaby na sposób wyświetlenia dokumentu.

#### Warstwy styli za pomocą wielu klas

Aby utrzymać niskie wagi naszych selektorów można zachować jak największą modularność, dzieląc podobne style
pomiędzy elementami. Można uzyskać ten efekt za pomocą warstw utworzonych przez kilka klas.
```aidl
// HTML
<a class="btn btn-danger">...</a>
<a class="btn btn-success">...</a>

// CSS
.btn {
  font-size: 16px;
}
.btn-danger {
  background: red;
}
.btn-success {
  background: green;
}
```
W ten sposób obydwa nasze przyciski posiadają czcionkę o tej samej wielkości i jednocześnie różnią
się kolorami tła.

#### Najczęściej wykorzystywane właściwości CSS

##### Kolory

Wszystkie kolory w CSS są zdefiniowane w przestrzeni kolorów sRGB (standard red, green, blue). Mamy cztery sposoby
na przedstawianie wartości sRGB w CSS: słowa kluczowe, notacja heksadecymalna, wartości RGB i HSL.

**Słowa kluczowe**

Wartości słów kluczowych są mapowane na wybrany kolor. Zakres nazw i dopasowane do nich kolory są określone przez
specyfikację CSS.
```aidl
.task {
  background: maroon;
}
.count {
  background: yellow;
}
```
Słowa kluczowe są proste w użyciu, ale zapewniają ograniczone możliwości stąd nie sa najpopularniejszą formą
wartości kolorów.

**Kolory heksadecymalne**

Składają się z `#` i następujących po nim trzech lub sześciu znaków. W notacji z użyciem sześciu znaków, pierwsze dwa
odpowiadają za kanał czerwony, trzeci i czwarty za kanał zielony, a dwa ostatnie za kanał niebieski.

Poszczególne znaki przyporządkowane do tych samych kanałów tworzą pary. W notacji z użyciem trzech znaków
te pary są zredukowane do jednego znaku. Odcień pomarańczowego przedstawiony za pomocą wartości heksadecymalnej
`#FF6600` można przedstawić jako `#F60`.

Pary znaków są otrzymywane przetwarzając liczby od `0` do `255` do notacji heksadecymalnej (podstawa-16). `0` to czarny,
a `f` to biały.
```aidl
// CSS
.task {
  background: #800000; // maroon
}

.count {
  background: #ff0; // yellow
}
```
Heksadecymalna reprezentacja kolorów stała się popularna ze względu na szeroki zakres możliwości (16,7 miliona kolorów).

**Kolory RGB i RGBa**

Kolor RGB przedstawia się za pomocą funkcji `rgb()`. Funkcja akceptuje trzy oddzielone przecinkami wartości
(pierwsza - red, druga - green, trzecia - blue) w zakresie `0` do `255`. Gdybyśmy chcieli odtworzyć wcześniej przytoczony
odcień pomarańczowego użylibyśmy `rgb(255, 102, 0)`. Podobnie moglibyśmy odwzorować `maroon` oraz `yellow`.
```aidl
.task {
  background: rgb(128, 0, 0);
}

.count {
  background: rgb(255, 255, 0);
}
```
Kolory RGB mogą również zawierać kanał alpha (przezroczystość) za pomocą funkcji `rgba()`. Funkcja ta przyjmuje czwartą wartość,
będącą numerem od `0` do `1`. `0` zapewnia kolor w pełni przezroczysty, przez co byłby niewidzialny, a `1` to kolor matowy.
Wartości pomiędzy `0` i `1` decydują o stopniu przezroczystości.