"use client"
import { useEffect ,useState} from "react"

export default function Page() {

    const [users , setUsers] = useState([])

    throw new Error("NOOOOOOOOOOOOOO")
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [])

    return (
        <div>page in users
            {users.map(user=>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}
