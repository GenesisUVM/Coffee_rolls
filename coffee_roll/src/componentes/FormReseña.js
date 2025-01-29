import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forms.css'


function FormReseña() {
  return (
    <Form className='formsReseña'>
        <Form.Text className="text-muted">
          Ingresa tu opinion 
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre del cliente</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha del consumo</Form.Label>
        <Form.Control type="date" placeholder="Seleccione la fecha y hora de entrega" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa los productos que cosumistes</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Productos" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa tu opinion de los productos</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Productos" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Publicar reseña
      </Button>
    </Form>
  );
}

export default FormReseña;