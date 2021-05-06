import "./App.css";
import Sidebar from "./Components/Sidebar";
import Videocomponent from "./Components/Videocomponent";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Card from "./Components/Cards/Card";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="rightSide">
        <Header />
        <Videocomponent />
        <Banner />
        <div className="bottom">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
