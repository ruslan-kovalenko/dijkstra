import "./style.css";
import WeightedGraph from "./dijkstra/weighted-graph";
import { cities, cityRoutes } from "./routes/cities-info";
import { City, CityRoutes } from "./types/adjacent-types";

class App {
  constructor() {
    this.initializeRoutePoints();
    this.renderRouteLists();
    this.computeShortestPath();
  }

  renderRouteLists() {
    const paths = document.getElementsByClassName("routes")[0];

    cityRoutes.forEach((route: CityRoutes[], index: number) => {
      const routeBlock = document.createElement("div");
      routeBlock.classList.add("route-block");
      routeBlock.innerHTML += `<p class="route-number"> route #${(index += 1)}:</p>`;
      let total = 0;

      route.forEach((route: CityRoutes) => {
        const { from, to, distance } = route;
        total += distance;
        routeBlock.innerHTML += `<p class="route-description"> ${from} - ${to} - ${distance}km </p>`;
      });

      routeBlock.innerHTML += `<p class="route-total"> Total: ${total}km ${
        index === 2 ? " - FASTEST" : ""
      } </p>`;
      paths.appendChild(routeBlock);
    });
  }

  initializeRoutePoints() {
    const paths = document.getElementById("paths");

    if (!paths) return;

    cities.forEach((city: City) => {
      const { name, x, y } = city;
      const path = `
        <g>
          <circle cx="${x}" cy="${y}" r="5" fill="black" />
          <text x="${x}" y="${
        y - 10
      }" text-anchor="middle" fill="black">${name}</text>
        </g>
      `;

      paths.innerHTML += path;
    });
  }

  computeShortestPath() {
    const graph = new WeightedGraph();

    cities.forEach((city: City) => {
      graph.addVertex(city.name);
    });

    cityRoutes.flat().forEach((route: CityRoutes) => {
      const { from, to, distance } = route;

      graph.addEdge(from, to, distance);
    });
    const shortestPath = graph.dijkstra("Lviv", "Paris");
  }
}

const app = new App();
