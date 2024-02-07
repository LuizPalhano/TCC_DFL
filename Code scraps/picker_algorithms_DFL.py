import graph_DFL as grafo
import random
import copy

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

newGraph = grafo.Graph()

newGraph.addNode(node_A.name, node_A.incomingNeighbors, node_A.outgoingNeighbors)
newGraph.addNode(node_B.name, node_B.incomingNeighbors, node_B.outgoingNeighbors)
newGraph.addNode(node_C.name, node_C.incomingNeighbors, node_C.outgoingNeighbors)
newGraph.addNode(node_D.name, node_D.incomingNeighbors, node_D.outgoingNeighbors)
newGraph.addNode(node_E.name, node_E.incomingNeighbors, node_E.outgoingNeighbors)
newGraph.addNode(node_F.name, node_F.incomingNeighbors, node_F.outgoingNeighbors)
newGraph.addNode(node_G.name, node_G.incomingNeighbors, node_G.outgoingNeighbors)
newGraph.addNode(node_H.name, node_H.incomingNeighbors, node_H.outgoingNeighbors)
newGraph.addNode(node_I.name, node_I.incomingNeighbors, node_I.outgoingNeighbors)
newGraph.addNode(node_J.name, node_J.incomingNeighbors, node_J.outgoingNeighbors)

#Função auxiliar de checagem de completude do grafo
#Quando o grafo é completo, todas as cardinalidades são iguais a N - 1; se uma for diferente, não está completo
def checkCompleteness(candidateGraph):
    cardinalities = candidateGraph.getCardinalityList()
    highestCardinality = candidateGraph.graphSize - 1
    for cardinality in cardinalities:
        if cardinality != highestCardinality:
            return False
    return True

'''
Define as funções de preenchimento do grafo
'''
#Pergunta para cada vértice a relação com cada outro vértice
def naiveChoice(thisGraph):
    #Para cada nó do grafo
    for node in thisGraph.nodesList:
        #Pergunta para cada outro nó do grafo a relação entre os dois
        for neighbor in thisGraph.nodesList:
            #Exceto ele próprio
            if node == neighbor:
                continue
            #Moeda honesta é usada para simular a escolha entre um ou outro
            if random.randint(0, 1):
                thisGraph.addEdge(node, neighbor)
            else:
                thisGraph.addEdge(neighbor, node)

#Sempre escolhe dois vértices completamente aleatórios a cada rodada
#Caso a relação entre os vértices já exista, simplesmente segue em frente
def randomChoice(thisGraph):
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
        
        #Ao terminar a iteração atual, checa a completude do grafo
        isDone = checkCompleteness(thisGraph)

#Pega dois vértices arbitrários e pergunta a relação entre eles; mantém o que foi escolhido em mãos
#e pega outro arbitrário para substituir o que não foi escolhido
#Notavelmente, um usuário faria a escolha de A ou B, mas, para propósitos práticos, a simulação disso
#é feita por aleatoriedade
def snakeChoice(thisGraph):
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
            
        #Ao terminar a iteração atual, checa a completude do grafo
        isDone = checkCompleteness(thisGraph)

#Chama um método para preencher o grafo, e depois o exibe
print("Algoritmo escolhido: NaiveChoice")
naiveChoice(newGraph)
#print("Algoritmo escolhido: RandomChoice")
#randomChoice(newGraph)
#print("Algoritmo escolhido: SnakeChoice")
#snakeChoice(newGraph)
        
newGraph.showGraph()