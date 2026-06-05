"use strict";
// =======================
// FILTROS
// =======================
const botoes = {
    todos: document.getElementById("filtroTodos"),
    terraform: document.getElementById("filtroTerraform"),
    ansible: document.getElementById("filtroAnsible"),
    beneficios: document.getElementById("filtroBeneficios")
};
const cards = document.querySelectorAll(".card-item");
function filtrar(tipo) {
    cards.forEach(card => {
        if (tipo === "todos") {
            card.style.display = "block";
        }
        else {
            card.style.display =
                card.dataset.type === tipo ? "block" : "none";
        }
    });
}
botoes.todos?.addEventListener("click", () => filtrar("todos"));
botoes.terraform?.addEventListener("click", () => filtrar("terraform"));
botoes.ansible?.addEventListener("click", () => filtrar("ansible"));
botoes.beneficios?.addEventListener("click", () => filtrar("beneficios"));
// =======================
// DARK MODE
// =======================
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// =======================
// DATA ATUAL
// =======================
function atualizarData() {
    const dataAtual = document.getElementById("dataAtual");
    if (dataAtual) {
        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
        dataAtual.textContent = `Hoje é ${dataFormatada}`;
    }
}
// =======================
// CONTADOR DE DIAS
// =======================
function atualizarDias() {
    const entrega = new Date("2026-07-10");
    const hoje = new Date();
    const diasRestantes = Math.ceil((entrega.getTime() - hoje.getTime()) /
        (1000 * 60 * 60 * 24));
    const dias = document.getElementById("dias");
    if (dias) {
        dias.textContent =
            `${diasRestantes} dias restantes para entrega do TCC`;
    }
}
// =======================
// GRÁFICO
// =======================
const canvas = document.getElementById("iacChart");
if (canvas) {
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: [
                "Facilidade",
                "Escalabilidade",
                "Automação",
                "Popularidade"
            ],
            datasets: [
                {
                    label: "Terraform",
                    data: [7, 10, 9, 9],
                    backgroundColor: "#38bdf8"
                },
                {
                    label: "Ansible",
                    data: [9, 7, 8, 8],
                    backgroundColor: "#f97316"
                }
            ]
        }
    });
}
// =======================
// PIPELINE
// =======================
const deploy = document.getElementById("stepDeploy");
const build = document.getElementById("stepBuild");
const success = document.getElementById("stepSuccess");
function runPipeline() {
    setTimeout(() => deploy?.classList.add("active"), 600);
    setTimeout(() => build?.classList.add("active"), 1400);
    setTimeout(() => {
        success?.classList.add("active");
        const status = document.getElementById("statusText");
        if (status) {
            status.textContent =
                "Infraestrutura provisionada com sucesso!";
        }
    }, 2200);
}
// =======================
// INICIALIZAÇÃO
// =======================
document.addEventListener("DOMContentLoaded", () => {
    atualizarData();
    atualizarDias();
    runPipeline();
});
