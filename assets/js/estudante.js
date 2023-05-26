
class Estudante
{
	constructor()
	{
		this.nome;
		this.cpf;
		this.nasc;
		this.nota1;
		this.nota2;
		this.situacao;
	}
	entrada(n,c,na,n1,n2)
	{
		this.nome = n;
		this.cpf = c;
		this.nasc = na;
		this.nota1 = parseFloat(n1);
		this.nota2 = parseFloat(n2);
	}
	media()
	{
		var m = parseFloat(this.nota1 + this.nota2) / 2;
			if(m>=7)
				this.situacao = "Aprovado";
			else
				this.situacao = "Reprovado";
	}
}