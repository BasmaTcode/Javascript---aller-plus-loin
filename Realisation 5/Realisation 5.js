let catalogue = document.getElementById("catalogue");
let recherche = document.getElementById("recherche");
let produits = [];

fetch("produits.json")
  .then(response => response.json())
  .then(data => {
    produits = data;
    afficher(produits);
  })
  .catch(error => console.error("Erreur de chargement du fichier JSON :", error));

function afficher(liste) {
  catalogue.innerHTML = "";
  liste.forEach(p => {
    catalogue.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.nom}" width="150">
        <p>${p.nom} — ${p.prix} DH</p>
      </div>
    `;
  });
}

recherche.addEventListener("input", () => {
  let mot = recherche.value.toLowerCase();
  let resultats = produits.filter(p => p.nom.toLowerCase().includes(mot));
  afficher(resultats);
});
