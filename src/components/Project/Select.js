export default function Select({text,name,options, hadleOnchange, value}){
    return(
       <div  >
            <label htmlFor={name}  > {text}:</label>
            <select name={name} id={name} className="form-select" >
                <option> selecione...</option>
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>

       </div>
    )
}