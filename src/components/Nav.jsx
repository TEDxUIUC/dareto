
import xSalonLogo from '../assets/logo-salon-white.png'
import { Link } from 'react-router-dom'

function Nav() {

  return (
   <nav class="flex flex-col justify-center items-center mt-4">
        <img src={xSalonLogo} alt="logo" className='w-[620px]' />
        <ul className='flex flex-row gap-6'>
            <Link className='text-white font-Inter font-semibold' to="/">Home </Link>
            <Link className='text-white font-Inter font-semibold' to="/speakers">Speakers</Link>
            <Link className='text-white font-Inter font-semibold' to="/about">About</Link>
        </ul>
   </nav>
  )
}

export default Nav;
