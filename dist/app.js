"use strict";

const botoes = {
    todos: document.getElementById("filtroTodos"),
    terraform: document.getElementById("filtroTerraform"),
    ansible: document.getElementById("filtroAnsible"),
    beneficios: document.getElementById("filtroBeneficios")
};

const cards = document.querySelectorAll(".card-item");

function filtrar(tipo) {

    const descricao = document.getElementById("descricaoTecnologia");
    if (!descricao) return;

    if (tipo === "todos") {

        cards.forEach(card => {
            card.style.display = "block";
        });

        descricao.classList.add("d-none");
        return;
    }

    cards.forEach(card => {
        card.style.display =
            card.dataset.type === tipo ? "block" : "none";
    });
}

botoes.todos?.addEventListener("click", () => {
    filtrar("todos");
    mostrarDescricao("todos");
});

botoes.terraform?.addEventListener("click", () => {
    filtrar("terraform");
    mostrarDescricao("terraform");
});

botoes.ansible?.addEventListener("click", () => {
    filtrar("ansible");
    mostrarDescricao("ansible");
});

botoes.beneficios?.addEventListener("click", () => {
    filtrar("beneficios");
    mostrarDescricao("beneficios");
});

document.getElementById("themeToggle")
?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function atualizarData() {

    const dataAtual = document.getElementById("dataAtual");
    if (!dataAtual) return;

    const hoje = new Date();

    dataAtual.textContent =
        "Hoje é " + hoje.toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

function atualizarDias() {

    const entrega = new Date("2027-07-10");
    const hoje = new Date();

    const diasRestantes = Math.ceil(
        (entrega.getTime() - hoje.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const dias = document.getElementById("dias");

    if (dias) {
        dias.textContent =
            diasRestantes + " dias restantes para entrega do TCC";
    }
}

// ======================= // DESCRIÇÃO DAS TECNOLOGIAS // =======================

  function mostrarDescricao(tipo) {

    const descricao = document.getElementById("descricaoTecnologia");
    if (!descricao) return;

    descricao.classList.remove("d-none");

    switch (tipo) {

        case "terraform":
            descricao.innerHTML = `
                <div class="card p-3 shadow hover-card">
                    <h5>Terraform</h5>
                    <p>Sua principal vantagem é permitir infraestrutura versionada.</p>
                    <p>Reduz erros e aumenta confiabilidade.</p>
                </div>
            `;
            break;

        case "ansible":
            descricao.innerHTML = `
                <div class="card p-3 shadow hover-card">
                    <h5>Ansible</h5>
                    <p>Automação de configuração com Playbooks YAML.</p>
                    <p>Padroniza ambientes e reduz erros operacionais.</p>
                </div>
            `;
            break;

        case "beneficios":
            descricao.innerHTML = `
                <div class="card p-3 shadow hover-card">
                    <h5>Benefícios</h5>
                    <p>Escalabilidade, automação e padronização.</p>
                    <p>Redução de erros humanos e maior produtividade.</p>
                </div>
            `;
            break;

        default:
            descricao.classList.add("d-none");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    atualizarData();
    atualizarDias();
});