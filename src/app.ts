// ===============================
// FILTRO DE CARDS (IaC)
// ===============================

const botoes = {
    todos: document.getElementById("filtroTodos")!,
    terraform: document.getElementById("filtroTerraform")!,
    ansible: document.getElementById("filtroAnsible")!
};

const cards = document.querySelectorAll(".card-item");

function filtrar(tipo: string) {
    cards.forEach((card) => {
        const el = card as HTMLElement;

        if (tipo === "todos") {
            el.style.display = "block";
        } else {
            el.style.display = el.dataset.type === tipo ? "block" : "none";
        }
    });
}

botoes.todos.addEventListener("click", () => filtrar("todos"));
botoes.terraform.addEventListener("click", () => filtrar("terraform"));
botoes.ansible.addEventListener("click", () => filtrar("ansible"));