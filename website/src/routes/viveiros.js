// var express = require("express");
// var router = express.Router();

// var viveiroController = require("../controllers/viveiroController");

// router.post("/vizualizarViveiros", function (req, res) {
//     viveiroController.vizualizarViveiros(req, res); 
// });

// module.exports = router;

var express = require("express");
var router = express.Router();

var viveiroController = require("../controllers/viveiroController");

// Rota para visualizar viveiros
router.get("/vizualizarViveiros/:id", function (req, res) {
    viveiroController.vizualizarViveiros(req, res); 
});

// Exemplo de função que pode ser usada no front-end para aplicar validação
// (este bloco abaixo seria usado em um script no dashboard HTML, não no back-end)

if (typeof window !== 'undefined') {
    fetch("/viveiro/vizualizarViveiros", {
        method: "POST"
    })
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("container-viveiros");

        data.forEach(viveiro => {
            let cor;

            if (viveiro.qtdPpm < viveiro.ppmMin) {
                cor = "blue"; // abaixo do ideal
            } else if (viveiro.qtdPpm > viveiro.ppmMax) {
                cor = "red"; // acima do ideal
            } else {
                cor = "green"; // ideal
            }

            const card = document.createElement("div");
            card.classList.add("viveiro-card");
            card.style.border = `3px solid ${cor}`;
            card.style.padding = "12px";
            card.style.margin = "8px";
            card.innerHTML = `
                <h3>${viveiro.nomeViveiro}</h3>
                <p>Tipo de Café: ${viveiro.tipoCafe}</p>
                <p>PPM Atual: ${viveiro.qtdPpm}</p>
                <p>Faixa Ideal: ${viveiro.ppmMin} - ${viveiro.ppmMax}</p>
            `;

            container.appendChild(card);
        });
    })
    .catch(erro => console.error("Erro ao carregar viveiros:", erro));
}

module.exports = router;
