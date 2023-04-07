import * as Bs from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Product() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showing, setShowing] = useState(10);
  const MySwal = withReactContent(Swal);

  const baseURL = "http://192.168.18.11:8000";

  useEffect(() => {
    fetch(
      `${baseURL}/api/products?page=${currentPage}&per_page=${showing}&search=${searchTerm}&showing=${showing}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.data);
        setTotalPages(data.data.last_page);
        setTotalProducts(data.data.total);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [currentPage, showing, searchTerm, showing]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShow = (event) => {
    setShowing(parseInt(event.target.value));
  };

  const handleDelete = (id) => {
    fetch(`${baseURL}/api/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setProducts(products.filter((product) => product.id !== id));
        MySwal.fire({
          title: "Successfully!",
          html: "Data deleted succesfully.",
          icon: "success",
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <Bs.Container className="mt-5">
        <Bs.Row>
          <Bs.Col>
            <Bs.Card>
              <Bs.Card.Body>
                <div className="tw-flex">
                  <Bs.Card.Title>Table Product</Bs.Card.Title>
                  <Link to="/add-new" className="tw-ml-auto">
                    <Bs.Button>Add New</Bs.Button>
                  </Link>
                </div>
                <Bs.Form.Control
                  as="select"
                  value={showing}
                  onChange={handleShow}
                >
                  <option value="5">Show 5</option>
                  <option value="10">Show 10</option>
                  <option value="25">Show 25</option>
                  <option value="50">Show 50</option>
                  <option value="100">Show 100</option>
                </Bs.Form.Control>
                <Bs.Form.Group controlId="formBasicEmail">
                  <Bs.Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </Bs.Form.Group>
                <Bs.Table responsive striped bordered hover className="mt-4">
                  <thead>
                    <tr className="text-center">
                      <th>No</th>
                      <th>Name Product</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td className="text-center">
                          <Link
                            to={`/edit/${product.id}`}
                            className="btn btn-warning mr-2"
                          >
                            Edit
                          </Link>
                          <Bs.Button
                            onClick={() => handleDelete(product.id)}
                            className="btn btn-danger tw-ml-2"
                          >
                            Delete
                          </Bs.Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Bs.Table>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div>
                    Showing {(currentPage - 1) * showing + 1} to{" "}
                    {Math.min(currentPage * showing, totalProducts)} of{" "}
                    {totalProducts} results
                  </div>
                  <Bs.Pagination className="mt-4">
                    <Bs.Pagination.Prev
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    />
                    {Array.from({ length: totalPages }, (_, i) => (
                      <Bs.Pagination.Item
                        key={i}
                        active={i + 1 === currentPage}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </Bs.Pagination.Item>
                    ))}
                    <Bs.Pagination.Next
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                    />
                  </Bs.Pagination>
                </div>
              </Bs.Card.Body>
            </Bs.Card>
          </Bs.Col>
        </Bs.Row>
      </Bs.Container>
    </div>
  );
}

export default Product;
