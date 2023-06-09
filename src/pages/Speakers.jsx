import '../index.css'
import Deepak from '../assets/deepak.JPG'
import Shivam from '../assets/shivam.jpeg'
import Pooja from '../assets/pooja.png'
import Nithya from '../assets/nithya.jpg'
import Lorena from '../assets/lorena.png'
import Jasmine from '../assets/jasmine.jpg'
import DareToSpeakers from '../assets/dareto_speakers.png'
function Speakers() {
    // const SpeakerMotto = [
    //     { motto: "Motto 1" },
    //     { motto: "Motto 2" },
    //     { motto: "Motto 3" },
    //     { motto: "Motto 4" },
    //     { motto: "Motto 5" },
    // ]
    // const [hover, setHover] = useState(false);
    // const onHover = () => {
    //     setHover(!hover)
    // };
    
    return(
        <>
            <section className='mb-10'>
                <div className='mx-20 lg:mx-80 mb-40\'>
                    <img src={DareToSpeakers}></img>
                </div>
                <div>
                    <h1 className='text-white text-center text-4xl font-bold font-Inter'>INSPIRE</h1>
                </div>
            </section>
            <section id="speakers" className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center mx-10'>

                <div className=''>
                    <img className="w-80 rounded-full"src={Deepak} ></img>
                </div>
                <div className=''>
                    <img className="w-80 rounded-full"src={Shivam}></img>
                </div>
                <div className=''>
                    <img className="w-80 h-80 object-cover rounded-full"src={Pooja}></img>
                </div>
                <div className=''>
                    <img className="w-80 h-80 object-cover rounded-full"src={Nithya}></img>
                </div>
                <div className=''>
                    <img className="w-80 h-80 object-cover rounded-full"src={Lorena}></img>
                </div>
                <div className=''>
                    <img className="w-80 h-80 object-cover rounded-full"src={Jasmine}></img>
                </div>
            </section>
        </>
    )
}

export default Speakers