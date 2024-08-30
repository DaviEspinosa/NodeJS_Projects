import React, { useState, useEffect } from 'react'; // Importa o React e os hooks useState e useEffect
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom para navegação entre páginas
import "./css/ListaLivros.css"; // Importa o arquivo CSS para estilização do componente

function ListaLivros() {
    // Define o estado 'livros' e a função 'setLivros' para atualizá-lo. Inicialmente, 'livros' é um array vazio.
    const [livros, setLivros] = useState([]);

    // O hook useEffect é usado para executar código após a renderização do componente.
    // Neste caso, ele busca os livros da API quando o componente é montado.
    useEffect(() => {
        // Faz uma requisição GET para a API para buscar a lista de livros
        axios.get('http://localhost:5000/livros')
            .then(response => setLivros(response.data)) // Atualiza o estado 'livros' com os dados recebidos
            .catch(error => console.error('Erro ao buscar os livros:', error)); // Lida com erros da requisição
    }, []); // O array vazio [] significa que este useEffect será executado apenas uma vez

    // Função para deletar um livro. Recebe o 'id' do livro como parâmetro.
    const deletarLivro = (id) => {
        // Faz uma requisição DELETE para a API para remover o livro com o ID especificado
        axios.delete(`http://localhost:5000/livros/${id}`)
            .then(() => setLivros(livros.filter(livro => livro._id !== id))) // Atualiza o estado removendo o livro deletado
            .catch(error => console.error('Erro ao deletar o livro:', error)); // Lida com erros da requisição
    };

    return (
        <div className="lista-livros">
            <h1>Lista de Livros</h1>
            {/* Link para a página de adição de um novo livro */}
            <Link to="/novo" className="adicionar-livro">Adicionar Novo Livro</Link>
            <ul className="livros-lista">
                {/* Mapeia o array de livros para gerar uma lista de itens */}
                {livros.map(livro => (
                    <li key={livro._id} className="livro-item">
                        {livro.titulo} - {livro.autor} - {livro.ano}
                       
                        {/* Link para a página de edição do livro */}
                        <Link to={`/editar/${livro._id}`} className="editar-livro">Editar</Link>
                       
                        {/* Botão para deletar o livro */}
                        <button onClick={() => deletarLivro(livro._id)} className="deletar-livro">Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaLivros; // Exporta o componente ListaLivros para ser usado em outras partes da aplicação
