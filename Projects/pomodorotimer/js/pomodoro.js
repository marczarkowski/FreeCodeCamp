/* trzy tryby: inactive, work, break -
kolor trybu inactive: #BDBDBD
kolor trybu active: main: #00BCD4 bar: #00cfd4;
kolor trybu break: main: #FF5722 bar: #ff5a26
tryb wpływa na kolor przycisku play, pozostalego czasu, baru, kropki, tła
do zrobienia: przetwarzanie czasu, dodanie dzwieków
*/
$(document).ready(function() {
    "use strict";
   $(".timeLeft").text(`${$(".sessionTime").text().trim()}:00`);

});
