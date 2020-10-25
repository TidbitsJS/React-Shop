import cartSweet from "../../imgCart/sweets-1.jpeg";
import cartCake from "../../imgCart/cake-2.jpeg";
import cartCupcake from "../../imgCart/cupcake-3.jpeg";
import cartDoughnut from "../../imgCart/doughnut-1.jpeg";

export const initialItems = [
  {
    id: 1,
    name: "Sweet Item",
    price: "10",
    category: "sweets",
    cartImg: cartSweet,
    count: 1,
  },
  {
    id: 2,
    name: "Cake Item",
    price: "15",
    category: "sweets",
    cartImg: cartCake,
    count: 2,
  },
  {
    id: 3,
    name: "Cupcake Item",
    price: "12",
    category: "sweets",
    cartImg: cartCupcake,
    count: 3,
  },
  {
    id: 4,
    name: "Doughnut Item",
    price: "20",
    category: "sweets",
    cartImg: cartDoughnut,
    count: 1,
  },
];
