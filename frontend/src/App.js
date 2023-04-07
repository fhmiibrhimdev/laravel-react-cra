import * as Bs from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Bs.Container className="mt-5">
        <Bs.Row>
          <Bs.Col>
            <Bs.Card>
              <Bs.Card.Body>
                <Bs.Card.Text>Tabel Mahasiswa</Bs.Card.Text>
              </Bs.Card.Body>
            </Bs.Card>
          </Bs.Col>
        </Bs.Row>
      </Bs.Container>
    </div>
  );
}

export default App;
