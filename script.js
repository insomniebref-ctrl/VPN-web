let vpnActif = false;


function changerVPN() {

    const etat = document.getElementById("etat");
    const bouton = document.getElementById("vpnButton");


    if (vpnActif === false) {

        vpnActif = true;

        etat.innerHTML = "🟢 Protection VPN activée";

        bouton.innerHTML = "Désactiver VPN";

    } else {

        vpnActif = false;

        etat.innerHTML = "🔴 Protection VPN désactivée";

        bouton.innerHTML = "Activer VPN";

    }

}
