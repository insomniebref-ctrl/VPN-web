function activerVPN() {

    let etat = document.getElementById("etat");

    if (etat) {
        etat.innerHTML = "🟢 Protection VPN activée";
    }

}


function desactiverVPN() {

    let etat = document.getElementById("etat");

    if (etat) {
        etat.innerHTML = "🔴 Protection VPN désactivée";
    }

}
