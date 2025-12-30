import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./Pages/TodoList";
import TodoDetails from "./Pages/TodoDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;