import { iNode, iEdge } from "./interfaces";

export class Graph {
  list: iNode = {};

  constructor() {}

  addNode(node: string) {
    this.list[node] = {};
  }

  removeNode(node: string) {
    for (let listNode in this.list) {
      this.removeEdge(node, listNode, true);
    }
    delete this.list[node];
  }

  addEdge(
    fromNode: string,
    toNode: string,
    weight: number,
    bothWays: boolean = false
  ) {
    if (this.list[fromNode] && this.list[toNode]) {
      this.list[fromNode][toNode] = weight;
      if (bothWays) {
        this.list[toNode][fromNode] = weight;
      }
    }
  }

  removeEdge(fromNode: string, toNode: string, bothWays: boolean = false) {
    delete this.list[fromNode][toNode];
    if (bothWays) {
      delete this.list[toNode][fromNode];
    }
  }

  shortestDistanceNode(distances: iEdge, visited: string[]) {
    let shortest = null;

    for (let node in distances) {
      let currentIsShortest =
        shortest === null || distances[node] < distances[shortest];

      if (currentIsShortest && !visited.includes(node)) {
        shortest = node;
      }
    }
    return shortest;
  }

  findShortestPath(startNode: string, endNode: string) {
    let distances: iEdge = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, this.list[startNode]);
    let parents: { [x: string]: null | string } = { endNode: null };
    for (let child in this.list[startNode]) {
      parents[child] = startNode;
    }

    let visited: string[] = [];
    let node = this.shortestDistanceNode(distances, visited);

    while (node) {
      let distance = distances[node];
      let children = this.list[node];

      for (let child in children) {
        if (String(child) === String(startNode)) {
          continue;
        } else {
          let newdistance = +distance + +children[child];
          if (!distances[child] || distances[child] > newdistance) {
            distances[child] = newdistance;
            parents[child] = node;
          }
        }
      }
      visited.push(node);
      node = this.shortestDistanceNode(distances, visited);
    }

    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }
    shortestPath.reverse();

    let results = {
      distance: distances[endNode],
      path: shortestPath,
    };
    return results;
  }
}
