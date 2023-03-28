import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { People } from "./components/Characters/People";
import { Person } from "./components/Characters/Person";
import { Films } from "./components/Films/Films";
import { Film } from "./components/Films/Film";
import { Planets } from "./components/Planets/Planets";
import { Planet } from "./components/Planets/Planet";
import { Species } from "./components/Species/Species";
import { Specie } from "./components/Species/Specie";
import { Starships } from "./components/Starships/Starships";
import { Starship } from "./components/Starships/Starship";
import { Vehicles } from "./components/Vehicles/Vehicles";
import { Vehicle } from "./components/Vehicles/Vehicle";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { Navigation } from "./components/Navigation";
import { PageNotFound } from "./components/PageNotFound";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<Person />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:id" element={<Planet />} />
            <Route path="/films" element={<Films />} />
            <Route path="/films/:id" element={<Film />} />
            <Route path="/starships" element={<Starships />} />
            <Route path="/starships/:id" element={<Starship />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/vehicles/:id" element={<Vehicle />} />
            <Route path="/species" element={<Species />} />
            <Route path="/species/:id" element={<Specie />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
