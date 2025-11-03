let produits = [
  { nom: "Sac Chanel Classic", prix: 12000 ,image : "images/Sacs Chanel.jpg" },
  { nom: "Sac Louis Vuitton Neverfull", prix: 9500 ,image : "images/Louis Vuitton Neverfull.jpg" },
  { nom: "Sac Gucci Dionysus", prix: 8800 , image : "images/Gucci Dionysus.jpg"},
  { nom: "Sac Prada Re-Edition", prix: 7500 , image : "images/Sac Prada Re-Edition.jpg" }
];

let catalogue = document.getElementById("catalogue");
let recherche = document.getElementById("recherche");

function afficher(liste) {
  catalogue.innerHTML = "";
  liste.forEach(p => {
    catalogue.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.nom}" width="150">
        <p>${p.nom} — ${p.prix} dh</p>
      </div>
    `;
  });
}

afficher(produits);

recherche.addEventListener("input", () => {
  let mot = recherche.value.toLowerCase();
  let resultats = produits.filter(p => p.nom.toLowerCase().includes(mot));
  afficher(resultats);
});