import '../index.css'
import Deepak from '../assets/deepak.JPG'
import Shivam from '../assets/shivam.jpeg'
import Pooja from '../assets/pooja.png'
import Nithya from '../assets/nithya.jpg'
import Lorena from '../assets/lorena.png'
import Jasmine from '../assets/jasmine.jpg'
function Speakers() {
    return(
        <>
            <section className='mx-auto overflow-hidden'>

                <div className=''>
                    <img src={Deepak}></img>
                </div>
                <div className=''>
                    <img src={Shivam}></img>
                </div>
                <div className=''>
                    <img src={Pooja}></img>
                </div>
                <div className=''>
                    <img src={Nithya}></img>
                </div>
                <div className=''>
                    <img src={Lorena}></img>
                </div>
                <div className=''>
                    <img src={Jasmine}></img>
                </div>
            </section>
        </>
    )
}

export default Speakers