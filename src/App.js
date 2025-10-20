import {Provider} from "react-redux";
import Footer from "./components/Footer";
import appstore from "./utils/appstore";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
  <div>
     <Provider store={appstore}>
      <Header />
      <Outlet />
      <Footer/>
      </Provider> 
  </div> 
  );
}

export default App;
