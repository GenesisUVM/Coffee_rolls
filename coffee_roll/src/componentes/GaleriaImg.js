import React from 'react';
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img7 from '../img/7.png'
import img10 from '../img/10.png'
import img11 from '../img/11.png'
import './Galeria.css'


function GaleriaImg(){
   return(
    <>
    <ul className='contenedorGaleria'>
        <li>
            <img src={img1} className='imgGaleria' alt='rollos salados'></img>
            <div className='content'>
                <span>
                    <h3>Rollos salados</h3>
                    <p>Disfruta de un buen snack este fin de semana. Mini Rolls Salados, rellenos de jamón ahumado, Tocineta y Queso Crema</p>
                </span>
            </div>
        </li>
        <li>
            <img src={img2} className='imgGaleria' alt='rollos oreo'></img>
            <div className='content'>
                <span>
                    <h3>Rollos de Oreo</h3>
                    <p> BIG ROLLS edición OREO</p>
                </span>
            </div>
        </li>
        <li>
            <img src={img3} className='imgGaleria' alt='Pan de Jamon'></img>
            <div className='content'>
                <span>
                    <h3>Pan de Jamon</h3>
                    <p>Volvió ese delicioso olor característico de Navidad ya a Coffee Rolls. Panes de Jamón Tradicional o con Queso Crema y masa semi hojaldrada. Disponibles todos los días</p>
                </span>
            </div>
        </li>
        <li>
            <img src={img4} className='imgGaleria' alt='snack-pack'></img>
            <div className='content'>
                <span>
                    <h3>Snack-pack</h3> 
                    <p>¿Ya probaste nuestro snack-pack? Perfecto para picar mientras pasas un buen rato con tus amigos. Combina Tus Antojos!</p>
                </span>
            </div>
        </li>
        </ul>
        <ul className='contenedorGaleria'>
        <li>
            <img src={img5} className='imgGaleria' alt='Mini Rolls Salados'></img>
            <div className='content'>
                <span>
                    <h3>Mini Rolls Salados</h3>
                    <p>Disfruta de un buen snack este fin de semana. Mini Rolls Salados, rellenos de jamón ahumado, Tocineta y Queso Crema</p>
                </span>
            </div>
        </li><li>
            <img src={img7} className='imgGaleria' alt='Sandwiches'></img>
            <div className='content'>
                <span>
                    <h3>Sandwiches</h3>
                    <p>¡Tenemos disponible para ti los más ricos sándwiches en forma de media luna para tus desayunos o cenas!</p>
                </span>
            </div>
        </li><li>
            <img src={img10} className='imgGaleria' alt='Torta de Zanahoria'></img>
            <div className='content'>
                <span>
                    <h3>Torta de Zanahoria</h3>
                    <p>¡Volvió la favorita de muchos! Nuestra deliciosa Torta de Zanahoria con Nueces y Pasas. ¿Qué esperas para venir y probarla? ¡Te esperamos!</p>
                </span>
            </div>
        </li><li>
            <img src={img11} className='imgGaleria' alt='Bebidas Frias'></img>
            <div className='content'>
                <span>
                    <h3>Bebidas Frias</h3>
                    <p>Para esos días de calor, refréscate con las más deliciosas bebidas frías que tenemos para ti. TODOS LOS DÍAS. Combina Tus Antojos..!</p>
                </span>
            </div>
        </li>

    </ul>
    </>
    
   )
     
};

export default GaleriaImg;