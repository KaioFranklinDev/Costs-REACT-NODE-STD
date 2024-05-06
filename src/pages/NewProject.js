import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import ProjectForm from "../components/Project/ProjectForm"
export default function NewProject(){
    return ( 
        <>
            <Header/>
            <section className="mt-3">
                <h1 >Novo Projeto</h1>
                <ProjectForm />

            </section>
            <Footer/>
        </>
    )
}
