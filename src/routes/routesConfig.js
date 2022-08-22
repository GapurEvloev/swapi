import Home from "../containers/Home";
import Chars from "../containers/Chars";
import NotFound from "../containers/NotFound";

const routesConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/chars",
    component: Chars,
  },
  {
    path: "*",
    component: NotFound,
  }
];

export default routesConfig;