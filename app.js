function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = ("<p> Nenhum produto foi encontrado! Você precisa digitar para realizar a pesquisa :( <p/>")
          return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada produto na lista de produtos
    for (let dado of produtos) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.titulo.toLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ) {
        
      // Constrói o HTML para cada produto, utilizando template literals para inserir os dados
      resultados += `
      <div class="item-resultado">
        <h3>
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h3>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.video}" target="_blank">Mais informações</a>
        <p>Preço ${dado.valor}</p>
      </div>
    `;
  }  
}

if(!resultados){
resultados = "Nenhum produto foi encontrado!"
}



// Atribui o HTML gerado para a seção de resultados
section.innerHTML = resultados;

  }