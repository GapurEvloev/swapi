import Home from "../containers/Home";
import Chars from "../containers/Chars";

const routesConfig = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/chars",
    component: Chars,
  }
];

export default routesConfig;