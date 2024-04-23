import { Provider } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header"
import appStore from "./redux/appStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <Provider store={appStore}>
    <div>
      <ToastContainer
        autoClose= {4000}
      />
      <Header/>
      <Body/>
      <Footer/>
    </div>
   </Provider>
  );
}

export default App;
