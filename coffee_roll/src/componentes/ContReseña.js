import Card from 'react-bootstrap/Card';

function ContReseña() {
  return (
    <div>
        <Card className='opiniones'>
        <Card.Header>Café Aromático de la Casa</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
            Este café de origen único es una mezcla perfecta de granos seleccionados a mano, tostados a la perfección para resaltar su sabor intenso y aroma envolvente. Ideal para comenzar el día con energía, su perfil de sabor incluye notas de chocolate oscuro y un toque de nuez.
            </p>
            <footer className="blockquote-footer">
            Ana Clara Morales
            </footer>
            </blockquote>
        </Card.Body>
        </Card>
        <Card className='opiniones'>
        <Card.Header>Té Verde Refrescante</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                Nuestro té verde es una opción saludable y revitalizante. Cultivado en las montañas, este té ofrece un sabor suave y fresco, perfecto para cualquier momento del día. Con propiedades antioxidantes, es ideal para aquellos que buscan un impulso natural. ¡No te lo puedes perder!</p>
                <footer className="blockquote-footer">
                Diego López
                </footer>
            </blockquote>
        </Card.Body>
        </Card>
        <Card className='opiniones'>
        <Card.Header>Pastel de Zanahoria Especiado</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
            Este delicioso pastel de zanahoria es un clásico en nuestra cafetería. Con una mezcla de especias cálidas y una textura húmeda, cada bocado es una explosión de sabor. Cubierto con un glaseado de queso crema, es el acompañamiento perfecto para tu café o té. ¡Un verdadero placer!</p>
            <footer className="blockquote-footer">
            Valentina Gómez
            </footer>
            </blockquote>
        </Card.Body>
        </Card>
        <Card className='opiniones'>
        <Card.Header>Smoothie Tropical</Card.Header>
        <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                Refresca tu día con nuestro smoothie tropical, una mezcla vibrante de piña, mango y plátano. Este batido no solo es delicioso, sino que también está lleno de vitaminas y minerales. Perfecto para esos días calurosos, ¡te transportará a una playa paradisíaca con cada sorbo!</p>
                <footer className="blockquote-footer">
                Lucas Fernández
                </footer>
                </blockquote>
        </Card.Body>
        </Card>
        <Card className='opiniones'>
        <Card.Header>Galletas de Chocolate y Nueces</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                Nuestras galletas de chocolate y nueces son el snack perfecto para cualquier amante del dulce. Crujientes por fuera y suaves por dentro, cada galleta está repleta de trozos de chocolate y nueces tostadas. ¡Una combinación irresistible que hará que vuelvas por más!</p>
                <footer className="blockquote-footer">
                Camila Ruiz
                </footer>
            </blockquote>
        </Card.Body>
        </Card>
        <Card className='opiniones'>
        <Card.Header>Cappuccino Cremoso</Card.Header>
        <Card.Body>
            <blockquote className="blockquote mb-0">
            <p>
            Este cappuccino es un deleite para los sentidos. Con una base de espresso fuerte, leche vaporizada y una capa de espuma cremosa, es el equilibrio perfecto entre café y lácteos. Espolvoreado con un toque de cacao, es el capricho ideal para cualquier hora del día.</p>
            <footer className="blockquote-footer">
            Mateo Torres
            </footer>
            </blockquote>
        </Card.Body>
        </Card>
    </div>
  );
}

export default ContReseña;