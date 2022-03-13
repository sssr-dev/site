import Links from "./Links/Links";
import Main from "./Main/Main";
import { Routes ,Route } from 'react-router-dom';

const AppRoutes = () => {

    console.log("[App]      file: src/app/AppRoutes.js")

    return (
      <div>

          <Routes>

              {/*Main page*/}
              <Route exact path='/' element={ <Main/> }/>
              <Route exact path='/:path' element={ <Main/> }/>

              {/*Url page*/}
              <Route path='/cc' element={ <Links/> }/>

          </Routes>

          <footer>
              2022 © <a href={"https://github.com/sssr-dev"}>SSSR.dev</a>
          </footer>

      </div>
  );
}

export default AppRoutes;
