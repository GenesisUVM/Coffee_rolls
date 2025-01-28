import Footer from '../componentes/Footer'
import FormPedido from '../componentes/FormPedido'
import NavBar from '../componentes/Navbar'
import './paginas.css'

function Promociones (){
    return(
        <div className='promociones'>
        <NavBar />
        < FormPedido />
        <Footer />
        </div>
    )
};

export default Promociones