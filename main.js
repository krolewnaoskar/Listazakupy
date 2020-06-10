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
    stworzElementListy.appendChild(btn1);

    lista.appendChild(stworzElementListy);


    var pokazIlosc = document.getElementById('pokaz');
    var olNumer = document.querySelector('ol');

    pokazIlosc.value = olNumer.childNodes.length;

    inputZakupy= "" ;

    //remove one element list
    $(document).ready(function () {
        $('.btnclass').on('click', function () {
            $(this).parent().remove();
            pokazIlosc.value = olNumer.childNodes.length

        })

    })


})

//remove all list

$(document).ready(function () {
    $("#usun").click(function () {
        $("li").remove();
        $('#pokaz').val('');
    });
});