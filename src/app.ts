declare const Chart: any;

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
    cards.forEach(card => {
        if (tipo === "todos") {
            card.style.display = "block";
        } else {
            card.style.display =
                card.dataset.type === tipo ? "block" : "none";
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
document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// =======================
// DATA ATUAL
// =======================
function atualizarData(): void {
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
function atualizarDias(): void {
    const entrega = new Date("2026-07-10");
    const hoje = new Date();

    const diasRestantes = Math.ceil(
        (entrega.getTime() - hoje.getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const dias = document.getElementById("dias");

    if (dias) {
        dias.textContent =
            `${diasRestantes} dias restantes para entrega do TCC`;
    }
}

// =======================
// GRÁFICO
// =======================
const canvas = document.getElementById("iacChart") as HTMLCanvasElement | null;

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

function runPipeline(): void {
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

function mostrarDescricao(tipo: string): void {

    const descricao = document.getElementById("descricaoTecnologia");

    if (!descricao) return;

    switch (tipo) {

        case "terraform":
            descricao.innerHTML = `
                <h5>Terraform</h5>
                <p>
                    Terraform é uma ferramenta de Infraestrutura como Código (IaC)
                    utilizada para provisionar recursos em provedores de nuvem
                    através de arquivos declarativos. Permite versionamento,
                    automação, reprodutibilidade e gerenciamento do ciclo de vida
                    da infraestrutura.
                </p>
            `;
            break;

        case "ansible":
            descricao.innerHTML = `
                <h5>Ansible</h5>
                <p>
                    Ansible é uma ferramenta de automação utilizada para
                    configuração de servidores, instalação de softwares,
                    gerenciamento de serviços e orquestração de ambientes.
                    Utiliza Playbooks escritos em YAML para definir tarefas.
                </p>
            `;
            break;

        case "beneficios":
            descricao.innerHTML = `
                <h5>Benefícios da Solução</h5>
                <p>
                    A utilização de IaC reduz erros manuais, aumenta a
                    produtividade das equipes, garante padronização dos
                    ambientes, facilita auditorias, melhora a escalabilidade
                    e permite recuperação rápida da infraestrutura.
                </p>
            `;
            break;

        default:
            descricao.innerHTML =
                "Selecione uma tecnologia para visualizar mais detalhes.";
    }
}