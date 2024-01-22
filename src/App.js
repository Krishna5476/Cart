import "./App.css";
import Auth from "./components/Auth";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./components/Layout";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";
let firstRender = true;
console.log(firstRender);
function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  // getting the cart details from the store
  const cart = useSelector((state) => state.cart);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }

    const sendRequest = async () => {
      // while sending the details
      dispatch(
        uiActions.showNotification({
          message: "sending the request",
          open: true,
          type: "warning",
        })
      );
      const res = await fetch(
        `https://redux-http-681ad-default-rtdb.firebaseio.com/cartItems.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      // while details gets updated
      const data = res.json();
      console.log(data);
      dispatch(
        uiActions.showNotification({
          message: "Request sent",
          open: true,
          type: "success",
        })
      );
    };
    // while theres an error
    sendRequest().catch((err) => {
      dispatch(
        uiActions.showNotification({
          message: "sending request failed",
          open: true,
          type: "error",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
        ></Notification>
      )}
      {!isLoggedIn && <Auth></Auth>}
      {isLoggedIn && <Layout></Layout>}
    </div>
  );
}

export default App;
