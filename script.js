
var pessoa = {
	nome:'Rafael AC Branco',
	cargo:'Desenvolvedor',
	foto:'img/foto.png'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;

