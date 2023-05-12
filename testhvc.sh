#!/bin/bash

# Função que realiza os testes unitarios
test_unit() {

    if [ "$#" -ne 1 ];then 
        # Cria um arquivo de entrada temporário com a entrada "10 10"
        echo "$2" > input.txt

        # Executa o comando hvc com a entrada de dados redirecionada do arquivo "input.txt" e salva a saída em "output.txt"
        ./bin/hvc -a ./test/$1.ahv < input.txt > output.txt
    else

        # Executa o comando hvc com a entrada de dados redirecionada saída em "output.txt"
        ./bin/hvc -a ./test/$1.ahv > output.txt

    fi

    # Lê a saída do arquivo "output.txt" e verifica se o resultado é mesmo que arquivo esperado para teste
    output=$(cat output.txt)
    expected_output=$(cat ./test/$1.txt)

    if [ "$output" = "$expected_output" ]; then
    echo "Teste $1 passou! ✅"
    else
    printf "Teste $1 falhou! ❌\nSaída esperada: $expected_output\n Saída atual: $output"
    fi

    # Remove os arquivos temporários
    rm *.txt

}

echo "-----TESTE HVC-----"

echo "Iniciando testes de I/O:"
test_unit "print" "10"