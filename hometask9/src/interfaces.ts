export interface iEdge {
  [name: string]: number | string;
}
export interface iNode {
  [name: string]: iEdge;
}
