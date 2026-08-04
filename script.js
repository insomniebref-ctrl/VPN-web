document.addEventListener("DOMContentLoaded", function () {

    let bouton = document.getElementById("vpnButton");
    let etat = document.getElementById("etat");

    let actif = false;

    bouton.addEventListener("click", function () {

        actif = !actif;

        if (actif) {
            etat.innerHTML = "🟢 VPN activé";
            bouton.innerHTML = "Désactiver VPN";
            bouton.style.background = "green";
        } else {
            etat.innerHTML = "🔴 VPN désactivé";
            bouton.innerHTML = "Activer VPN";
            bouton.style.background = "#0284c7";
        }

    });

});
