import { useState,useEffect } from 'react'
import UserName from './UserName'
import SearchBox from './searchBox'
import '../styles/Users.scss'

function Users (){
    const [users,setUsers] = useState([])
    const [filtered,setFiltered] = useState([])


    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://randomuser.me/api/?results=10')
            const data = await response.json()
            setUsers(data.results)
            setFiltered(data.results)
        }
        fetchData()
    },[])

    const filteredUser = (searchString)=>{
        const filtered = users.filter((user)=>(user.name.first).includes(searchString))
        setFiltered(filtered)
    }

    return(
        <div className="containerPrincipal">
            <SearchBox handleChange={filteredUser}/>
        <div className='User-Container'>
            {
                filteredUser.length == 0 ?
                <p>dsdsds</p> :
                    filtered.map(user=>{
                        return(
                            <UserName key={user.id} 
                            name={user.name.first}
                            email={user.picture.medium}
                            />
                        )
                    })
            }
        </div>
        </div>

    )
}

export default Users