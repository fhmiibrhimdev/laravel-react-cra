import * as Bs from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Product() {
  const [products, setProducts] = useState([]);
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    fetch("http://192.168.18.11:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch("http://192.168.18.11:8000/api/products/" + id, {
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
                          <Bs.Button className="btn btn-warning">
                            Edit
                          </Bs.Button>
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
              </Bs.Card.Body>
            </Bs.Card>
          </Bs.Col>
        </Bs.Row>
      </Bs.Container>
    </div>
  );
}

export default Product;
