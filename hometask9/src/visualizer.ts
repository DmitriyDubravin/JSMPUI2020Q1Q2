import * as vis from "vis-network/standalone";
import { Graph } from "./graph";
import { iEdge } from "./interfaces";

export class Visualizer {
  container = document.getElementById("mynetwork");
  graph: Graph;
  network: any;
  nodeIds: iEdge;

  addNodeInput = <HTMLInputElement>document.getElementById("addNodeInput");
  addNodeButton = document.getElementById("addNodeButton");
  removeNodeInput = <HTMLInputElement>(document.getElementById("removeNodeInput"));
  removeNodeButton = document.getElementById("removeNodeButton");
  addEdgeFromInput = <HTMLInputElement>document.getElementById("addEdgeFrom");
  addEdgeToInput = <HTMLInputElement>document.getElementById("addEdgeTo");
  addEdgeWeightInput = <HTMLInputElement>(document.getElementById("addEdgeWeight"));
  addEdgeButton = document.getElementById("addEdgeButton");
  removeEdgeFromInput = <HTMLInputElement>(document.getElementById("removeEdgeFrom"));
  removeEdgeToInput = <HTMLInputElement>document.getElementById("removeEdgeTo");
  removeEdgeButton = document.getElementById("removeEdgeButton");
  shortestFromInput = <HTMLInputElement>document.getElementById("shortestFrom");
  shortestToInput = <HTMLInputElement>document.getElementById("shortestTo");
  shortestFindButton = document.getElementById("shortestFindButton");
  shortestPath = document.getElementById("shortestPath");

  addNode: string = "";
  removeNode: string = "";
  edgeFrom: string = "";
  edgeTo: string = "";
  edgeWeight: string = "";
  removeEdgeFrom: string = "";
  removeEdgeTo: string = "";
  shortestFrom: string = "";
  shortestTo: string = "";

  constructor(graph: Graph) {
    this.graph = graph;
    this.handlers();
    this.render();
  }

  addInputListener = (input: any, prop: string) => {
    const self: { [x: string]: any } = this;
    input.addEventListener("input", (e: Event) => {
      const el = e.target as HTMLInputElement;
      self[prop] = el.value;
    });
  };

  handlers() {
    this.addInputListener(this.addNodeInput, "addNode");
    this.addInputListener(this.removeNodeInput, "removeNode");
    this.addInputListener(this.addEdgeFromInput, "edgeFrom");
    this.addInputListener(this.addEdgeToInput, "edgeTo");
    this.addInputListener(this.addEdgeWeightInput, "edgeWeight");
    this.addInputListener(this.removeEdgeFromInput, "removeEdgeFrom");
    this.addInputListener(this.removeEdgeToInput, "removeEdgeTo");
    this.addInputListener(this.shortestFromInput, "shortestFrom");
    this.addInputListener(this.shortestToInput, "shortestTo");

    this.handleAddNodeButton();
    this.handleRemoveNodeButton();
    this.handleAddEdgeButton();
    this.handleRemoveEdgeButton();
    this.handleShortestFindButton();
  }

  handleAddNodeButton() {
    this.addNodeButton.addEventListener("click", (e) => {
      if (this.addNode) {
        this.graph.addNode(this.addNode);
        this.addNodeInput.value = "";
        this.render();
      }
    });
  }

  handleRemoveNodeButton() {
    this.removeNodeButton.addEventListener("click", (e) => {
      if (this.removeNode) {
        this.graph.removeNode(this.removeNode);
        this.removeNodeInput.value = "";
        this.render();
      }
    });
  }

  handleAddEdgeButton() {
    this.addEdgeButton.addEventListener("click", (e) => {
      if (this.edgeFrom && this.edgeTo && this.edgeWeight) {
        this.graph.addEdge(this.edgeFrom, this.edgeTo, +this.edgeWeight);
        this.addEdgeFromInput.value = "";
        this.addEdgeToInput.value = "";
        this.addEdgeWeightInput.value = "";
        this.render();
      }
    });
  }

  handleRemoveEdgeButton() {
    this.removeEdgeButton.addEventListener("click", (e) => {
      if (this.removeEdgeFrom && this.removeEdgeTo) {
        this.graph.removeEdge(this.removeEdgeFrom, this.removeEdgeTo);
        this.removeEdgeFromInput.value = "";
        this.removeEdgeToInput.value = "";
        this.render();
      }
    });
  }

  handleShortestFindButton() {
    this.shortestFindButton.addEventListener("click", (e) => {
      if (this.nodeIds[this.shortestFrom] && this.nodeIds[this.shortestTo]) {
        if (this.nodeIds[this.shortestFrom] === this.nodeIds[this.shortestTo]) {
          this.shortestPath.innerHTML = `Same node`;
          return;
        }

        const shortestPathData = this.graph.findShortestPath(
          this.shortestFrom,
          this.shortestTo
        );

        if (shortestPathData.path.length < 2) {
          this.shortestPath.innerHTML = `No connection`;
          return;
        }
        this.shortestPath.innerHTML = `Shortest distance: ${
          shortestPathData.distance
        } | Shortest path: ${shortestPathData.path.join(" -> ")}`;

        this.setPathFocus(shortestPathData.path);
      } else {
        if (!this.nodeIds[this.shortestFrom]) {
          this.shortestFromInput.value = "";
        }
        if (!this.nodeIds[this.shortestTo]) {
          this.shortestToInput.value = "";
        }
      }
    });
  }

  setPathFocus(path: string[]) {
    const nodes = path.map((node: string) => this.nodeIds[node]);
    const edges = path
      .reduce((acc, item, i, arr) => {
        if (arr[i + 1]) {
          acc.push({
            from: this.nodeIds[arr[i]],
            to: this.nodeIds[arr[i + 1]],
          });
        }
        return acc;
      }, [])
      .map(({ from, to }: { from: number; to: number }) => {
        return this.network.getConnectedEdges(from).find((edgeId: string) => {
          const [edgeFrom, edgeTo] = this.network.getConnectedNodes(edgeId);
          return edgeFrom === from && edgeTo === to;
        });
      });

    this.network.setSelection(
      { nodes, edges },
      {
        unselectAll: true,
        highlightEdges: false,
      }
    );
  }

  render() {
    this.nodeIds = Object.keys(this.graph.list).reduce((acc, node, i) => {
      acc[node] = i + 1;
      return acc;
    }, {} as iEdge);

    const { nodes, edges } = Object.entries(this.graph.list).reduce(
      (acc, [node, nodeEdges]) => {
        acc.nodes.push({ id: this.nodeIds[node], label: node });
        for (let toNode in nodeEdges) {
          acc.edges.push({
            from: this.nodeIds[node],
            to: this.nodeIds[toNode],
            arrows: "to",
            label: "" + nodeEdges[toNode],
            font: { align: "horizontal" },
          });
        }
        return acc;
      },
      {
        nodes: [],
        edges: [],
      }
    );

    this.network = new vis.Network(
      this.container,
      {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges),
      },
      {
        nodes: {
          color: {
            highlight: {
              border: "red",
            },
          },
        },
        edges: {
          color: {
            highlight: "red",
          },
        },
      }
    );
  }
}
