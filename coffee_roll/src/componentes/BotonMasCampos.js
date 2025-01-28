import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';

function BotonCampos() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingresa los productos que deseas</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Productos" />
        </Form.Group>
        </div>
      </Collapse>
    </>
  );
}

export default BotonCampos;