import graph_DFL as grafo
import random
import copy
import math

'''
Estabelece os objetos a serem incluídos no grafo
O grafo fica vazio, com os vértices; na execução de cada algoritmo o grafo é preenchido
Não executar mais de um algoritmo por instância de execução do arquivo
'''
node_A_inc = set()
node_A_out = set()
node_A = grafo.Node("A", node_A_inc, node_A_out)

node_B_inc = set()
node_B_out = set()
node_B = grafo.Node("B", node_B_inc, node_B_out)

node_C_inc = set()
node_C_out = set()
node_C = grafo.Node("C", node_C_inc, node_C_out)

node_D_inc = set()
node_D_out = set()
node_D = grafo.Node("D", node_D_inc, node_D_out)

node_E_inc = set()
node_E_out = set()
node_E = grafo.Node("E", node_E_inc, node_E_out)

node_F_inc = set()
node_F_out = set()
node_F = grafo.Node("F", node_F_inc, node_F_out)

node_G_inc = set()
node_G_out = set()
node_G = grafo.Node("G", node_G_inc, node_G_out)

node_H_inc = set()
node_H_out = set()
node_H = grafo.Node("H", node_H_inc, node_H_out)

node_I_inc = set()
node_I_out = set()
node_I = grafo.Node("I", node_I_inc, node_I_out)

node_J_inc = set()
node_J_out = set()
node_J = grafo.Node("J", node_J_inc, node_J_out)

node_K_inc = set()
node_K_out = set()
node_K = grafo.Node("K", node_K_inc, node_K_out)

node_L_inc = set()
node_L_out = set()
node_L = grafo.Node("L", node_L_inc, node_L_out)

node_M_inc = set()
node_M_out = set()
node_M = grafo.Node("M", node_M_inc, node_M_out)

node_N_inc = set()
node_N_out = set()
node_N = grafo.Node("N", node_N_inc, node_N_out)

node_O_inc = set()
node_O_out = set()
node_O = grafo.Node("O", node_O_inc, node_O_out)

node_P_inc = set()
node_P_out = set()
node_P = grafo.Node("P", node_P_inc, node_P_out)

node_Q_inc = set()
node_Q_out = set()
node_Q = grafo.Node("Q", node_Q_inc, node_Q_out)

node_R_inc = set()
node_R_out = set()
node_R = grafo.Node("R", node_R_inc, node_R_out)

node_S_inc = set()
node_S_out = set()
node_S = grafo.Node("S", node_S_inc, node_S_out)

node_T_inc = set()
node_T_out = set()
node_T = grafo.Node("T", node_T_inc, node_T_out)

node_U_inc = set()
node_U_out = set()
node_U = grafo.Node("U", node_U_inc, node_U_out)

node_V_inc = set()
node_V_out = set()
node_V = grafo.Node("V", node_V_inc, node_V_out)

node_W_inc = set()
node_W_out = set()
node_W = grafo.Node("W", node_W_inc, node_W_out)

node_X_inc = set()
node_X_out = set()
node_X = grafo.Node("X", node_X_inc, node_X_out)

node_Y_inc = set()
node_Y_out = set()
node_Y = grafo.Node("Y", node_Y_inc, node_Y_out)

node_Z_inc = set()
node_Z_out = set()
node_Z = grafo.Node("Z", node_Z_inc, node_Z_out)

node_alpha_inc = set()
node_alpha_out = set()
node_alpha = grafo.Node("alpha", node_alpha_inc, node_alpha_out)

node_beta_inc = set()
node_beta_out = set()
node_beta = grafo.Node("beta", node_beta_inc, node_beta_out)

node_gamma_inc = set()
node_gamma_out = set()
node_gamma = grafo.Node("gamma", node_gamma_inc, node_gamma_out)

node_delta_inc = set()
node_delta_out = set()
node_delta = grafo.Node("delta", node_delta_inc, node_delta_out)

newGraph = grafo.Graph()

newGraph.addNode(node_A.name, node_A.incomingNeighbors, node_A.outgoingNeighbors)
newGraph.addNode(node_B.name, node_B.incomingNeighbors, node_B.outgoingNeighbors)
newGraph.addNode(node_C.name, node_C.incomingNeighbors, node_C.outgoingNeighbors)
newGraph.addNode(node_D.name, node_D.incomingNeighbors, node_D.outgoingNeighbors)
newGraph.addNode(node_E.name, node_E.incomingNeighbors, node_E.outgoingNeighbors)
#Cinco nós
#'''

newGraph.addNode(node_F.name, node_F.incomingNeighbors, node_F.outgoingNeighbors)
newGraph.addNode(node_G.name, node_G.incomingNeighbors, node_G.outgoingNeighbors)
newGraph.addNode(node_H.name, node_H.incomingNeighbors, node_H.outgoingNeighbors)
newGraph.addNode(node_I.name, node_I.incomingNeighbors, node_I.outgoingNeighbors)
newGraph.addNode(node_J.name, node_J.incomingNeighbors, node_J.outgoingNeighbors)
newGraph.addNode(node_K.name, node_K.incomingNeighbors, node_K.outgoingNeighbors)
newGraph.addNode(node_L.name, node_L.incomingNeighbors, node_L.outgoingNeighbors)
newGraph.addNode(node_M.name, node_M.incomingNeighbors, node_M.outgoingNeighbors)
newGraph.addNode(node_N.name, node_N.incomingNeighbors, node_N.outgoingNeighbors)
newGraph.addNode(node_O.name, node_O.incomingNeighbors, node_O.outgoingNeighbors)
#Quinze nós
#'''

newGraph.addNode(node_P.name, node_P.incomingNeighbors, node_P.outgoingNeighbors)
newGraph.addNode(node_Q.name, node_Q.incomingNeighbors, node_Q.outgoingNeighbors)
newGraph.addNode(node_R.name, node_R.incomingNeighbors, node_R.outgoingNeighbors)
newGraph.addNode(node_S.name, node_S.incomingNeighbors, node_S.outgoingNeighbors)
newGraph.addNode(node_T.name, node_T.incomingNeighbors, node_T.outgoingNeighbors)
newGraph.addNode(node_U.name, node_U.incomingNeighbors, node_U.outgoingNeighbors)
newGraph.addNode(node_V.name, node_V.incomingNeighbors, node_V.outgoingNeighbors)
newGraph.addNode(node_W.name, node_W.incomingNeighbors, node_W.outgoingNeighbors)
newGraph.addNode(node_X.name, node_X.incomingNeighbors, node_X.outgoingNeighbors)
newGraph.addNode(node_Y.name, node_Y.incomingNeighbors, node_Y.outgoingNeighbors)
newGraph.addNode(node_Z.name, node_Z.incomingNeighbors, node_Z.outgoingNeighbors)
newGraph.addNode(node_alpha.name, node_alpha.incomingNeighbors, node_alpha.outgoingNeighbors)
newGraph.addNode(node_beta.name, node_beta.incomingNeighbors, node_beta.outgoingNeighbors)
newGraph.addNode(node_gamma.name, node_gamma.incomingNeighbors, node_gamma.outgoingNeighbors)
newGraph.addNode(node_delta.name, node_delta.incomingNeighbors, node_delta.outgoingNeighbors)
#Trinta nós
#'''

#Função auxiliar de checagem de completude do grafo
#Quando o grafo é completo, todas os graus são iguais a N - 1; se um for diferente, não está completo
#Complexidade: O(n) (itera uma vez por cada nó do grafo)
def checkCompleteness(candidateGraph):
    degrees = candidateGraph.getDegreeList()
    highestDegree = candidateGraph.graphSize - 1
    for degree in degrees:
        if degree != highestDegree:
            return False
    return True

#Função auxiliar de contar arestas no grafo
def edgesInGraph(candidateGraph):
    totalEdges = 0
    degrees = candidateGraph.getDegreeList()
    for degree in degrees:
        totalEdges += degree
    return totalEdges

#Função auxiliar de checagem de número de arestas no grafo
def hasReachedThreshold(candidateGraph, targetEdges):
    totalEdges = edgesInGraph(candidateGraph)
    if totalEdges/2 >= targetEdges:
        return True
    return False

#Função auxiliar de preenchimento de grupos
def fillOutSubgroup(group, candidateGraph):
    #Embaralha a lista de vértices
    random.shuffle(group)
    #Compara cada vértice com cada vértice com índice maior que si
    #0 compara com 1-4, 1 compara com 2-4, 2 compara com 3-4, 3 compara com 4, 4 não compara com ninguém
    #Assim, todas as relações são testadas
    for i in range(len(group)):
        for j in range(i + 1, len(group)):
            #Se não posso botar a aresta ab, então tenho que botar a aresta ba
            if not candidateGraph.addUnfilledEdge(group[i], group[j]):
                #Coloca a aresta ba
                candidateGraph.addUnfilledEdge(group[j], group[i])

#Função auxiliar de contagem de objetos alcançados
def objectsReached(candidateGraph):
    degrees = candidateGraph.getDegreeList()
    total = 0
    for degree in degrees:
        if degree > 0:
            total += 1
    return total

'''
Define as funções de preenchimento do grafo
'''
#Pergunta para cada vértice a relação com cada outro vértice
#Complexidade: O(n^2) (para cada nó, itera uma vez para cada outro nó)
def naiveChoice(thisGraph):
    nIterations = 0
    #nNodes = 0
    #Para cada nó do grafo
    for node in thisGraph.nodesList:
        #Pergunta para cada outro nó do grafo a relação entre os dois
        for neighbor in thisGraph.nodesList:
            #A cada iteração, aumenta em 1 o número de iterações
            nIterations += 1
            #Exceto ele próprio
            if node == neighbor:
                continue
            #Moeda honesta é usada para simular a escolha entre um ou outro
            if random.randint(0, 1):
                thisGraph.addEdge(node, neighbor)
            else:
                thisGraph.addEdge(neighbor, node)
    
    #Ao final, retorna quantos passos deu
    return nIterations

#Sempre escolhe dois vértices completamente aleatórios a cada rodada
#Caso a relação entre os vértices já exista, simplesmente segue em frente
#Complexidade: O(n) (para cada par de nós, itera uma vez, até parar; escalar desconhecido)
#Checar completude ao final de cada iteração não aumenta a complexidade, só adiciona ao escalar
def randomChoice(thisGraph):
    nIterations = 0
    isDone = False
    while not isDone:
        #Escolhe dois nós aleatórios; garantidamente são nós distintos
        nodes = copy.deepcopy(thisGraph.nodesList)
        firstNode = random.choice(nodes)
        nodes.remove(firstNode)
        secondNode = random.choice(nodes)
        
        #Como os dois nós escolhidos são aleatórios, também podemos presumir que
        #a ordenação deles é exatamente essa
        thisGraph.addEdge(firstNode, secondNode)
        
        #A cada iteração, aumenta em 1 o número de iterações
        nIterations += 1

        #Ao terminar a iteração atual, checa a completude do grafo
        isDone = checkCompleteness(thisGraph)
    
    #Ao final, retorna quantos passos deu
    return nIterations

#Pega dois vértices arbitrários e pergunta a relação entre eles; mantém o que foi escolhido em mãos
#e pega outro arbitrário para substituir o que não foi escolhido
#Notavelmente, um usuário faria a escolha de A ou B, mas, para propósitos práticos, a simulação disso
#é feita por aleatoriedade
#Complexidade: O(n) (para cada par de nós, itera uma vez, até parar; escalar desconhecido)
#Checar completude ao final de cada iteração não aumenta a complexidade, só adiciona ao escalar
def snakeChoice(thisGraph):
    nIterations = 0
    isDone = False
    #Escolhe dois nós aleatórios; garantidamente são nós distintos
    nodes = copy.deepcopy(thisGraph.nodesList)
    firstNode = random.choice(nodes)
    secondNode = random.choice(nodes)
    while firstNode == secondNode:
        secondNode = random.choice(nodes)
    
    while not isDone:
        #Joga uma moeda honesta para escolher um dos nós para ser o nó maior
        if random.randint(0, 1):
            #Se for o primeiro, joga o segundo fora e itera
            thisGraph.addEdge(firstNode, secondNode)
            secondNode = random.choice(nodes)
            while firstNode == secondNode:
                secondNode = random.choice(nodes)
        else:
            #Se for o segundo, joga o primeiro fora e itera
            thisGraph.addEdge(secondNode, firstNode)
            firstNode = random.choice(nodes)
            while firstNode == secondNode:
                firstNode = random.choice(nodes)
        
        #A cada iteração, aumenta em 1 o número de iterações
        nIterations += 1

        #Ao terminar a iteração atual, checa a completude do grafo
        isDone = checkCompleteness(thisGraph)
    
    #Ao final, retorna quantos passos deu
    return nIterations

#NaiveChoice, mas conta se a iteração terminou antes do algoritmo ou não
def extraNaiveChoice(thisGraph):
    nIterations = 0
    hasOvershot = False
    #Para cada nó do grafo
    for node in thisGraph.nodesList:
        #Pergunta para cada outro nó do grafo a relação entre os dois
        for neighbor in thisGraph.nodesList:
            #Se terminou, mas não parou, então passou do prazo
            if checkCompleteness(thisGraph):
                hasOvershot = True
            #A cada iteração, aumenta em 1 o número de iterações
            nIterations += 1
            #Exceto ele próprio
            if node == neighbor:
                continue
            #Moeda honesta é usada para simular a escolha entre um ou outro
            if random.randint(0, 1):
                thisGraph.addEdge(node, neighbor)
            else:
                thisGraph.addEdge(neighbor, node)
    
    #Ao final, retorna quantos passos deu e se completou o grafo antes de terminar
    return nIterations, hasOvershot


'''
Define as funções de preenchimento até certo número de arestas
'''
#Executa o naiveChoice até atingir o número alvo de arestas, ou terminar; o que vier primeiro
def naiveChoiceThreshold(thisGraph, targetEdges):
    nIterations = 0
    #nNodes = 0
    #Para cada nó do grafo
    for node in thisGraph.nodesList:
        #Pergunta para cada outro nó do grafo a relação entre os dois
        for neighbor in thisGraph.nodesList:
            #A cada iteração, aumenta em 1 o número de iterações
            nIterations += 1
            #Exceto ele próprio
            if node == neighbor:
                continue
            #Moeda honesta é usada para simular a escolha entre um ou outro
            if random.randint(0, 1):
                thisGraph.addEdge(node, neighbor)
            else:
                thisGraph.addEdge(neighbor, node)
            #Se tiver atingido o número mínimo de arestas, para
            if hasReachedThreshold(thisGraph, targetEdges):
                return nIterations
    
    #Ao final, retorna quantos passos deu
    return nIterations

#Executa o randomChoice até atingir o número alvo de arestas, ou terminar; o que vier primeiro
def randomChoiceThreshold(thisGraph, targetEdges):
    nIterations = 0
    isDone = False
    while not isDone:
        #Escolhe dois nós aleatórios; garantidamente são nós distintos
        nodes = copy.deepcopy(thisGraph.nodesList)
        firstNode = random.choice(nodes)
        nodes.remove(firstNode)
        secondNode = random.choice(nodes)
        
        #Como os dois nós escolhidos são aleatórios, também podemos presumir que
        #a ordenação deles é exatamente essa
        thisGraph.addEdge(firstNode, secondNode)
        
        #A cada iteração, aumenta em 1 o número de iterações
        nIterations += 1

        #Ao terminar a iteração atual, checa a completude do grafo
        isDone = checkCompleteness(thisGraph)

        #Se tiver atingido o número mínimo de arestas, para
        if hasReachedThreshold(thisGraph, targetEdges):
            return nIterations, isDone
    
    #Ao final, retorna quantos passos deu
    return nIterations

#Executa o snakeChoice até atingir o número alvo de arestas, ou terminar; o que vier primeiro
def snakeChoiceThreshold(thisGraph, targetEdges):
    nIterations = 0
    isDone = False
    #Escolhe dois nós aleatórios; garantidamente são nós distintos
    nodes = copy.deepcopy(thisGraph.nodesList)
    firstNode = random.choice(nodes)
    secondNode = random.choice(nodes)
    while firstNode == secondNode:
        secondNode = random.choice(nodes)
    
    while not isDone:
        #Joga uma moeda honesta para escolher um dos nós para ser o nó maior
        if random.randint(0, 1):
            #Se for o primeiro, joga o segundo fora e itera
            thisGraph.addEdge(firstNode, secondNode)
            secondNode = random.choice(nodes)
            while firstNode == secondNode:
                secondNode = random.choice(nodes)
        else:
            #Se for o segundo, joga o primeiro fora e itera
            thisGraph.addEdge(secondNode, firstNode)
            firstNode = random.choice(nodes)
            while firstNode == secondNode:
                firstNode = random.choice(nodes)
        
        #A cada iteração, aumenta em 1 o número de iterações
        nIterations += 1

        #Ao terminar a iteração atual, checa a completude do grafo
        isDone = checkCompleteness(thisGraph)

        #Se tiver atingido o número mínimo de arestas, para
        if hasReachedThreshold(thisGraph, targetEdges):
            return nIterations, isDone

    #Ao final, retorna quantos passos deu
    return nIterations

'''
Define as funções de preenchimento com um número máximo de passos
'''
'''
O número de passos dados por iteração de cada função depende do número de nós que devem ser ordenados na função
Como estamos executando uma função de ordenação, ela leva nlog(n) passos para terminar
Para um par de nós, isso é uma única operação. Para 5, são 8 operações. Assim, as funções que ordenam par a par
ganham um passo por iteração, e as funções que ordenam grupos de 5 ganham 8 passos por iteração
'''

#Executa o randomChoice até atingir o número máximo de passos, ou terminar; o que vier primeiro
def randomChoiceMaxSteps(thisGraph, maxSteps):
    nIterations = 0
    while nIterations < maxSteps:
        #Escolhe dois nós aleatórios; garantidamente são nós distintos
        nodes = copy.deepcopy(thisGraph.nodesList)
        firstNode = random.choice(nodes)
        nodes.remove(firstNode)
        secondNode = random.choice(nodes)
        
        #Como os dois nós escolhidos são aleatórios, também podemos presumir que
        #a ordenação deles é exatamente essa
        thisGraph.addUnfilledEdge(firstNode, secondNode)
        
        #A cada iteração, aumenta em 1 o número de iterações
        nIterations += 1
    
    #Ao final, retorna quantas arestas criou e quantos objetos foram alcançados
    thisGraph.fillOutGraph()
    touchedObjects = objectsReached(thisGraph)
    return edgesInGraph(thisGraph)/2, touchedObjects


#Executa o snakeChoice até atingir o número máximo de passos, ou terminar; o que vier primeiro
def snakeChoiceMaxSteps(thisGraph, maxSteps):
    nIterations = 0
    #Escolhe dois nós aleatórios; garantidamente são nós distintos
    nodes = copy.deepcopy(thisGraph.nodesList)
    firstNode = random.choice(nodes)
    secondNode = random.choice(nodes)
    while firstNode == secondNode:
        secondNode = random.choice(nodes)
    
    while nIterations < maxSteps:
        #Joga uma moeda honesta para escolher um dos nós para ser o nó maior
        if random.randint(0, 1):
            #Se for o primeiro, joga o segundo fora e itera
            thisGraph.addUnfilledEdge(firstNode, secondNode)
            secondNode = random.choice(nodes)
            while firstNode == secondNode:
                secondNode = random.choice(nodes)
        else:
            #Se for o segundo, joga o primeiro fora e itera
            thisGraph.addUnfilledEdge(secondNode, firstNode)
            firstNode = random.choice(nodes)
            while firstNode == secondNode:
                firstNode = random.choice(nodes)
        
        #A cada iteração, aumenta em 1 o número de iterações
        nIterations += 1

    #Ao final, retorna quantas arestas criou e quantos objetos foram alcançados
    thisGraph.fillOutGraph()
    touchedObjects = objectsReached(thisGraph)
    return edgesInGraph(thisGraph)/2, touchedObjects


#Preenche subgrupos completamente arbitrários até atingir o número máximo de passos, ou terminar; o que vier primeiro
def randomGroupMaxSteps(thisGraph, maxSteps):
    nIterations = 0
    while nIterations < maxSteps:
        #Escolhe cinco nós aleatórios; garantidamente são nós distintos
        subGroup = []
        nodes = copy.deepcopy(thisGraph.nodesList)
        for i in range(5):
            uniqueNode = random.choice(nodes)
            subGroup.append(uniqueNode)
            nodes.remove(uniqueNode)
        
        #Preenche o subgrupo com arestas; subgrupo é embaralhado no processo
        fillOutSubgroup(subGroup, thisGraph)
        
        #A cada iteração, aumenta em 8 o número de iterações
        nIterations += 8
    
    #Ao final, retorna quantas arestas criou e quantos objetos foram alcançados
    thisGraph.fillOutGraph()
    touchedObjects = objectsReached(thisGraph)
    return edgesInGraph(thisGraph)/2, touchedObjects


#Preenche subgrupos arbitrários até atingir o número máximo de passos, ou terminar; o que vier primeiro
#Subgrupos sempre mantêm, garantidamente, dois vértices do grupo anterior
def snakeGroupMaxSteps(thisGraph, maxSteps):
    nIterations = 0
    #Escolhe cinco nós aleatórios; garantidamente são nós distintos
    subGroup = []
    nodes = copy.deepcopy(thisGraph.nodesList)
    for i in range(5):
        uniqueNode = random.choice(nodes)
        subGroup.append(uniqueNode)
        nodes.remove(uniqueNode)
    while nIterations < maxSteps:
        
        #Preenche o subgrupo com arestas; subgrupo é embaralhado no processo
        fillOutSubgroup(subGroup, thisGraph)

        #Gera um novo subgrupo
        #Tira 3 nós do grupo; mantém 2 que já estavam
        #Ordem dos nós na lista é embaralhada dentro de fillOutSubgroup, então não mantém sempre os
        #primeiros dois nós da lista original
        for i in range(3):
            subGroup.pop()
        #Escolhe 3 novos nós arbitrariamente (pode escolher nós que já estavam)
        nodes = copy.deepcopy(thisGraph.nodesList)
        for i in range(3):
            uniqueNode = random.choice(nodes)
            #Se o novo nó já estiver no subgrupo, não o adiciona; em vez disso, o remove das opções
            #e tenta escolher um novo
            while uniqueNode in subGroup:
                nodes.remove(uniqueNode)
                uniqueNode = random.choice(nodes)
            #Depois de garantir que o nó é diferente dos presentes no subgrupo, pode adicioná-lo
            subGroup.append(uniqueNode)
            #Imediatamente também remove o nó das opções, porque se não ele não seria mais único
            nodes.remove(uniqueNode)

        #A cada iteração, aumenta em 8 o número de iterações
        nIterations += 8
    
    #Ao final, retorna quantas arestas criou e quantos objetos foram alcançados
    thisGraph.fillOutGraph()
    touchedObjects = objectsReached(thisGraph)
    return edgesInGraph(thisGraph)/2, touchedObjects

'''
Bloco de execução simples dos algoritmos; não executar ao mesmo tempo que o bloco de execução repetida
'''
'''
#Chama um método para preencher o grafo, e depois o exibe
#print("Algoritmo escolhido: NaiveChoice")
#nSteps = naiveChoice(newGraph)
#print("Algoritmo escolhido: RandomChoice")
#nSteps = randomChoice(newGraph)
#print("Algoritmo escolhido: SnakeChoice")
#nSteps = snakeChoice(newGraph)

#print("Algoritmo escolhido: NaiveChoiceThreshold")
#nSteps = naiveChoiceThreshold(newGraph, 50)
print("Algoritmo escolhido: RandomChoiceThreshold")
nSteps = randomChoiceThreshold(newGraph, 50)
#print("Algoritmo escolhido: SnakeChoiceThreshold")
#nSteps = snakeChoiceThreshold(newGraph, 50)

newGraph.showGraph()
print("\nNúmero de iterações: ")
print(nSteps)
aux = 0
degrees = newGraph.getDegreeList()
for degree in degrees:
    aux += degree
print(aux/2)

#print("resetando o grafo")
#newGraph.resetGraph()
#print("grafo vazio:")
#newGraph.showGraph()
'''

'''
Bloco de execução repetida dos algoritmos; não executar ao mesmo tempo que o bloco de execução simples
'''
'''
#Executa o algoritmo escolhido um número grande de vezes para normalizar o número médio de
#iterações que cada um requer. Retorna a média de iterações
#Executar com um número relativamente pequeno de nós no grafo (10-15 no máximo)
#No caso de executar até atingir um número mínimo de arestas no grafo:
#Número mínimo de arestas definido como 50 (para ser possível jogar 50 rodadas)
#Reminder: número de arestas num grafo completo é dado por n(n-1)/2; mínimo de 11 nós no grafo
#para atingir esse total de arestas
def generateAverageRuns(thisGraph):
    #Número de vezes que o algoritmo é executado em sequência
    nIterations = 100000
    #Armazena os resultados para permitir o cálculo do tempo médio de execução
    iterationsList = []
    #Guarda o tempo mínimo de execução do algoritmo
    lowIterations = 1000000
    #Guarda o tempo máximo de execução do algoritmo
    highIterations = -1
    #Guarda o número de vezes que o algoritmo foi na média ou mais rápido
    avgOrBetter = 0.0
    #Guarda o número de vezes que o naiveChoice passou do prazo
    totalOvershoots = 0.0
    #Guarda se o naiveChoice passou do prazo
    currentOvershoot = False
    #Número mínimo de arestas para garantir a jogabilidade
    minimumThreshold = 50
    #Porcentagem dos testes executados
    percentOfTests = 0
    
    #Executa o algoritmo escolhido nIterations vezes
    
    #Bloco das versões normais
    #print("Algoritmo escolhido: NaiveChoice")
    #print("Algoritmo escolhido: RandomChoice")
    #print("Algoritmo escolhido: SnakeChoice")
    #print("Algoritmo escolhido: extraNaiveChoice")

    #Bloco das versões Threshold
    print("Algoritmo escolhido: NaiveChoiceThreshold")
    #print("Algoritmo escolhido: RandomChoiceThreshold")
    #print("Algoritmo escolhido: SnakeChoiceThreshold")

    print("Número de nós:")
    print(thisGraph.graphSize)
    for i in range(nIterations):
        #Executar somente um de cada vez; comentar os outros
        #Bloco das versões normais
        #currentNumber = naiveChoice(thisGraph)
        #currentNumber = randomChoice(thisGraph)
        #currentNumber = snakeChoice(thisGraph)
        #currentNumber, currentOvershoot = extraNaiveChoice(thisGraph)

        #Bloco das versões Threshold
        currentNumber = naiveChoiceThreshold(thisGraph, minimumThreshold)
        #currentNumber, hasFinished = randomChoiceThreshold(thisGraph, minimumThreshold)
        #currentNumber, hasFinished = snakeChoiceThreshold(thisGraph, minimumThreshold)

        #Após calcular o número de iterações, reseta o grafo e anota quantas foram as iterações
        thisGraph.resetGraph()
        iterationsList.append(currentNumber)
        if currentNumber <= lowIterations:
            lowIterations = currentNumber
        if currentNumber >= highIterations:
            highIterations = currentNumber
        if currentOvershoot:
            totalOvershoots += 1
        if i % (nIterations / 100) == 0:
            percentOfTests += 1
            print(f"\nWorking; {percentOfTests}% done")
    
    print("\nDoing some final processing...")

    #Calcula a média de iterações do algoritmo
    iterationsAverage = sum(iterationsList) / len(iterationsList)
    iterationsAverage = math.floor(iterationsAverage)

    #Média de iterações do algoritmo naive para comparação
    naiveAverage = thisGraph.graphSize * thisGraph.graphSize
    
    #Calcula quantas vezes o algoritmo atingiu a média do naive ou melhor
    for current in iterationsList:
        if current <= naiveAverage:
            avgOrBetter += 1
    avgOrBetterResults = avgOrBetter / nIterations
    #Calcula quantas vezes o naiveChoice passou do prazo
    if totalOvershoots >= 1:
        totalOvershoots = totalOvershoots / nIterations

    return iterationsAverage, lowIterations, highIterations, avgOrBetterResults, totalOvershoots

#Executa generateAverageRuns
#''
averageIterations, lowIterations, highIterations, avgOrBetterTime, naiveOvershoots = generateAverageRuns(newGraph)
print("\nMédia de iterações do algoritmo escolhido: ")
print(averageIterations)
print("\nTempo baixo de execução:")
print(lowIterations)
print("\nTempo alto de execução:")
print(highIterations)
print("\nProporção de vezes que foi na média ou mais rápido:")
print(avgOrBetterTime)
if naiveOvershoots >= 1:
    print("\nProporção de vezes que naiveChoice completou o grafo e continuou executando:")
    print(naiveOvershoots)
#'''

'''
Bloco de execução das versões com máximo de passos; não executar ao mesmo tempo que os blocos anteriores
'''
#'''
def generateAvgEdges(thisGraph):
    #Esforço máximo (número de iterações) que o usuário tem antes de se cansar
    maxEffort = 50
    #Número de vezes que o algoritmo é executado para tirar a média
    nIterations = 100000
    #Porcentagem dos testes executados
    percentOfTests = 0
    #Armazena os resultados para permitir o cálculo do tempo médio de execução
    iterationsList = []
    #Armazena os objetos alcançados para permitir o cálculo da média de objetos
    objectsList = []

    #Bloco de escolha do algoritmo
    #print("Algoritmo escolhido: randomChoiceMaxSteps")
    #print("Algoritmo escolhido: snakeChoiceMaxSteps")
    #print("Algoritmo escolhido: randomGroupMaxSteps")
    print("Algoritmo escolhido: snakeGroupMaxSteps")

    print(f"Número de nós: {thisGraph.graphSize}")
    print(f"Esforço máximo: {maxEffort}")

    for i in range(nIterations):
        #currentEdges, currentObjects = randomChoiceMaxSteps(thisGraph, maxEffort)
        #currentEdges, currentObjects = snakeChoiceMaxSteps(thisGraph, maxEffort)
        #currentEdges, currentObjects = randomGroupMaxSteps(thisGraph, maxEffort)
        currentEdges, currentObjects = snakeGroupMaxSteps(thisGraph, maxEffort)

        #Após calcular o número de arestas, reseta o grafo e anota quantas foram as arestas
        thisGraph.resetGraph()
        iterationsList.append(currentEdges)
        objectsList.append(currentObjects)

        if i % (nIterations / 100) == 0:
            percentOfTests += 1
            print(f"\nWorking; {percentOfTests}% done")

    print("\nDoing some final processing...")

    #Calcula a média de iterações do algoritmo
    avgEdges = sum(iterationsList) / len(iterationsList)
    avgEdges = math.floor(avgEdges)

    #Calcula a média de objetos alcançados pelo algoritmo
    avgObjects = sum(objectsList) / len(objectsList)
    avgObjects = math.floor(avgObjects)

    #Executa o algoritmo escolhido nIterations vezes
    return avgEdges, avgObjects

averageEdges, averageObjects = generateAvgEdges(newGraph)
print(f"\nMédia de arestas do algoritmo escolhido: {averageEdges}")
print(f"\nMédia de objetos alcançados pelo algoritmo escolhido: {averageObjects}")
#'''