import ToDoList from "./to-do-list";
import DigitalClock from "./digitalClock";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/digitalClock" element={<DigitalClock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
