//creazione var
var ticketUser = document.getElementById('ticket_user');
// calcoli dei km

// calcolo della fascia d'età
var btnTicket = document.getElementById('ticketgenerator');
btnTicket.addEventListener("click", function () {
  //display ticket
  ticketUser.style.opacity = '1';
  ticketUser.style.transition = '0.3s ease-in-out';
  //genera ticket utente
   var userDataInput = document.getElementById('userdata');
   var userKmInput = document.getElementById('user_km');
   var offerInput = document.getElementById('offer');

   //selezione value
   var userData = userDataInput.value;
   var userKm = userKmInput.value;
   var offerOptions = offerInput.value;


   //calcoli biglietto
   var ticketKm = Number(0.21);
   var ticketprice = Number(ticketKm * userKm);

   if (offerOptions == "minorenne") {
     var minorOffer = Number((ticketprice * 20) / 100);
     document.getElementById('finalcost').innerHTML= Number(ticketprice - minorOffer);
     document.getElementById('discount').innerHTML= 'Sconto per minorenni';
   }  else if (offerOptions == "over65") {
     var olderOffer = Number((ticketprice * 40) / 100);
      document.getElementById('finalcost').innerHTML= Number(ticketprice - olderOffer);
      document.getElementById('discount').innerHTML= 'Sconto per anziani';
   } else {
     document.getElementById('finalcost').innerHTML= ticketprice;
     document.getElementById('discount').innerHTML= 'Prezzo standard';
   }

   // dati carrozza
   var numberVagon = Math.floor(Math.random() * 9) + 1;

   //generazione codice CP
   var cpNumbers = Math.floor(Math.random() * (100000 - 90000) + 90000);

   // elementi del biglietto
   var userName = document.getElementById('username');
   var discountType = document.getElementById('discount');
   var trainPlace = document.getElementById('trainplace');
   var cpCode = document.getElementById('cpcode');
   var finalCost = document.getElementById('finalcost');

   //inserimento dati biglietto

   userName.innerHTML= userData;
   trainPlace.innerHTML= numberVagon;
   cpCode.innerHTML= cpNumbers;
});

//btn annulla
var btnNull = document.getElementById('ticketnull');
btnNull.addEventListener('click', function () {

  //annullamento biglietto
  ticketUser.style.opacity = "0";
  ticketUser.style.transition = '0.3s ease-in-out';
});
