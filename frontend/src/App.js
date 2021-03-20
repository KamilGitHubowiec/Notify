import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ModalPopup from "./components/ModalPopup/ModalPopup";

function App() {
  return (
    <Router>
      <Route path="/notes" component={HomePage} /> 
      <Route path="/notes/:id" component={ModalPopup} />
      <Redirect from="/" to="notes" /> 
    </Router>
  );
}

export default App;
