import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forms.css'


function FormContacto() {
  return (
    <Form className='formContacto'>
        <Form.Text className="text-muted">
          Ingresa mensaje
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingrese el nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Ingrese la correo del cliente" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Ingrese mensaje" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormContacto;