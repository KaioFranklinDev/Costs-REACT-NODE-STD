
import { useEffect, useState } from "react";
import Select from "./Select";

export default function ProjectForm(){

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers:{
                "Content-Yype" : "application/json"
            }
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((err)=> console.log(err)) 
    },[])

    return(
        <form className="col-6 col-lg-4 mx-auto mt-5">
                <div className="mb-3 ">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nome do Projeto</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nome do projeto..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Orçamento</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="R$..." />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col p-0">
                            <label htmlFor="inputState" className="form-label ">Tipo do projeto</label>
                            <Select 
                                name="category_id"
                                text="Selecione a categoria"
                                options = {categories}
                                
                            />
                            
                        </div>
                        <div className="col text-end mt-5">
                            <button className="btn btn-primary ">Criar</button>
                        </div>
                    </div>      
                </div>
                
        </form>
    )
}