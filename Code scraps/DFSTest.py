import graph_DFL as g

node_A_inc = set()
node_A_out = set()
node_A = g.Node("A", node_A_inc, node_A_out)

node_B_inc = set()
node_B_out = set()
node_B = g.Node("B", node_B_inc, node_B_out)

node_C_inc = set()
node_C_out = set()
node_C = g.Node("C", node_C_inc, node_C_out)

node_D_inc = set()
node_D_out = set()
node_D = g.Node("D", node_D_inc, node_D_out)

myGraph = g.Graph()
myGraph.addNode(node_A.name, node_A.incomingNeighbors, node_A.outgoingNeighbors)
myGraph.addNode(node_B.name, node_B.incomingNeighbors, node_B.outgoingNeighbors)
myGraph.addNode(node_C.name, node_C.incomingNeighbors, node_C.outgoingNeighbors)
myGraph.addNode(node_D.name, node_D.incomingNeighbors, node_D.outgoingNeighbors)
if myGraph.addUnfilledEdge("A", "B"):
    print("added a -> b")
if myGraph.addUnfilledEdge("B", "C"):
    print("added b -> c")

myGraph.showGraph()
visitedNodes = myGraph.DFS(myGraph.getNode("A"))
print(visitedNodes)

myGraph.fillOutGraph()
myGraph.showGraph()