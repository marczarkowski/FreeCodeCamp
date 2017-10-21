## Lekcja 4 - Model pudełkowy

#### Jak są wyświetlane elementy?

Istnieją dwa sposoby wyświetlania elementów: blokowy (block) oraz liniowy (inline). Element block wykorzystuje całą
dostępną szerokość, niezależnie od swojej zawartości i zaczyna się od nowej linii. Element inline wykorzystuje szerokość
swojej zawartości i układa się w tej samej linii co poprzedni element. 

##### Display

Od wartości tej właściwości zależy czy element jest wyświetlany jako block, inline czy też w inny sposób. Każdy element
posiada domyślną wartość dla tej właściwości. Najpopularniejsze wartości właściwości `display` to `block`, `inline`,
`inline-block` oraz `none`.

Korzystając z wartości `inline-block` nasz element będzie zachowywał się jak block (przyjmując wszystkie właściwości
modelu pudełkowego) jednakże będzie wyświetlony w tej samej linii co poprzedzające elementy i nie zacznie się w nowej linii.

#### Czym jest model pudełkowy?

Zgodnie z koncepcją modelu pudełkowego **każdy element** jest prostokątnym pudełkiem posiadającym szerokość, wysokość, padding,
ramkę oraz margines.

Rdzeń naszego pudełka zależy od właściwości `width` oraz `height`, `padding` oraz `border` rozszerzają jego kolejne wymiary.
`margin` to przestrzeń występująca za `border`.
```aidl
// CSS
div {
  border = 6px solid #949599;
  height: 100px;
  margin: 20px;
  padding: 20px;
  width: 400px;
}

// Total width: margin-right + border-right + padding-right + width + padding-left + border-left + margin-left
// Total height: margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom
```
![alt text](http://learn.shayhowe.com/assets/images/courses/html-css/opening-the-box-model/box-model.png "Model pudełkowy")

Korzystając z powyższego wzoru po podstawieniu wartości naszego `div`a otrzymamy:

+ Width: 492px = 20px + 6px + 20px + 400px + 20px + 6px + 20px
+ Height: 192px = 20px + 6px + 20px + 100px + 20px + 6px + 20px

Brak zrozumienia modelu pudełkowego prowadzi do wielu problemów. Ustawiliśmy `width` na `400` pikseli, a nasz element
posiada szerokość `492` pikseli. Model pudełkowy jest oparty o dodawanie, musimy wziąć pod uwagę padding, border i margin.

##### Szerokość i wysokość

**Szerokość**

Domyślna szerokość zależy od wartości `display`. Elementy block mają domyślną szerokość `100%`, korzystając z całej horyzontalnej
przestrzeni jaka jest dostępna. Elementy inline i inline-block rozszerzają się i kurczą horyzontalnie aby dopasować się do
dostępnej przestrzeni. Elementy inline nie mogą mieć sztywnego rozmiaru, więc właściwości `width` oraz `height` dotyczą
wyłącznie elementów non-inline.

**Wysokość**

Domyślna wysokość elementu jest zależna od jego zawartości. Element będzie się rozszerzał albo kurczył, aby dopasować
się do swojej zawartości.

**Pamiętaj**: właściwości `width` i `height` mają zastosowanie wyłącznie dla elementów block i inline-block, dla elementów
inline zostaną zignorowane.

##### Margin i padding

Właściwości margin i padding posiadają domyślne wartości dla niektórych elementów, ich wielkość jest zależna od używanej
przeglądarki. Aby mieć pełny wpływ na tworzony dokument można wykorzystać [CSS Reset](http://meyerweb.com/eric/tools/css/reset/).

**Margin**

Margin znajduje się zaraz za ramką i jest całkowicie przezroczysty. Jest wykorzystywany do umiejscowienia elementu w konkretnej
części strony, w określonej odległości od pozostałych elementów.

**Pamiętaj**: elementy inline nie akceptują wertykalnych marginesów (top oraz bottom).

**Padding**

Padding działa podobnie do marginesu aczkolwiek wypełnia przestrzeń pomiędzy rdzeniem, a ramką. 

**Pamiętaj**: wertykalny padding jest akceptowany przez elementy inline, taki padding może nakładać się na elementy
znajdujące się w wyższych/niższych liniach.

**Deklarowanie padding i margin**

Właściwości `margin` oraz `padding` można zadeklarować za pomocą rozszerzonej i skróconej formy. W formie skróconej
przypisana wartość zostaje zastosowana dla wszystkich czterech stron elementu.

Aby ustawić oddzielne wartości dla `top` i `bottom` oraz `left` i `right` możemy podać dwie wartości: pierwsza określa
top/bottom, druga left/right. W przykładzie prezentujemy dodanie `10` pikseli dla top i bottom oraz `20` dla left i right.
```aidl
div {
  margin: 10px 20px;
}
```
Aby ustawić oddzielne wartości dla wszystkich stron elementu podajemy wartości w następującej kolejności: `top`, `right`,
`bottom`, `left` (kierunek wskazówek zegara). 

W wersji rozszerzonej możemy ustawić wartość dla konkretnej strony korzystając z unikalnych właściwości. 
```aidl
div {
  margin-top: 10px;
  padding-left: 6px;
}
```
Używanie wersji rozszerzonej jawnie ukazuje nasze intencje i prowadzi do mniejszej ilości wątpliwości, niż alternatywa
w postaci skróconej formy z użyciem `0` wartości dla pozostałych trzech stron.

**Pamiętaj**: `margin` i `padding` są przezroczyste i nie akceptują przypisywania kolorów, aczkolwiek margin wyświetla kolor tła
rodzica elementu, a padding posiada kolor tła aktualnego elementu.

#### Ramki

Właściwość `border` wymaga podania trzech wartości dla: `width`, `style` oraz `color`. W formie skróconej są podawane
w wymienionej kolejności. W formie rozszerzonej dzielmy te wartości na `border-width`, `border-style` oraz `border-color`.

Najpopularniejszymi wartościami dla `style` są `solid`, `double`, `dashed`, `dotted` oraz `none`.
```aidl
div {
  border: 6px solid #949599;
}
```

**Indywidualne ramki dla stron**

Podobnie jak w przypadku `margin` oraz `border` możemy ograniczyć się do określenia ramki dla jednej strony elementu, 
wykorzystując właściwości `border-top`, `border-right` itd. To nie wszystko, mamy nawet możliwość edytowania wyłącznie
określonej wartości naszej ramki, np. `border-bottom-width`.

**Promień ramki**

Ta właściwość pozwala na zaokrąglenie rogów naszej ramki. Poprawnymi wartościami dla `border-radius` są jednostki długości,
w tym procenty i piksele, które określaja promień, według którego zostaną zaokrąglone rogi. Podobnie jak w przypadku paddingu,
podanie jednej wartości odniesie się do wszystkich czterech rogów, dwie wartości wpływają kolejno na `top-left/bottom-right`
oraz `top-right/bottom-left`, cztery wartości dotyczą kolejno `top-left`, `top-right`, `bottom-right`, `bottom-left`.
Możemy użyć rozszerzonej formy wskazując konkretny róg, np. `border-top-right-radius`.

#### Rozmiar pudełka

W CSS3 wprowadzono właściwość `box-sizing`, która może wpływać na sposób działania modelu pudełkowego i to w jaki sposób
oblicza się rozmiar elementu. Właściwość akceptuje trzy główne wartości: `content-box`, `padding-box` oraz `border-box`.

**Content box**

Wartość `content-box` jest wartością domyślną, która odpowiada za mechanikę dodawania wszystkich właściwości pudełka.

**Padding box**

Wartość `padding-box` przekształca model pudełkowy umieszczając `padding` wewnątrz `width` i `height` elementu. Jeżeli
ustawimy `width` na `400` pikseli oraz `padding` na `20` pikseli to ostateczny `width` nadal będzie wynosił `400` pikseli.
Wraz z wzrostem `padding`'u zawartość elementu kurczy się proporcjonalnie, aby utrzymać całkowity `width` na określonym
poziomie.

Jeżeli dodamy `border` i `margin` to wartości zostaną dodane do `width` lub `height` w celu otrzymania pełnego rozmiaru.
Jeżeli dodamy `border` o szerokości `10` pikseli oraz `padding` o wielkości `20` pikseli to ostateczny `width` wyniesie
`420` pikseli.

**Border box**

Ostatnia wartość, `border-box` ma takie podobnie działanie jak `padding-box` jednakże do ostatecznej wartości włączamy
również wielkość `border`. 
```aidl
// CSS
div {
  box-sizing: border-box;
  width: 400px;
  padding: 20px;
  border: 10px solid red;
}
```

**Wybierając rozmiar pudełka**

Ogólnie rzecz biorąc najlepszym `box-sizing`'iem jest `border-box`. Znacznie ułatwia działania przy obliczaniu wielkości
elementu. Dodatkowo, mieszanie jednostek długości również staje się dużo bardziej intuicyjne. Jeżeli chcemy, żeby nasze
pudełko miało szerokość `40%`, a następnie dodamy `padding` o wielkości `20` pikseli oraz `border` o grubości `10` pikseli
to nasz element nadal będzie zajmował `40%` dostępnego miejsca.


#### Narzędzia developera (DevTools)



