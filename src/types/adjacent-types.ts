export type Adjacent = {
  node: string;
  weight: number;
};

export type AdjacencyList = {
  [key: string]: Adjacent[];
};

export type PriorityQueueValue = {
  val: string;
  priority: number;
};

export type Distance = {
  [key: string]: number;
};

export type CityRoutes = {
  from: string;
  to: string;
  distance: number;
};

export type City = {
  name: string;
  x: number;
  y: number;
};
