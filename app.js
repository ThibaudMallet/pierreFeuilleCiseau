const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";

        if (joueur === robot) {
            resultat = "Egalité";
        }
        else if (
            (joueur === "Pierre" && robot === "Ciseau") ||
            (joueur === "Feuille" && robot === "Pierre") ||
            (joueur === "Ciseau" && robot === "Feuille")
        ) {
            resultat = "Gagné";
        }
        else {
            resultat = "Perdu"
        }
        document.querySelector(".resultat").innerHTML = `
            Joueur : ${joueur} <br>
            Robot : ${robot} <br>
            ${resultat}
        `;
    });
}
