// Später Datenbank-Abfrage für die Fragen
var fragen = [
    {
        prompt: "Was trinkt Till am liebsten? (a) Coca Cola (b) Pepsi (c) Vita Cola (d) Fritz",
        answer: "b"
    },{
        prompt: "Wir sind Gruppe? (a) Berlin 2 (b) Paderborn (c) Nürnberg (d) Berlin 1",
        answer: "d"
    }
]

var punktzahl = 0;

function quiz(){
    for (var i=0; i < fragen.length;i++){
        var antwort = window.prompt(fragen[i].prompt)
        if(window.prompt!="" && antwort==fragen[i].answer){
            punktzahl++;
            alert("Richtig!")
        }else{
            alert("Falsch!")
        }
    }   
    alert("Du hast " + punktzahl + " von " + fragen.length + " Fragen richtig beantwortet")
}