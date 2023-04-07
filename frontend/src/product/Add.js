import * as Bs from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function AddNew() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://192.168.18.11:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          MySwal.fire({
            title: "Successfully!",
            html: "Data created succesfully.",
            icon: "success",
            timer: 1500,
          }).then(() => {
            navigate("/");
          });
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Bs.Container className="mt-5">
      <Bs.Card>
        <Bs.Card.Body>
          <div className="tw-flex">
            <Bs.Card.Title>Add New Data</Bs.Card.Title>
            <Link to="/" className="tw-ml-auto">
              <Bs.Button variant="secondary">Back</Bs.Button>
            </Link>
          </div>
          <Bs.Form className="mt-4" onSubmit={handleSubmit}>
            <Bs.Form.Group>
              <Bs.Form.Label>Product Name</Bs.Form.Label>
              <Bs.Form.Control
                type="text"
                className="mb-3"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Bs.Form.Group>
            <Bs.Form.Group>
              <Bs.Form.Label>Description</Bs.Form.Label>
              <Bs.Form.Control
                as="textarea"
                className="mb-3"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                style={{ height: "100px" }}
              />
            </Bs.Form.Group>
            <Bs.Form.Group>
              <Bs.Form.Label>Price</Bs.Form.Label>
              <Bs.Form.Control
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </Bs.Form.Group>
            <div className="tw-flex">
              <Bs.Button className="mt-5 tw-ml-auto" type="submit">
                Add Data
              </Bs.Button>
            </div>
          </Bs.Form>
        </Bs.Card.Body>
      </Bs.Card>
    </Bs.Container>
  );
}

export default AddNew;
