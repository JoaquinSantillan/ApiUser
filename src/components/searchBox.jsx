import'../styles/SearchBox.scss'

function SearchBox({handleChange}){
    const handleOnChange = (e)=>{
        handleChange(e.target.value)
    }

    return(
        <div className="input-container">
            <input type="text" onChange={(e)=>handleOnChange(e)}/>
        </div>
    )
}

export default SearchBox
