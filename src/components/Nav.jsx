
import xSalonLogo from '../assets/logo-salon-white.png'

function Nav() {

  return (
   <nav class="flex flex-col justify-center items-center mt-4">
        <img src={xSalonLogo} alt="logo" className='w-80' />
        <ul className='flex flex-row gap-6'>
            <li><a className='text-white font-Inter font-semibold' href="/">Home</a></li>
            <li><a className='text-white font-Inter font-semibold'href="/">About</a></li>
            <li><a className='text-white font-Inter font-semibold' href="#">Contact</a></li>
        </ul>
   </nav>
  )
}

export default Nav
