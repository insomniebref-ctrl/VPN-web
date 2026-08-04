document.addEventListener("DOMContentLoaded", function () {

    const bouton = document.getElementById("vpnButton");
    const etat = document.getElementById("etat");

    let actif = false;

    if (bouton && etat) {

        bouton.onclick = function () {

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

        };

    }

});
