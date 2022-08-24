import Home from "../containers/Home";
import Chars from "../containers/Chars";
import NotFound from "../containers/NotFound";
import Char from "../containers/Char";

const routesConfig = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/chars",
    element: <Chars/>,
  },
  {
    path: "/chars/:charId",
    element: <Char/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
];

export default routesConfig;