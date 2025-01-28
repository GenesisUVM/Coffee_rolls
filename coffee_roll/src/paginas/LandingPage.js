import NavBar from '../componentes/Navbar'
import GaleriaImg from '../componentes/GaleriaImg'
import Footer from '../componentes/Footer'
import './paginas.css'

function LandingPage (){
  
    return(
        <div className='home'>
        <NavBar />
        <div className='contenedor'>
            <span>
                <h2>Cafeteria Coffee Rolls</h2>
                <p>Coffee Rolls está diseñado para que estés cómodo y feliz mientras disfrutas y compartes con tus seres queridos de los productos que tenemos para tí..!</p>
                <p>Disfruta de un momento agradable en nuestras sedes y endulza tu día. Trabajamos todos los días desde las 9:00am hasta las 9:30pm.¡No te lo puedes perder!</p>
                <h3>Ubicaciones</h3>
                <ul>
                    <li>Merida -Teleferico Mucumbarila</li>
                    <li>Caracas-CC Sambil Chacao</li>
                    <li>Caracas-CC sambil candelaria</li>
                    <li>La Guaira-Aeropuerto de Maiquetía </li>
                    <li>Caracas- CC Boleita center</li>
                </ul>
            </span>
            
            <GaleriaImg/>
        </div>
        < Footer />
        </div>
    )
};

export default LandingPage