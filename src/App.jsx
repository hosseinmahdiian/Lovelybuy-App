import { useReducer } from "react";
import Acconut from "./Components/Account";
import { reducerContext } from "./Context/Context";
import Home from "./Components/Home";
import { BrowserRouter, Router } from "react-router-dom";
import Routers from "./Router/Routers";

function App() {
  const FnReducer = (state, action) => {
    switch (action.type) {
      case "acconut":
        return {
          ...state,
          acconut: !state.acconut,
        };

      case "logIn":
        return {
          ...state,
          logIn: !state.logIn,
        };

      case "basket":
        return {
          ...state,
          basket: !state.basket,
        };

      case "pay":
        return {
          ...state,
          pay: !state.pay,
        };

      case "successful":
        return {
          ...state,
          successful: !state.successful,
        };

      case "save":
        return {
          ...state,
          save: !state.save,
        };
      default:
        break;
    }
  };
  const init = {
    acconut: false,
    logIn: false,
    basket: false,
    pay: false,
    successful: false,
    save: false,
  };

  const reducer = useReducer(FnReducer, init);

  return (
    <>
      <div className="w-[400px] max-h-[1000px] min-h-[600px] h-[900px] mx-auto">
        <reducerContext.Provider value={reducer}>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </reducerContext.Provider>
      </div>
    </>
  );
}

export default App;
