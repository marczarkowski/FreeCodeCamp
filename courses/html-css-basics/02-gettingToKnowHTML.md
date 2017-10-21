## Lekcja 2 - Poznając HTML

Kursywa:

+ <em> - element inline służący do wyróżnienia, położenia nacisku na daną część tekstu (najpopularniejsza forma kursywy).

Przykładowo:

Call a doctor <em>now</em>!

+ <i> - element inline służący do zaznaczenia "alternatywnego głosu". Użycie: transliterowanie słów obcojęzycznych,
pojęć technicznych.

Przykładowo:

We ate <i>unagi</i>, <i>aburi-zake</i>, and <i>tako</i> sushi last night, but the <i>toro</i> sushi was all fished out.

<i>Nanotyrannus</i> (“dwarf tyrant”) is a genus of tyrannosaurid dinosaur, and is possibly a juvenile specimen of
<i>Tyrannosaurus</i>.

Pogrubienie:

+ <strong> - zaznaczenie, że wyróżniony tekst jest ważny (najpopularniejsza forma pogrubienia)
+ <b> - służy do stylistycznego pogrubienia tekstu bez nadawania mu większego znaczenia.

Aby otworzyć link w nowym oknie należy użyć atrybutu `target="_blank` wewnątrz elementu `<a>`.

Aby utworzyć linka do innej części tej samej strony należy wskazać w `href` jego id.
```
<body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>
```
