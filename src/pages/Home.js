import  styles from './Home.module.css'
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import imgSavings from '../public/img/savings.svg'
import { Link } from 'react-router-dom'


function Home(){
    return (
        
        <>
            <Header />
            <section className={styles.home_container}>
                <div>
                    <h1>Bem vindo ao <span className={styles.spanHome}>Costs</span>!</h1>
                    <p>Seu gerenciador de projetos</p>
                    <button className='btn btn-warning' ><Link to={'/newproject'}>Crie seu projeto</Link></button>
                </div>
                <img src={imgSavings} alt='mascote img.' />
                
                
                
            </section>
            <Footer />

        </>
    )
}
export default Home

