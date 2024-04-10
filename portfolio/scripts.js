const projects = [
    {
        name: "Sneakers Shop",
        image: "sneakers-shop.png",
        description: "Trata-se da interface de um pequeno e-commerce de tênis, onde o usuário pode visualizar e adicionar vários modelos ao carrinho. Foi desenvolvido com ReactJs + Styled-Components onde foram aplicados os coneitos de responsividade.",
        repository: "https://github.com/IgorPierre/sneakers-shop"
    },
    {
        name: "Loc-Movies",
        image: "loc-movies.png",
        description: "Trata-se de uma aplicação onde o usuário pode visualizar os filmes e seus detalhes, podendo pesquisar por filmes por meio de seus títulos. Foi desenvolvido com ReactJs e Styled-Components, onde foi consumido uma API de filmes.",
        repository: "https://github.com/IgorPierre/locadora_filmes_com_react"
    }
];

const projectsArea = document.getElementById("projects");

projects.forEach(project => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
        <div class="project-image">
            <img src="images/projects/${project.image || 'placeholder.png'}" alt="imagem do projeto">
        </div>
        <div class="text-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.repository}" class="btn dark-button" target="_blank">Ver repositório</a>
        </div>
    `;

    projectsArea.appendChild(item);
});


function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function moveToProjects() {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
}
