import Navbar from '../componentes/Navbar'
import GaleriaImg from '../componentes/GaleriaImg'

import './paginas.css'

function LandingPage (){
  
    return(
        <>
        <Navbar />
        <div className='contenedor'>
            <GaleriaImg/>
        </div>
        </>
    )
};

export default LandingPage