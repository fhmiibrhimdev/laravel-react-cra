import * as Bs from "react-bootstrap";
import { Link } from "react-router-dom";

function Product() {
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
                    <tr>
                      <td>1</td>
                      <td>HP Redmi 9A</td>
                      <td>HandPhone</td>
                      <td>169.00</td>
                      <td className="text-center">
                        <Bs.Button className="btn btn-warning">Edit</Bs.Button>
                        <Bs.Button className="btn btn-danger tw-ml-2">
                          Delete
                        </Bs.Button>
                      </td>
                    </tr>
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
