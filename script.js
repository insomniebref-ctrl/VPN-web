let vpnActif = false;

function changerVPN() {

    let etat = document.getElementById("etat");
    let bouton = document.getElementById("vpnButton");

    vpnActif = !vpnActif;

    if (vpnActif) {

        etat.textContent = "🟢 Protection VPN activée";

        bouton.textContent = "Désactiver VPN";

        bouton.style.background = "#16a34a";

    } else {

        etat.textContent = "🔴 Protection VPN désactivée";

        bouton.textContent = "Activer VPN";

        bouton.style.background = "#0284c7";

    }

}
