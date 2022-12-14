import Home from "../containers/Home";
import Chars from "../containers/CharsPage";
import NotFound from "../containers/NotFound";
import Char from "../containers/CharPage";
import FavouritesPage from "../containers/FavouritesPage";
import SearchPage from "../containers/SearchPage";
import ErrorMessage from "../components/ErrorMessage";

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
    path: "/search",
    element: <SearchPage/>,
  },
  {
    path: "/favourites",
    element: <FavouritesPage/>,
  },
  {
    path: "/fail",
    element: <ErrorMessage/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  }
];

export default routesConfig;