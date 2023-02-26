import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Films } from "./components/Films";
import { Home } from "./components/Home";
import { People } from "./components/Characters/People";
import { Planets } from "./components/Planets";
import { Species } from "./components/Species";
import { Starships } from "./components/Starships";
import { Vehicles } from "./components/Vehicles";
import { Person } from "./components/Characters/Person";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/films" element={<Films />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/species" element={<Species />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
