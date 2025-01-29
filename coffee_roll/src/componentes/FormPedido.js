import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Forms.css'
import BotonCampos from './BotonMasCampos';

function FormPedido() {
  return (
    <Form className='forms'>
        <Form.Text className="text-muted">
          Ingresa datos para el pedido
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre del cliente</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Direccion</Form.Label>
        <Form.Control type="text" placeholder="Ingrese la Direccion del pedido" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Fecha y hora de entrega</Form.Label>
        <Form.Control type="date" placeholder="Seleccione la fecha y hora de entrega" />
        <br />
        <Form.Control type="time" placeholder="Seleccione la fecha y hora de entrega" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa los productos que deseas</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Productos" />
      </Form.Group>
      < BotonCampos/>
     <br />
     <br />
      <Button variant="primary" type="submit">
        Realizar Pedido
      </Button>
    </Form>
  );
}

export default FormPedido;