import graph_DFL as grafo
import random

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

'''
Define as funções de preenchimento do grafo
'''
def randomChoice():
    return

def popularChoice():
    return

def snakeChoice():
    return

#randomChoice()
#popularChoice()
#snakeChoice()