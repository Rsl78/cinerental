import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import { useState, useContext } from "react";
import CartDetails from "../cine/CartDetails";
import { MovieContext, ThemeContext } from "../context";

const Header = () => {
  const [showCard, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  console.log(cartData);

  function handleCartShow() {
    setShowCart(true);
  }

  return (
    <header>
      {showCard && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="Ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(darkMode => !darkMode)}
            >
              <img src={darkMode? Sun: Moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img
                src={ShoppingCart}
                width="24"
                height="24"
                alt="Shopping Cart"
              />
              {cartData.length > 0 && (
                <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
