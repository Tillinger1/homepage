// Platzhalter - Später SQL
var teilnehmer = [
    {
        username: "till",
        password: "a"
    },
    {
        username: "sven",
        password: "b" 
    },
    {
        username: "robert",
        password: "c"
    },
    {
        username: "phillip",
        password: "d"
    },
    {
        username: "kenneth",
        password: "e"
    }
]

// Funktion für die Anmeldung
function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < teilnehmer.length; i++ ){
        if(username == teilnehmer[i].username && password == teilnehmer[i].password){
            console.log(username + " ist angemeldet")
            
            window.location.href = 'seite1.htm';
            return
        }
    }
    if (username==='' || password===''){
        console.log("Gib was ein, du Sack")
        alert("Sack")
    }else{
        console.log("Username oder Passwort falsch.")
        alert("Username oder Passwort falsch.")
    }
    //console.log("Username oder Passwort falsch.")
}

// Funktion für die Account-Erstellung
function acc(){
    console.log("Platzhalter - Später Account-Erstellung")
}
