
document.getElementById('wyslij').addEventListener('click', function () {
    var inputZakupy = document.getElementById('produkt').value; //zmienna do tekstu
    var inputIlosc = document.getElementById('ilosc').value; //zmienna do ilośći
    var inputRodzaj = document.getElementById('wybor').value; //zmienna do wyboru lub rodzaju
    var lista = document.querySelector('ol'); //lista nadole
    var stworzElementListy = document.createElement('li');//stworzenie dynamiczne 
    stworzElementListy.setAttribute('class', 'liclass');//dodanie klasy
    var btn1 = document.createElement('button');// dodanie przycisku
    var textBtn1 = document.createTextNode('X');//dodanie tekstu 
    btn1.appendChild(textBtn1);//ddo przycisku btn 1 dodaje tekst ze zmiennej textBtn1
    btn1.setAttribute('class', 'btnclass'); //dodanie atrybutu klas o wartosci btnclass

    stworzElementListy.innerText = inputZakupy + ", " + "ilość" + " :" + inputIlosc + " " + inputRodzaj;//te co sie wyswietlają w tabelce
    stworzElementListy.appendChild(btn1);//dynamiczne dodanie buttona do drzewaDOM

    lista.appendChild(stworzElementListy);//dynamiczne dodanie zmiennej do drzewaDOM zmiennej stwórz element lisy


    var pokazIlosc = document.getElementById('pokaz');//zmienna łapiąca id pokaż
    var olNumer = document.querySelector('ol');// zmienna łapiąca element listy numerowanej

    pokazIlosc.value = olNumer.childNodes.length;//ustawienie aktualnej wartości elementów dodanych do listy
    inputZakupy = "";


    //usunięcie jednego elemtentu listy na kliknięcie przycisku "x"
    $(document).ready(function () {
        $('.btnclass').on('click', function () {
            $(this).parent().remove();
            pokazIlosc.value = olNumer.childNodes.length

        })

    })


})

//usuwanie wszystkiego z listy klikając przycisk "-"

$(document).ready(function () {
    $("#usun").click(function () {
        $("li").remove();
        $('#pokaz').val('');
    });
});