import Footer from '../componentes/Footer'
import FormPedido from '../componentes/FormPedido'
import NavBar from '../componentes/Navbar'
import ContentBotton from "../componentes/ContenidoMenuB";
import './paginas.css'

import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img7 from '../img/7.jpg'
import img10 from '../img/10.jpg'
import img11 from '../img/11.png'

let text1 = 'Rollos salado'
    let text2 = 'Rollos de Oreo'
    let text3 = 'Pan de Jamon'
    let text4 = 'Snack-pack'
    let text5 = 'Mini Rolls Salados'
    let text7 = 'Sandwiches'
    let text10 = 'Torta de Zanahoria'
    let text11 = 'Bebidas Frias'

function Promociones (){
    
    return(
        <div className='promociones'>
        <NavBar />
        <div className='container, contConstum'>
            <h2 className='titulo'>Menu</h2>
        <div className='row'>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img1} text={text1} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img2} text={text2} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img3} text={text3} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img4} text={text4} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img5} text={text5} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img7} text={text7} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img10} text={text10} />
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <ContentBotton img={img11} text={text11} />
                    </div>
                </div>
        </div>
        <FormPedido />
        <Footer />
        </div>
    )
};

export default Promociones