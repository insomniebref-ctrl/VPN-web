const bouton = document.querySelector("button");

bouton.addEventListener("click", function() {

    bouton.innerHTML = "🛡️ Protection activée";

    bouton.style.background = "#16a34a";

    alert("VPN-Web protège maintenant votre navigation 🔒");

});
