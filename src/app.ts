// =======================
// FILTROS
// =======================
const botoes = {
    todos: document.getElementById("filtroTodos"),
    terraform: document.getElementById("filtroTerraform"),
    ansible: document.getElementById("filtroAnsible"),
    beneficios: document.getElementById("filtroBeneficios")
};

const cards = document.querySelectorAll<HTMLElement>(".card-item");

function filtrar(tipo: string): void {

    const descricao =
        document.getElementById("descricaoTecnologia");

    if (tipo === "todos") {

        cards.forEach(card => {
            card.style.display = "block";
        });

        descricao?.classList.add("d-none");
        return;
    }

    cards.forEach(card => {

        if (card.dataset.type === tipo) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

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

// =======================
// DARK MODE
// =======================
document.getElementById("themeToggle")
?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// =======================
// DATA ATUAL
// =======================
function atualizarData(): void {

    const dataAtual =
        document.getElementById("dataAtual");

    if (dataAtual) {

        const hoje = new Date();

        const dataFormatada =
            hoje.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            });

        dataAtual.textContent =
            `Hoje é ${dataFormatada}`;
    }
}

// =======================
// CONTADOR DE DIAS
// =======================
function atualizarDias(): void {

    const entrega = new Date("2027-07-10");
    const hoje = new Date();

    const diasRestantes = Math.ceil(
        (entrega.getTime() - hoje.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const dias =
        document.getElementById("dias");

    if (dias) {

        dias.textContent =
            `${diasRestantes} dias restantes para entrega do TCC`;
    }
}

// =======================
// DESCRIÇÕES
// =======================
function mostrarDescricao(tipo: string): void {

    const descricao =
        document.getElementById("descricaoTecnologia");

    if (!descricao) return;

    descricao.classList.remove("d-none");

    switch (tipo) {

        case "terraform":

            descricao.innerHTML = `
                <div class="card p-3 shadow hover-card">
                    <h5>Terraform</h5>

                    <p>
                        Sua principal vantagem é permitir que toda a infraestrutura
                        seja versionada e reproduzida de forma consistente.
                    </p>

                    <p>
                        Reduzindo atividades manuais e aumentando a confiabilidade
                        das implantações.
                    </p>
                </div>
            `;
            break;

        case "ansible":

            descricao.innerHTML = `
                <div class="card p-3 shadow hover-card">
                    <h5>Ansible</h5>

                    <p>
                        Utilizando Playbooks escritos em YAML,
                        é possível padronizar configurações.
                    </p>

                    <p>
                        Reduzir erros operacionais e garantir
                        maior agilidade na administração da infraestrutura.
                    </p>
                </div>
            `;
            break;

        case "beneficios":

            descricao.innerHTML = `
                <div class="card shadow p-4">

                    <h4>Benefícios da Solução</h4>

                    <p>
                        Padronização dos ambientes,
                        escalabilidade da infraestrutura
                        e redução de erros humanos.
                    </p>

                    <p>
                        Maior produtividade das equipes,
                        recuperação rápida de ambientes
                        e automação completa do processo.
                    </p>

                </div>
            `;
            break;

        default:

            descricao.classList.add("d-none");
    }
}

// =======================
// INICIALIZAÇÃO
// =======================
document.addEventListener("DOMContentLoaded", () => {

    atualizarData();
    atualizarDias();

});