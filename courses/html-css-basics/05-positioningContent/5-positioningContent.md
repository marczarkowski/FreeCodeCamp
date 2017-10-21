## Lekcja 5 - Pozycjonowanie zawartości

#### Pozycjonowanie za pomocą float

Jednym ze sposobów pozycjonowania elementów jest właściwość `float`. Pozwala ona wyrwać element z normalnego
flow naszej strony i umieścić na lewo lub prawo względem rodzica. Wszystkie następne elementy będą opływały
ten element. Kiedy umieścimy właściwość `float` na kilku elementach jednocześnie możemy z nich stworzyć layout składający
się z kilku kolumn.

`float` przyjmuje kilka wartości, najpopularniejszymi są `left` i `right`. Pozwalają na opływanie z lewej lub prawej strony
rodzica elementu.

##### Float w praktyce

Część praktyczna znajduje się w plikach `floats.html` oraz `floats.css`.

Należy pamiętać, że właściwość `float` bazuje na tym, że element jest wyświetlany jako `block`. Jeżeli nie posiadał on 
dotychczas takiej wartości dla właściwości `display`, zostanie ona automatycznie zmieniona na `block` - co daje nam dodatkową
możliwość ustawienia wartości dla właściwości `width` oraz `height`.
