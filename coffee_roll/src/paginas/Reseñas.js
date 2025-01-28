import Footer from '../componentes/Footer'
import FormContacto from '../componentes/FormContacto'
import FormReseña from '../componentes/FormReseña'
import NavBar from '../componentes/Navbar'
import './paginas.css'

function Reseñas (){
    return(
        <div className='reseñas'>
        <NavBar />
        <FormReseña />
        <FormContacto/>
        <Footer/>
        </div>
    )
};

export default Reseñas