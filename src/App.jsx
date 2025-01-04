import Page from "./components/Page";
import { MovieContext, ThemeContext } from "./context";
import { useState, useReducer } from "react";
// import { cartReducer, initialState } from "./reducers/CartReducer";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {/* <MovieContext.Provider value={{ cartData, setCartData  }}> */}
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer/>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
