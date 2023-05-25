import Nav from '../components/Nav'
import '../index.css'
import Ztext from 'react-ztext'
import mountainWhite from '../assets/TEDxUIUC_Mountain_White.png'
import GalleryWall from '../components/GalleryWall'
import Fade from 'react-reveal/Fade';


function Home() {
    return(
      
      <div className="overflow-hidden">
        <Fade distance='10%'>
        <div className='h-screen'>

          <div className='flex flex-col justify-center items-center text-center min-h-[80vh]'>
            <img class="ml-8"src={mountainWhite}>
            </img>
            <Ztext
              depth='1rem'
              direction='both'
              event='pointer'
              eventRotation='30deg'
              eventDirection='default'
              fade={false}
              layers={10}
              perspective='600px'
              style={{
                fontSize: '5rem',
                color: '#fff',
                lineHeight: '1',
              }}
              >
              <span className='flex justify-center font-Gatwick'>DARE TO</span>
            </Ztext>
            <h1 className='text-white font-Inter font-bold text-xl'>
              April 19th, 2023 <br/> Illini Union Room C
            </h1>
            {/* <h1 className='animate-char'>
              inspire
            </h1> */}
          </div>
        </div>
        <div id="gallery-section" className='mx-10 mb-10'>
          <GalleryWall />
        </div>
        </Fade>
      </div>
    )
}
export default Home