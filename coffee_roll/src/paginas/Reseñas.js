import ContReseña from '../componentes/ContReseña'
import Footer from '../componentes/Footer'
import FormReseña from '../componentes/FormReseña'
import NavBar from '../componentes/Navbar'
import './paginas.css'

function Reseñas (){
    return(
        <div className='reseñas'>
        <NavBar />
        <ContReseña/>
        <FormReseña />
        <Footer/>
        </div>
    )
};

export default Reseñas