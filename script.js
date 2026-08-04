let vpnActif = false;


const bouton = document.getElementById("vpnButton");
const etat = document.getElementById("etat");


if (bouton) {

    bouton.addEventListener("click", function() {


        vpnActif = !vpnActif;


        if (vpnActif) {

            etat.innerHTML = "🟢 VPN activé";

            bouton.innerHTML = "Désactiver VPN";

            bouton.style.background = "#16a34a";


        } else {

            etat.innerHTML = "🔴 VPN désactivé";

            bouton.innerHTML = "Activer VPN";

            bouton.style.background = "#0284c7";

        }


    });

}
