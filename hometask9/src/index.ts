import { Graph } from "./graph";
import { Visualizer } from "./visualizer";

const graph = new Graph();
function testingData(graph: Graph) {
  graph.addNode("kyiv");
  graph.addNode("kharkiv");
  graph.addNode("lviv");
  graph.addNode("dnepr");
  graph.addNode("odessa");
  graph.addNode("poltava");

  graph.addEdge("kharkiv", "kyiv", 7);
  graph.addEdge("kharkiv", "poltava", 5);
  graph.addEdge("kharkiv", "odessa", 10);
  graph.addEdge("kharkiv", "lviv", 20);
  graph.addEdge("kharkiv", "dnepr", 4);
  graph.addEdge("poltava", "lviv", 8);
  graph.addEdge("kyiv", "lviv", 8);
  graph.addEdge("dnepr", "kharkiv", 4);
  graph.addEdge("dnepr", "odessa", 4);
  graph.addEdge("odessa", "lviv", 4);
  graph.addEdge("lviv", "dnepr", 7);
}

testingData(graph);

new Visualizer(graph);
