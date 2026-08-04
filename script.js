let vpnActif = false;

function changerVPN() {

    let etat = document.getElementById("etat");
    let bouton = document.getElementById("vpnButton");

    vpnActif = !vpnActif;

    if (vpnActif) {
        etat.textContent = "🟢 Protection VPN activée";
        bouton.textContent = "Désactiver VPN";
    } 
    else {
        etat.textContent = "🔴 Protection VPN désactivée";
        bouton.textContent = "Activer VPN";
    }

}
