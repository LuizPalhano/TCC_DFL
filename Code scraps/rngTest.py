import random

oneMillion = 1000000

def rngTest():
    nCaras = 0
    lst = []
    lst2 = []

    for i in range(30):
        lst.append(i)
        lst2.append(False)

    while nCaras < 30:
        caraAtual = random.choice(lst)
        if not lst2[caraAtual]:
            lst2[caraAtual] = True
            nCaras += 1

    print("terminei")

for i in range(10000):
    rngTest()