# 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

# IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

s = 'AVOCADO'
cont = 0

for i in range(len(s)):
    if s[i] == 'a' or s[i] == 'A':
        cont += 1

print(f"A letra 'a' aparece {cont}x")
