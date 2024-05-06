import './Header.module.css'
import { Link } from 'react-router-dom'
function Header( ){
    return (
        <header>
            <div className="logo">
                <img src="../img/costs_logo.png" alt="Logo da Empresa" />
            </div>
            <nav>
                <ul>
                    <Link className='headerLinks' to='/home'>Home</Link>
                    <Link className='headerLinks' to='/company'>Company</Link>
                    <Link className='headerLinks' to='/contact'>Contact</Link>
                    <Link className='headerLinks' to='/newproject'>Novo Projeto</Link>
                    
                </ul>
            </nav>
            
        </header>
    )
}

export default Header