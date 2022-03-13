import Links from "./Links/Links";
import Main from "./Main/Main";
import Counters from "./Main/Counters";
import Status from "./Main/Status";
import {Routes, Route, Navigate} from 'react-router-dom';
import Errors from "./Main/Errors";

const AppRoutes = () => {

    console.log("[App]      file: src/app/AppRoutes.js")

    return (
      <div>

          <header>

          </header>

          <Routes>

              {/*Main pages*/}
              <Route exact path='/' element={ <Main/> }/>

              {/*Counter and status pages*/}
              <Route exact path='/counters' element={ <Counters/> }/>
              <Route exact path='/status' element={ <Status/> }/>

              {/*Url generator page*/}
              <Route path='/cc' element={ <Links/> }/>

              {/*Not found page*/}
              <Route exact path='/error-404' element={<Errors />}/>
              <Route exact path='/:path' element={<Navigate to={"/error-404"}/>}/>

          </Routes>

          <footer>
              2022 © <a href={"https://github.com/sssr-dev"}>SSSR.dev</a>
          </footer>

      </div>
  );
}

export default AppRoutes;
