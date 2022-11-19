class Aluno {

    constructor() {
        this.id = 1;
        this.arrayAlunos = [];
        /* this.nomeAluno = '';
        this.matricula = 0; */

    }

    salvar() {
        let aluno = this.lerDados();
         if(this.validaCampos(aluno)) {
            this.adicionar(aluno);
        }
        
        this.listaTabela();
        this.cancelar(); 

        /* console.log(aluno); */
        /* alert ('Adicionar aluno na base de dados!');  */
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayAlunos.length; i++ ) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell(); 
            let td_aluno = tr.insertCell();
            let td_matricula = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_nota3 = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id; 
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno;
            td_matricula.innertText = this.arrayAlunos[i].matricula;
            td_nota1.innertText = this.arrayAlunos[i].nota1;
            td_nota2.innertText = this.arrayAlunos[i].nota2;
            td_nota3.innertText = this.arrayAlunos[i].nota3;

            td_id.classList.add('center');

        let imgEdit = document. createElement('img');
        imgEdit.src = 'img/edit.png';

        let imgDelete = document.createElement('img');
        imgDelete.src = 'img/delete.png';

        
        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDelete);



        }
    }

    adicionar(aluno) {
        this.arrayAlunos.push(aluno);
        this.id++;
    }

    lerDados() {
        let aluno= {}
        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('aluno').values;

        return aluno;
    }

    validaCampos(aluno) {
        let msg ='';

        if(aluno.nomeAluno == '') {
            msg += ' - Informe o Nome do aluno \n';

        }

        if(aluno.matricula == '') {
            msg += '- Informe a matrícula do alumo \n';
        }

        if(aluno.nota1 == '') {
            msg += '- Informe a primeira nota do alumo \n';
        }

        if(aluno.nota2 == '') {
            msg += '- Informe a segunda nota do alumo \n';
        }

        if(aluno.nota3 == '') {
            msg += '- Informe a terceira nota do alumo \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        } 

        return true;

    }


    cancelar() {
        document.getElementById('aluno').value = '';
        document.getElementById('matricula').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
       /*  alert('Deletar aluno da base de dados!') */
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i <this.arrayProdutos.length; i++) {
            if(this.arrayAlunos[i].id == id) {
                this.arrayAlunos.splice(i,1);
                tbody.deleteRow(i);

            }
        }
       
    }
}

var aluno = new Aluno();

/* class Aluno {

    nome;
  
    matricula;
  
    nota1;
  
    nota2;
  
    nota3;
  
     constructor(nome, matricula, n1, n2, n3) {
  
       this.nome = nome;
  
       this.matricula = matricula;
  
       this.nota1 = n1;
  
       this.nota2 = n2;
  
       this.nota3 = n3;
  
    }
  
     exibeInfo() {
  
       return `Aluno: ${this.nome} - mat: ${this.matricula}
  
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
  
      Média:${this.calculaMedia()} 
  
      `;
  
    }
  
     calculaMedia() {
  
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  
    }
  
  } */