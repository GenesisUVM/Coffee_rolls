import Card from 'react-bootstrap/Card';
import './Contenedores.css'

function ContentBotton({img, text}) {
  return (
    <>
      <Card className='card'>
        <Card.Img variant="bottom" src={img} className='img' />
        <Card.Body>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
        
      </Card>
    </>
  );
}

export default ContentBotton;