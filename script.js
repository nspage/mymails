//la fonction ci-dessous calcul le nombre de mails recus puis l'insere dans
//le html a cote de "messages totale"
function display() { var totalMsgCount = document.getElementsByClassName('trash').length ;
document.getElementById('count').innerText = totalMsgCount;}

//lance et affiche le calcul du nombre de mails au lancement de la page
display();

//cette for loop ecoute le click du btn 'trash'
//retire la div parent du btn 'trash' en question et rafraichit le calcul du total
for (var i=0; i<document.getElementsByClassName('trash').length; i++) {
  document.getElementsByClassName('trash')[i].addEventListener("click",
   function(){
     this.parentNode.remove();
    display();
  }
  );
}

/**
var doc = new jsPDF();
var specialElementHandlers = {
    '#print-btn': function (element, renderer) {
        return true;
    }
};

$('#submit').click(function () {
    doc.fromHTML($('#print').html(), 15, 15, {
        'width': 100,
            'elementHandlers': specialElementHandlers
    });
    doc.save('pdf-version.pdf');
});
**/
