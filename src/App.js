import logo from "./logo.svg";
import "./App.css";
import InsertionSortPage from "./InsertionSortPage";
import InsertionSortVisualization from "./InsertionSortVisualization";
import InsertionSortExplanation from "./InsertionSortExplanation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div>
      <InsertionSortExplanation />
      <InsertionSortVisualization />
      <InsertionSortPage />
    </div>
  );
}

export default App;
