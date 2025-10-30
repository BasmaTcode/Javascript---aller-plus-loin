 let input = document.getElementById("ville");
    let button = document.getElementById("chercher");
    let resultat = document.getElementById("resultat");

    button.addEventListener("click", function() {
      let ville = input.value.trim();
      if (ville === "") return;

      resultat.innerHTML = "Chargement...";

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=cba765bb7b83e524c283714e35c3791e&units=metric&lang=fr`)
        .then(response => response.json())
        .then(data => {
          if (data.cod !== 200) {
            resultat.innerHTML = `Erreur: ${data.message}`;
            return;
          }

          resultat.innerHTML = `
            <h2>Météo pour ${data.name}</h2>
            <p>Température: ${data.main.temp} °C</p>
            <p>Temps: ${data.weather[0].description}</p>
            <p>Humidité: ${data.main.humidity}%</p>
          `;
        })
        .catch(err => {
          resultat.innerHTML = "Erreur lors de la récupération des données.";
          console.error(err);
        });
    });