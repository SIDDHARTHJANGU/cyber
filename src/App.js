import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Myheader from "./Components/Myheader";
import Gameplay from "./Components/Gameplay";
import Cyberfps from "./Components/Cyberfps";
import Straps from "./Components/Straps";
import Team from "./Components/Team";
import Solana from "./Components/Solana";
import Myfooter from "./Components/Myfooter";
import Faq from "./Components/Faq";

function App() {
  return (
    <div>
      <Myheader />
      <Gameplay />
      <Cyberfps />
      <Straps />
      <Team />
      <Faq />
      <Solana />
      <Myfooter />
    </div>
  );
}

export default App;
