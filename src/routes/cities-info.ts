export const cities = [
  {
    name: "Lviv",
    x: 39.6,
    y: 350,
  },
  {
    name: "Warsaw",
    x: 181,
    y: 92,
  },
  {
    name: "Budapest",
    x: 174,
    y: 530,
  },
  {
    name: "Zagreb",
    x: 436,
    y: 666,
  },
  {
    name: "Munchen",
    x: 732,
    y: 504,
  },
  {
    name: "Cologne",
    x: 889,
    y: 293,
  },
  {
    name: "Brussels",
    x: 1051,
    y: 147,
  },
  {
    name: "Krakow",
    x: 209,
    y: 445,
  },
  {
    name: "Vienna",
    x: 543,
    y: 265,
  },
  {
    name: "Nuremberg",
    x: 848,
    y: 442,
  },
  {
    name: "Bielefeld",
    x: 1134,
    y: 245,
  },
  {
    name: "Warsaw",
    x: 181,
    y: 92,
  },
  {
    name: "Brno",
    x: 495,
    y: 522,
  },
  {
    name: "Hannover",
    x: 787,
    y: 85,
  },
  {
    name: "Amsterdam",
    x: 925,
    y: 170,
  },
  {
    name: "Lille",
    x: 1093,
    y: 79,
  },
  {
    name: "Bydgoszcz",
    x: 403,
    y: 89,
  },
  {
    name: "Prague",
    x: 573,
    y: 177,
  },
  {
    name: "Salzburg",
    x: 686,
    y: 378,
  },
  {
    name: "Milan",
    x: 981,
    y: 642,
  },
  {
    name: "Lyon",
    x: 1208,
    y: 512,
  },
  {
    name: "Paris",
    x: 1330,
    y: 342,
  },
];

export const cityRoutes = [
  [
    {
      from: "Lviv",
      to: "Budapest",
      distance: 576,
    },
    {
      from: "Budapest",
      to: "Zagreb",
      distance: 343,
    },
    {
      from: "Zagreb",
      to: "Munchen",
      distance: 549,
    },
    {
      from: "Munchen",
      to: "Cologne",
      distance: 575,
    },
    {
      from: "Cologne",
      to: "Brussels",
      distance: 209,
    },
    {
      from: "Brussels",
      to: "Paris",
      distance: 318,
    },
  ],
  [
    {
      from: "Lviv",
      to: "Krakow",
      distance: 325,
    },
    {
      from: "Krakow",
      to: "Vienna",
      distance: 465,
    },
    {
      from: "Vienna",
      to: "Nuremberg",
      distance: 503,
    },
    {
      from: "Nuremberg",
      to: "Bielefeld",
      distance: 436,
    },
    {
      from: "Bielefeld",
      to: "Paris",
      distance: 675,
    },
  ],
  [
    {
      from: "Lviv",
      to: "Warsaw",
      distance: 482,
    },
    {
      from: "Warsaw",
      to: "Brno",
      distance: 540,
    },
    {
      from: "Brno",
      to: "Amsterdam",
      distance: 1082,
    },
    {
      from: "Amsterdam",
      to: "Lille",
      distance: 286,
    },
    {
      from: "Lille",
      to: "Paris",
      distance: 226,
    },
  ],
  [
    {
      from: "Lviv",
      to: "Bydgoszcz",
      distance: 787,
    },
    {
      from: "Bydgoszcz",
      to: "Prague",
      distance: 566,
    },
    {
      from: "Prague",
      to: "Salzburg",
      distance: 573,
    },
    {
      from: "Salzburg",
      to: "Milan",
      distance: 461,
    },
    {
      from: "Milan",
      to: "Lyon",
      distance: 466,
    },
  ],
];
