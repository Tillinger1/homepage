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
        username: "philipp",
        password: "d"
    },
    {
        username: "kenneth",
        password: "e"
    }
]


function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < teilnehmer.length; i++ ){
        if(username == teilnehmer[i].username && password == teilnehmer[i].password){
            console.log(username + " ist angemeldet")
            
            return
        }
    }
    var login = false;
    if (username==='' && password===''){
        console.log("Gib was ein, du Sack")
    }else{
        console.log("Username oder Passwort falsch.")
    }
    //console.log("Username oder Passwort falsch.")
}

function acc(){
    console.log("Platzhalter - Später Account-Erstellung")
}
