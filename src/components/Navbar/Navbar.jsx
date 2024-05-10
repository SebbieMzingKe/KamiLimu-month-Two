import './Navbar.css'
import logo from '../../assets/KamiLimu logo2.webp'
import menu from '../../assets/menui.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

function Navbar() {

  const [sticky, setSticky] = useState()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false):setMobileMenu(true )
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?``:'hide-mobile-view'}>
            <li><Link to='hero' smooth = 'true' offset={8} duration={500}>KamiLimu</Link></li>
            <li><Link to='BigPicture' smooth = 'true' offset={-260} duration={500}>Big Picture</Link></li>
            <li><Link to='session' smooth = 'true' offset={-150} duration={500}>Sessions</Link></li>
            <li><Link to='TakeHome' smooth = 'true' offset={-260} duration={500}>Key Takeaways</Link></li>
            <li><Link to='map-lessons' smooth = 'true' offset={-260} duration={500}>Map Lessons</Link></li>
            <li><Link to='contact' smooth = 'true' offset={-260} duration={500} className="btn">Contact Me</Link></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
