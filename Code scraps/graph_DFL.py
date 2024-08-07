import copy

'''
Classe Grafo, para guardar os nós e representar as relações de superioridade. Representa um grafo direcionado.

Cada nó representa um exemplo dentro da categoria relevante (por exemplo, comidas: pizza, lasanha, macarrão, sushi, etc.).

Um nó A é superior a outro nó B se, e somente se, existir caminho de A para B. Não é possível existir ciclo.
'''
class Graph:
    def __init__(self):
        #Nós do grafo são guardados em um dicionário para fácil acesso. O dicionário é formatado como {string : Node}
        self.nodeByName = {}
        #Nós do grafo também são guardados em uma lista para acesso da função randomChoice. Guardados pelo nome, em string
        #Não é acessado por nenhum outro lugar
        self.nodesList = []
        #Tamanho do grafo é guardado como um inteiro. Acessado para calcular o grau máximo
        self.graphSize = 0
    
    #Retorna um dado nó. Retorna o tipo Node, caso o node exista; não retorna nada, do contrário.
    def getNode(self, nodeName):
        if nodeName not in self.nodeByName:
            print("\nNode does not exist.")
        else:
            return self.nodeByName[nodeName]

    #Adiciona um nó ao grafo, caso já não esteja lá. (Alterações a um nó devem ser feitas usando os métodos da classe Nó)
    def addNode(self, nodeName, incomingNeighbors, outgoingNeighbors):
        if nodeName in self.nodeByName:
            print("\nNode already exists.")
        else:
            newNode = Node(nodeName, incomingNeighbors, outgoingNeighbors)
            self.nodeByName.update({newNode.name : newNode})
            self.nodesList.append(newNode.name)
            self.graphSize += 1

    #Remove um nó do grafo, caso ainda esteja lá.
    def removeNode(self, nodeName):
        if nodeName not in self.nodeByName:
            print("\nNode does not exist.")
        else:
            self.graphSize -= 1
            self.nodesList.remove(nodeName)
            self.nodeByName.pop(nodeName)
            for node in self.nodeByName.values():
                if nodeName in node.incomingNeighbors:
                    node.incomingNeighbors.remove(nodeName)
                if nodeName in node.outgoingNeighbors:
                    node.outgoingNeighbors.remove(nodeName)

    #Exibe um único nó do grafo, caso exista.
    def showNode(self, nodeName):
        if nodeName not in self.nodeByName:
            print("\nNode does not exist.")
        else:
            node = self.getNode(nodeName)
            print("\nNode name: " + node.name)
            print("\nIncoming neighbors:")
            for neighborName in node.incomingNeighbors:
                print("\n" + neighborName)
            print("\nOutgoing neighbors:")
            for neighborName in node.outgoingNeighbors:
                print("\n" + neighborName)
    
    #Exibe o grafo todo em forma de texto.
    def showGraph(self):
        if len(self.nodeByName) == 0:
            print("\nGraph is empty.")
        else:
            for node in self.nodeByName:
                self.showNode(node)

    #Gera uma lista que contém os graus dos vértices ordenados.
    def getDegreeList(self):
        if len(self.nodeByName) == 0:
            print("\nGraph is empty.")
        else:
            ret = []
            for vertex in self.nodeByName.values():
                vertex.updateDegree()
                ret.append(vertex.degree)
            ret.sort()
            return ret
    
    #Cria uma cópia temporária do próprio grafo para adicionar arestas temporárias. Caso a operação de adição de aresta tenha sucesso,
    #faz a adição de aresta no grafo real. Do contrário, aborta o processo
    #Caso o processo tenha sucesso, também atualiza o grau dos vértices do grafo
    #Recebe o nome de dois vértices e cria a aresta entre eles, além de todas as outras que são consequência
    def addEdge(self, greaterNode, lesserNode):
        tempGraph = copy.deepcopy(self)
        if tempGraph.getNode(greaterNode).addNeighbor(tempGraph.getNode(lesserNode), self):
            self.getNode(greaterNode).addNeighbor(self.getNode(lesserNode), self)
            for vertex in self.nodeByName.values():
                vertex.updateDegree()
    
    #Reinicializa o grafo para um estado sem arestas
    def resetGraph(self):
        for node in self.nodeByName.values():
            node.resetNode()

    #Tenta adicionar uma aresta, mas primeiro confere se pode usando uma busca. Se não puder, não coloca. Se puder, coloca
    #greaterNode e lesserNode são Strings
    def addUnfilledEdge(self, greaterNode, lesserNode):
        #DFS recebe um Node e retorna um Set de Strings
        reachableFromLesser = self.DFS(self.getNode(lesserNode))
        
        #Verifica se o próprio nó é alcançável a partir do novo vizinho de baixo (se gera loop)
        if greaterNode in reachableFromLesser:
            return False
        
        #Se não gerar loop, adiciona a aresta
        self.getNode(greaterNode).outgoingNeighbors.add(lesserNode)
        self.getNode(lesserNode).incomingNeighbors.add(greaterNode)
        return True
    
    #Funções de DFS para fazer a busca usada em addUnfilledEdge
    #currentNeighbor é um Node; visitedNeighbors é um Set de Strings
    def DFSUtil(self, currentNeighbor, visitedNeighbors):
        #Vizinhos visitados são guardados por nome
        visitedNeighbors.add(currentNeighbor.name)

        #Retorna um Set de Strings
        outNeighbors = self.nodeByName[currentNeighbor.name].outgoingNeighbors

        #Procura em um Set de Strings
        for neighborName in outNeighbors:
            neighbor = self.getNode(neighborName)
            if neighborName not in visitedNeighbors:
                self.DFSUtil(neighbor, visitedNeighbors)

    #Efetivamente realiza o DFS
    def DFS(self, initialNeighbor):
        visitedNeighbors = set()
        self.DFSUtil(initialNeighbor, visitedNeighbors)
        return visitedNeighbors
    
    #Preenche o grafo com todas as arestas implícitas que não foram colocadas com addUnfilledEdge
    def fillOutGraph(self):
        #Guarda as arestas a serem adicionadas em um padrão Node : List de Node
        nodesToAdd = dict()

        #Para cada nó no grafo
        for node in self.nodeByName.values():
            #Adiciona um elemento no dicionário para si próprio
            nodesToAdd.update({node : list()})
            #DFS retorna um Set de Strings
            reachableLessers = self.DFS(node)
            #Preenche a lista de Nodes com todos os nós alcançáveis a partir de si próprio
            for lesser in reachableLessers:
                nodesToAdd[node].append(self.getNode(lesser))
        
        #Para cada nó do grafo
        for greaterNode in nodesToAdd.keys():
            #Adiciona uma aresta para cada nó alcançável a partir dele próprio, exceto ele próprio
            for lesserNode in nodesToAdd[greaterNode]:
                if greaterNode.name == lesserNode.name:
                    continue
                self.getNode(greaterNode.name).outgoingNeighbors.add(lesserNode.name)
                self.getNode(lesserNode.name).incomingNeighbors.add(greaterNode.name)


'''
Classe Nó, representa os nós dentro do grafo. Cada nó tem um nome e um conjunto (set) de vizinhos de entrada e de saída.

Os vizinhos de entrada são aqueles que apontam para o nó; os de saída são aqueles para os quais o nó aponta.

Os vizinhos de entrada são superiores ao nó; o nó é superior aos seus vizinhos de saída.

Vizinhos de entrada são chamados incomingNeighbors; vizinhos de saída são chamados outgoingNeighbors.
'''
class Node:
    def __init__(self, name, incomingNeighbors, outgoingNeighbors):
        #Nome do nó; guardado como uma string
        self.name = name
        #Vizinhos de entrada do nó; guardado como um conjunto de strings
        self.incomingNeighbors = incomingNeighbors
        #Vizinhos de saída do nó; guardado como um conjunto de strings
        self.outgoingNeighbors = outgoingNeighbors
        #Cardinalidade do nó; guardada como um inteiro
        self.degree = 0
        #Cor do nó; usada para determinar a qual subgrupo o nó pertence
        self.color = -1
    
    #Adiciona um novo vizinho de saída ao nó. Ao fazer isso:
    #Cada vizinho de entrada do nó atual e o próprio nó atual passam a ser vizinhos de entrada do novo nó; ciclo aborta o processo.
    #Se o novo nó ainda tiver vizinhos de saída, chama a função por recorrência para os vizinhos de saída do novo nó.
    #Notavelmente, implementado desse jeito, todos os nós sempre têm um caminho de tamanho 1 entre si e seus vizinhos de baixo. Isso
    #torna óbvio que, se A>B>C, então A>C. A>C fica explicitado.
    #Recebe um Node a ser adicionado e o Graph que contém os nós; retorna False, caso o processo tenha sido abortado; retorna True, do contrário.
    def addNeighbor(self, newNeighbor, currentGraph):
        #Verifica que não encontrou loop
        if (self.name in newNeighbor.outgoingNeighbors) or (newNeighbor.name in self.incomingNeighbors):
            #print("\nLoop detected. Aborting new neighbor.")
            return False
        #Adiciona si mesmo ao novo vizinho
        newNeighbor.incomingNeighbors.add(self.name)
        self.outgoingNeighbors.add(newNeighbor.name)
        #Adiciona todos os vizinhos acima de si ao novo vizinho
        for neighbor in self.incomingNeighbors:
            upperNeighbor = currentGraph.getNode(neighbor)
            upperNeighbor.outgoingNeighbors.add(newNeighbor.name)
            newNeighbor.incomingNeighbors.add(upperNeighbor.name)
        #Caso o novo vizinho não tenha filhos, acaba aqui
        if (len(newNeighbor.outgoingNeighbors) == 0):
            return True
        #Recorre até o final da árvore
        for neighbor in newNeighbor.outgoingNeighbors:
            isWorking = self.addNeighbor(currentGraph.getNode(neighbor), currentGraph)
            if not isWorking:
                return False
        return True
    
    #Mostra o grau do vértice
    def showDegree(self):
        print("\nCardinalidade do vértice " + self.name + ":")
        print(self.degree)

    #Atualiza o grau do vértice
    def updateDegree(self):
        self.degree = len(self.incomingNeighbors) + len(self.outgoingNeighbors)
    
    #Reinicializa o nó para um nó vazio
    def resetNode(self):
        self.incomingNeighbors = set()
        self.outgoingNeighbors = set()
        self.updateDegree()
        self.color = -1