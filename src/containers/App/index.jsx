import { Routes, Route } from "react-router-dom";

import routesConfig from "../../routes/routesConfig";
import Layout from "../Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          {
            routesConfig.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                />
              )
            })
          }
        </Route>
      </Routes>
    </>
  )
}

export default App;
