import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./product/Product";
import AddNew from "./product/Add";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/add-new" element={<AddNew />} />
      </Routes>
    </Router>
  );
}

export default App;
