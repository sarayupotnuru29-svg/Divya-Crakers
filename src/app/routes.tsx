import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "cart", Component: Cart },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
    ],
  },
]);
