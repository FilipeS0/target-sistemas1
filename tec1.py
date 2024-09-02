# 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

# IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

def fibo(n):
    fib1 = 0
    fib2 = 1
    temp = 0

    while fib1 <= n:
        if fib1 == n:
            return True
        fib1, fib2 = fib2, fib1 + fib2

    return False
    



# Pegue o valor
e_fibo = int(input('Qual numero voce quer checar se esta na sequencia fibonacci? '))

fibo(e_fibo)

if fibo(e_fibo):
    print(f"{e_fibo} esta em fibonacci")
else:
    print(f"{e_fibo} nao esta em fibonacci")