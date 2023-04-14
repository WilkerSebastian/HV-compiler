<p align="center">
  <img src="./hvc.png" width="40%" height="40%"/>
</p>

# HV compiler

O HV compiler é um intrepetador para linguagem, hv script e assembly hv.
Que são linguagens respectivamente linguagnes para um computaodr
hipotético, que apresentado pelo meu porfessor de algoritimos 1 em 
ciencia da computação.

## Requisitos

para compilar essa versão é necessario ter instalado o
GNU/make e clang++ 12 ou superior.

## Instalação

clone o repositorio

```
git clone https://github.com/WilkerSebastian/HV-compiler.git
```

entre no diretorio do projeto
```
cd ./HV-compiler
```

execute o comando make para compilar o código usando clnag++

```
make
```

para finalizar adicione o ./bin/hvc no PATH de seu sistema
exemplo adiciona no path do linux
```
echo 'export PATH="$PATH:'$(realpath ./bin)'"' >> ~/.bashrc && source ~/.bashrc
```

para testar depois execute o comando no terminal
```
hvc --help
```

### Como usar

Por enquanto só está funcionando o assembly de HV2, então para executar
seu código faça o seguinte

crie o diretorio do projeto
```
mkdir my-project
```

entre no diretorio do projeto
```
cd ./my-project
```

crie o arquivo .ahv, onde estará o código
```
touch script.ahv
```

aqui abaixo um código que soma dois inputs do usuario e mostra
no tertminal
```
0-000
750
250
750
250
150
850
000
```

para executar use o compilador, com o comando hvc -o <caminho do script> 
```
hvc -a ./script.ahv
```

### Linguagem Assembly de HV2

| Comando | Descrição | "Assembler" |
| :--- | :-----------------------------------------------: | -----: 
| 0EE | copie valor da gaveta EE (cEE) para AC | AC←cEE |
| 1EE | copie valor do AC (cAC) para gaveta EE | EE←cAC |
| 2EE | some cEE ao AC | AC←cAC+cEE |
| 3EE | subtraia de AC o cEE | AC←cAC−cEE |
| 4EE | multiplique o cAC por cEE | AC←cAC∗cEE |
| 5EE | divida o cAC por cEE | AC←cAC/cEE |
| 6EE | se cAC > 0, vá para EE | se cAC>0, então EPI←EE |
| 7EE | leia um valor e guarda | na gaveta EE	leia(EE) |
| 8EE | escreva cEE no dispositivo de saída | escreva(cEE) |
| 9EE | vá para cEE |	EPI←cEE |
| 0-N | AC recebe uma constante (truque) | AC←N |
| 000 | fim do programa | fim |

### Metas para esse projeto

- adicionar hvs (hv script), vai ser uma linguagem de alto nivel

- adicionar a capacidade de parser de hvs para ahv

- criar uma mini versão do compilador em python, para provavel prova de alg1

- criar o site para o projeto, com uma versão do compilador online