import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./product/Product";
import AddNew from "./product/Add";
import EditProduct from "./product/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/edit/:id" exact element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
