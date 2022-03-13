import Links from "./Links";
import Main from "./Main";
import { Routes ,Route } from 'react-router-dom';

const App = () => {

    console.log("[App] src/App.js")

    return (
      <div>
        <Routes>

          {/*Main page*/}
          <Route exact path='/' element={ <Main/> }/>
          <Route exact path='/:path' element={ <Main/> }/>

          {/*Url page*/}
          <Route path='/links' element={ <Links/> }/>

        </Routes>
      </div>
  );
}

export default App;
