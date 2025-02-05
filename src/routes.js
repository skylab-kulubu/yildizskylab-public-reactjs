import App from "./App";
import NewsRoute from "./Components/newsRoute";
import PDFViewer from "./Pages/kvkk";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "news/:id",
    element: <NewsRoute />,
  },
  {
    path: "/kvkk",
    element: <PDFViewer />,
  }
];

export default routes;
