import Links from "./Links/Links";
import Main from "./Main/Main";
import Counters from "./Main/Counters";
import Status from "./Main/Status";
import {Routes, Route, Navigate, NavLink} from 'react-router-dom';
import Errors from "./Main/Errors";

const AppRoutes = () => {

    console.log("[App]      file: src/app/AppRoutes.js")

    return (
      <div>

          <header className={"center-text"}>
            <nav>

                <NavLink exact activeClassName={"active"} to={"/"}>
                    Home &emsp;
                </NavLink>

                <NavLink exact activeClassName={"active"} to={"/cc"}>
                    Link shortening &emsp;
                </NavLink>

                <NavLink exact activeClassName={"active"} to={"/status"}>
                    Status &emsp;
                </NavLink>

                <NavLink exact activeClassName={"active"} to={"/counters"}>
                    Counters &emsp;
                </NavLink>

            </nav>
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
              <Route exact path='/error-404' element={<Errors error={404}/>}/>
              <Route exact path='/:path' element={<Navigate to={"/error-404"}/>}/>

          </Routes>

          <br/>
          <footer>
              2022 © SSSR.dev <a href={"https://github.com/sssr-dev"}>Download this site.</a>
          </footer>

      </div>
  );
}

export default AppRoutes;
