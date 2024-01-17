import {useEffect, useState} from "react";
import axios from "axios";

export const FindUser = () => {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(users)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
    }, [])

    useEffect(() => {
        setFilteredUsers(users.filter(user => user.name.includes(query)))
    }, [query, users])

    return (
        <section>
            <input onChange={(e) => setQuery(e.target.value)}/>
            {
                filteredUsers.map(user => <div>{user.name}</div>)
            }
        </section>
    );
};