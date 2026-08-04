let vpnActif = false;

function changerVPN() {

    let etat = document.getElementById("etat");
    let bouton = document.getElementById("vpnButton");

    vpnActif = !vpnActif;

    if (vpnActif) {

        etat.innerHTML = "🟢 Protection VPN activée";
        bouton.innerHTML = "Désactiver VPN";
        bouton.style.background = "green";

    } else {

        etat.innerHTML = "🔴 Protection VPN désactivée";
        bouton.innerHTML = "Activer VPN";
        bouton.style.background = "";

    }

}
