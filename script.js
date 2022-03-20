var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btnsave = document.getElementById("btn-save");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
btnsave.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}


/*--------- Ajout d'utilisateur ----------*/

function Add() {
    var Users = Data();
    NewUser(Users);
    reset();
}

function Data() {
    var Users = {};
    Users["id"] = Math.floor((1 + Math.random()) * 0x10000);
    Users["nom"] = document.getElementById("nom").value;
    Users["prenom"] = document.getElementById("prenom").value;
    Users["etat"] = document.getElementById("etat").value;
    Users["date"] = document.getElementById("date").value;
    Users["utilisateur"] = document.getElementById("utilisateur").value;
    Users["matricule"] = document.getElementById("matricule").value;
    return Users;
}

function NewUser(data) {
    var table = document.getElementById("users").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date;

    if (data.etat == 'Valide'){
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = '<center class="valide">'+ data.etat +'</center>';
    }
    else if(data.etat == 'En validation'){
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = '<center class="on-validation">'+ data.etat +'</center>';
    }
    else if (data.etat == 'Rejete'){
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = '<center class="rejected">'+ data.etat +'</center>';
    }

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.nom;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.prenom;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<center>'+ data.utilisateur +'</center>';

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.matricule;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = '<center><a onClick="Delete(this)"><img src="icons/delete.png"></a><center>';
}

function reset() {
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("etat").value = "";
    document.getElementById("date").value = "";
    document.getElementById("utilisateur").value = "";
    document.getElementById("matricule").value = "";
}



function Delete(td) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("users").deleteRow(row.rowIndex);    
    }
}
