import graph_DFL as g

'''
Estabelece objetos a serem usados nos testes
'''
#Arestas do grafo 1
node_A_inc = set()
node_A_out = set()
node_A_out.add("B")
node_A_out.add("C")

node_B_inc = set()
node_B_out = set()
node_B_inc.add("A")
node_B_out.add("C")

node_C_inc = set()
node_C_out = set()
node_C_inc.add("A")
node_C_inc.add("B")

#Nodes do grafo 1
node_A = g.Node("A", node_A_inc, node_A_out)
node_B = g.Node("B", node_B_inc, node_B_out)
node_C = g.Node("C", node_C_inc, node_C_out)

#Grafo 1
myGraph = g.Graph()

#Arestas do grafo 2
node_W_inc = set()
node_W_out = set()
node_X_inc = set()
node_X_out = set()
node_Y_inc = set()
node_Y_out = set()
node_Z_inc = set()
node_Z_out = set()

#Nodes do grafo 2
node_W = g.Node("W", node_W_inc, node_W_out)
node_X = g.Node("X", node_X_inc, node_X_out)
node_Y = g.Node("Y", node_Y_inc, node_Y_out)
node_Z = g.Node("Z", node_Z_inc, node_Z_out)

#Grafo 2
secondGraph = g.Graph()

'''
===========
Testes
===========
'''

'''
TESTES DE GRAPH
'''

#Testa showGraph com o grafo vazio
def testShowGraphEmpty():
    print("=========================")
    print("=========================")
    print("Testa showGraph com o grafo vazio")
    print("=========================")
    print("=========================")

    myGraph.showGraph()

#Testa addNode com nós que não existem
def testAddNewNodes():
    print("=========================")
    print("=========================")
    print("Testa addNode com nós que não existem")
    print("=========================")
    print("=========================")

    myGraph.addNode(node_A.name, node_A.incomingNeighbors, node_A.outgoingNeighbors)
    myGraph.addNode(node_B.name, node_B.incomingNeighbors, node_B.outgoingNeighbors)
    myGraph.addNode(node_C.name, node_C.incomingNeighbors, node_C.outgoingNeighbors)

#Testa showGraph com o grafo não vazio
def testShowGraphNotEmpty():
    print("=========================")
    print("=========================")
    print("Testa showGraph com o grafo não vazio")
    print("=========================")
    print("=========================")

    myGraph.showGraph()

#Testa showNode com um nó que existe
def testShowExistingNode():
    print("=========================")
    print("=========================")
    print("Testa showNode com um nó que existe")
    print("=========================")
    print("=========================")

    myGraph.showNode("A")

#Testa addNode com um nó que já existe
def testAddExistingNode():
    print("=========================")
    print("=========================")
    print("Testa addNode com um nó que já existe")
    print("=========================")
    print("=========================")

    myGraph.addNode(node_A.name, node_A.incomingNeighbors, node_A.outgoingNeighbors)

#Testa removeNode
def testRemoveNode():
    print("=========================")
    print("=========================")
    print("Testa removeNode")
    print("=========================")
    print("=========================")

    myGraph.removeNode("A")

#Testa showNode com um nó que não existe
def testShowInexistentNode():
    print("=========================")
    print("=========================")
    print("Testa showNode com um nó que não existe")
    print("=========================")
    print("=========================")

    myGraph.showNode("A")

#Testa showNode com um nó que era relacionado a um nó deletado
def testShowNodeRelatedToPreviousNode():
    print("=========================")
    print("=========================")
    print("Testa showNode com um nó que era relacionado a um nó deletado")
    print("=========================")
    print("=========================")

    myGraph.showNode("B")

#Testa showGraph depois de um nó ser deletado
def testShowGraphPostDeletion():
    print("=========================")
    print("=========================")
    print("Testa showGraph depois de um nó ser deletado")
    print("=========================")
    print("=========================")

    myGraph.showGraph()

#Testa getNode com um nó que existe
def testGetExistingNode():
    print("=========================")
    print("=========================")
    print("Testa getNode com um nó que existe")
    print("=========================")
    print("=========================")

    myGraph.addNode(node_A.name, node_A.incomingNeighbors, node_A.outgoingNeighbors)
    gottenNode = myGraph.getNode("A")
    myGraph.showNode(gottenNode.name)

#Testa getNode com um nó que não existe
def testGetInexistentNode():
    print("=========================")
    print("=========================")
    print("Testa getNode com um nó que não existe")
    print("=========================")
    print("=========================")

    newGottenNode = myGraph.getNode("D")

#Testa removeNode com um nó que não existe
def testRemoveInexistentNode():
    print("=========================")
    print("=========================")
    print("Testa removeNode com um nó que não existe")
    print("=========================")
    print("=========================")

    myGraph.removeNode("D")

#Testa addEdge, que inclui uma aresta no grafo
def testAddEdge():
    print("\n=========================")
    print("=========================")
    print("Testa addEdge")
    print("=========================")
    print("=========================")

    ##Mostra o grafo vazio
    print("\nMostra o grafo vazio")
    secondGraph.showGraph()

    ##Adiciona os nós ao grafo
    secondGraph.addNode(node_W.name, node_W.incomingNeighbors, node_W.outgoingNeighbors)
    secondGraph.addNode(node_X.name, node_X.incomingNeighbors, node_X.outgoingNeighbors)
    secondGraph.addNode(node_Y.name, node_Y.incomingNeighbors, node_Y.outgoingNeighbors)
    secondGraph.addNode(node_Z.name, node_Z.incomingNeighbors, node_Z.outgoingNeighbors)

    ##Mostra o grafo com os nós
    print("\nMostra o grafo com os nós")
    secondGraph.showGraph()

    ##Adiciona a aresta
    secondGraph.addEdge("X", "Y")

    ##Mostra o grafo com a nova aresta
    print("\nMostra o grafo com a nova aresta")
    secondGraph.showGraph()

    ##Adiciona uma segunda aresta
    secondGraph.addEdge("W", "X")

    ##Tenta adicionar uma aresta inválida
    print("\nTenta adicionar uma aresta inválida")
    secondGraph.addEdge("Y", "W")

    ##Adiciona uma terceira aresta válida
    secondGraph.addEdge("Y", "Z")

    ##Mostra o grafo com todas as arestas
    print("\nMostra o grafo com todas as arestas")
    secondGraph.showGraph()

#Testa os métodos de Grafo
def testGraph():
    print("=========================")
    print("=========================")
    print("Testa os métodos de Graph")
    print("=========================")
    print("=========================")

    testShowGraphEmpty()
    
    testAddNewNodes()

    testShowGraphNotEmpty()
    
    testShowExistingNode()
    
    testAddExistingNode()
    
    testRemoveNode()
    
    testShowInexistentNode()
    
    testShowNodeRelatedToPreviousNode()
    
    testShowGraphPostDeletion()
    
    testGetExistingNode()
    
    testGetInexistentNode()
    
    testRemoveInexistentNode()
    
    testAddEdge()

'''
TESTES DE NODE
'''

#Testa addNeighbor
def testAddValidNeighbor():
    print("\n=========================")
    print("=========================")
    print("Testa addNeighbor")
    print("=========================")
    print("=========================")

    ##Mostra o grafo vazio
    secondGraph.showGraph()

    ##Adiciona os nós ao grafo
    secondGraph.addNode(node_W.name, node_W.incomingNeighbors, node_W.outgoingNeighbors)
    secondGraph.addNode(node_X.name, node_X.incomingNeighbors, node_X.outgoingNeighbors)
    secondGraph.addNode(node_Y.name, node_Y.incomingNeighbors, node_Y.outgoingNeighbors)
    secondGraph.addNode(node_Z.name, node_Z.incomingNeighbors, node_Z.outgoingNeighbors)

    ##Mostra o grafo com os nós
    print("\nMostra o grafo com os nós")
    secondGraph.showGraph()

    ##Adiciona a aresta
    node_X.addNeighbor(node_Y, secondGraph)

    ##Mostra o grafo com a nova aresta
    print("\nMostra o grafo com a nova aresta")
    secondGraph.showGraph()

    ##Adiciona uma segunda aresta
    node_Y.addNeighbor(node_Z, secondGraph)
    node_W.addNeighbor(node_X, secondGraph)

    ##Mostra o grafo com todas as arestas
    print("\nMostra o grafo com todas as arestas")
    secondGraph.showGraph()

#Testa todos os métodos de Node
def testNode():
    print("=========================")
    print("=========================")
    print("Testa os métodos de Node")
    print("=========================")
    print("=========================")

    testAddValidNeighbor()

#Testa todos os métodos
def testAll():
    testGraph()
    testNode()
'''
Executa os testes
'''
testGraph()
#testNode()
#testAll()