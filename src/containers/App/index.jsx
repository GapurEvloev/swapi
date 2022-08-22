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
              const {path, component} = route;
              return <Route
                key={index}
                path={path}
                element={component()}
              />
            })
          }
        </Route>
      </Routes>
    </>
  )
}

export default App;
