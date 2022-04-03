import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Countries from "./Components/Countries/Countries";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import { Header } from "./Components/Header/Header";
import News from "./Components/News/News";

import NotFound from "./Components/NotFound/NotFound";

function App() {
  // const [news, setNews] = useNews();
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<News></News>}></Route>
        <Route path="/news" element={<News></News>}></Route>
        <Route path="/home" element={<News></News>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/foodDetails/:foodId"
          element={<FoodDetails></FoodDetails>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/countries/" element={<Countries></Countries>}>
          <Route
            path=":countryName"
            element={<CountryDetails></CountryDetails>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
