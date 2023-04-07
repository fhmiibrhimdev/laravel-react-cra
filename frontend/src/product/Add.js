import * as Bs from "react-bootstrap";

function AddNew() {
  return (
    <Bs.Card>
      <Bs.Card.Body>
        <Bs.Card.Title>Add New Data</Bs.Card.Title>
        <form>
          <div className="form-group">
            <label>Name Product</label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </Bs.Card.Body>
    </Bs.Card>
  );
}

export default AddNew;
