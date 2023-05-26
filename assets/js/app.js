var banco = [];
function menu(op)
{
	switch (op)
	{
		case "1":
			document.getElementById('inserir').className = "show"; 	
			document.getElementById('menu').className = "hidden"; 
			break;
		case "2":
			document.getElementById('mostrar').className = "show"; 	
			document.getElementById('menu').className = "hidden"; 
			mostrar();
			break;
		case "3":
			document.getElementById('buscar').className = "show"; 	
			document.getElementById('menu').className = "hidden"; 
			break;
		case "4":
			document.getElementById('menu').className = "show"; 	
			document.getElementById('inserir').className = "hidden";
			document.getElementById('buscar').className = "hidden"; 	
			document.getElementById('mostrar').className = "hidden";
			document.getElementById('op').value = " ";
			document.getElementById('op').focus();
			break;
	}
}

function salvar()
{
	var aluno = new Estudante();
	aluno.entrada(nome.value, cpf.value, nascimento.value, nota1.value, nota2.value);
	aluno.media();
	var banquinho = new Bd();
	banquinho.save(aluno);
	menu("4");
}
function mostrar()
{
	var texto = document.getElementById("listar");
	texto.innerHTML = "";
	var i;
	var color = " ";
	for(i=0;i<banco.length;i++)
	{
		texto.innerHTML += "<p>Nome: "+ banco[i].nome+ "</p>";
		texto.innerHTML += "<p>Nascimento: "+ banco[i].nasc+ "</p>";
		texto.innerHTML += "<p>Nota 1: "+ banco[i].nota1+ "</p>";
		texto.innerHTML += "<p>Nota 2: "+ banco[i].nota2+ "</p>";
		if(banco[i].situacao == "Aprovado")
		{
			color = "<font color= 'blue'>";
		}
		else
		{
			color = "<font color= 'red'>"
		}
		texto.innerHTML += "<p>"+color+"Situação: "+ banco[i].situacao+ "</font></p>";
		texto.innerHTML += "<hr/>";
	}	
}

function buscar(cpf)
{
	var banquinho = new Bd();
	banquinho.pesquisar(cpf);
}
function voltar()
{
	document.getElementById('menu').className = "show"; 	
	document.getElementById('inserir').className = "hidden";
	document.getElementById('buscar').className = "hidden"; 	
	document.getElementById('mostrar').className = "hidden";
	document.getElementById('op').value = " ";
	document.getElementById('op').focus();
}