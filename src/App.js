import "./styles.css";
import { Header } from "./Component/Header";
import { Body } from "./Component/Body";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
}
