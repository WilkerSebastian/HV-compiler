<p align="center">
  <img src="./hvc.png" width="40%" height="40%"/>
</p>

# HV compiler

O HV compiler é um repositório que contém a versão em C++ do HVC, projetado para ser um compilador das linguagens desenvolvidas para o computador hipotético HV. Até o momento, a única linguagem suportada é a linguagem de máquina do HV. O HV, como um computador hipotético, tem como objetivo facilitar a compreensão dos alunos sobre o funcionamento de um computador, utilizando analogias e demonstrações que evidenciam paralelos entre ele e um computador real.

## Requisitos

para compilar essa versão é necessario ter instalado o
GNU/make e clang++ 12 ou superior.

## Instalação

### WINDOWS

1. baixe o executavel hvc.exe que é o instalador do compilador
<a href="https://github.com/WilkerSebastian/HV-compiler/releases/latest/download/hvc-win-x64-installer.exe">baixe aqui</a>

2. execute o executavel hvc-win-x64-installer.exe e conclua o processo de instalação

3. execute este comando no terminal para verficar se o compilador foi instalado corretamente
```bash
hvc --help
```

### LINUX

No limux é necessário somente executar o script de instalação, através deste comando.

```bash
curl -fsSL https://hv-compiler.onrender.com | bash
```

### MAC

clone o repositorio

```bash
git clone https://github.com/WilkerSebastian/HV-compiler.git
```

entre no diretorio do projeto
```bash
cd ./HV-compiler
```

execute o comando make para compilar o código usando clnag++

```bash
make
```

para finalizar adicione o ./bin/hvc no PATH de seu sistema
exemplo adiciona no path do linux
```bash
echo 'export PATH="$PATH:'$(realpath ./bin)'"' >> ~/.bash_profile && source ~/.bash_profile
```

para testar depois execute o comando no terminal
```bash
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
touch program
```

aqui abaixo um código que soma dois inputs do usuario e mostra
no tertminal
```
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
hvc ./program
```

### Linguagem de Máquina do HV

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