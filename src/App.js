import {Provider} from "react-redux";
import Body from "../src/components/Body"
import Footer from "./components/Footer";
import appstore from "./utils/appstore";
function App() {
  return (
  <div>
     <Provider store={appstore}>
      <Body />
      <Footer/></Provider> 
  </div> 
  );
}

export default App;
