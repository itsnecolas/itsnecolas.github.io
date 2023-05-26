class Bd{
	save(aluno)
	{
		if(localStorage.length == 0)
		{
			banco.push(aluno);
			localStorage.setItem("aluno", JSON.stringify(banco));
		}
		else
		{
			banco = JSON.parse(localStorage.getItem("aluno"));
			banco.push(aluno);
			localStorage.setItem("aluno", JSON.stringify(banco));
		}	
	}
	pesquisar(cpf)
	{
		banco = JSON.parse(localStorage.getItem("aluno"));
		var texto = document.getElementById("lista_busca");
		texto.innerHTML = "";
		var flag = 0;
		var i;
		for(i=0;i<banco.length;i++)
		{
			if(cpf == banco[i].cpf)
			{
				flag = -1;
				texto.innerHTML += "<p>Nome: "+ banco[i].nome+ "</p>";
				texto.innerHTML += "<p>Nascimento: "+ banco[i].nasc+ "</p>";
				texto.innerHTML += "<p>Nota 1: "+ banco[i].nota1+ "</p>";
				texto.innerHTML += "<p>Nota 2: "+ banco[i].nota2+ "</p>";
				texto.innerHTML += "<p>Situação: "+ banco[i].situacao+ "</p>";
				texto.innerHTML += "<br><br>";
			}	
		}	
		if(flag == 0)
		{
			texto.innerHTML += "<h1>Aluno não cadastrado</h1>";
		}
	}
}