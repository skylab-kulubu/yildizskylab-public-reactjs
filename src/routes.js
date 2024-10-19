import App from "./App";
import NewsRoute from "./Components/newsRoute";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "news/:id",
    element: <NewsRoute />,
  },
];

export default routes;
