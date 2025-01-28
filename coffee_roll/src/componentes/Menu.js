import ContentBotton from "./ContenidoMenuB";
import ContentUp from "./ContenidoMenuU";


let text1 = 'Rollos salado'
let text2 = 'Rollos de Oreo'
let text3 = 'Pan de Jamon'
let text4 = 'Snack-pack'
let text5 = 'Mini Rolls Salados'
let text7 = 'Sandwiches'
let text10 = 'Torta de Zanahoria'
let text11 = 'Bebidas Frias'


function Menu(img1,img2,img3,img4,img5,img7,img10,img11){
    return(
        <>
        <ContentUp img={img1} text={text1}/>
        <ContentBotton img={img2} text={text2} />
        <ContentUp img={img3} text={text3}/>
        <ContentBotton img={img4} text={text4} />
        <ContentUp img={img5} text={text5}/>
        <ContentUp img={img7} text={text7}/>
        <ContentBotton img={img10} text={text10} />
        <ContentUp img={img11} text={text11}/>
        </>
    )
};

export default Menu;