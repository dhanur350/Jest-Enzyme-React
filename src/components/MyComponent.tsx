import { useState, useEffect } from "react"
const SecondComponent = () => {
    return <div>Hello</div>
}

const MyComponent = () => {
    const [click, setClick] = useState<boolean>(false);
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                console.log('Something went wrong!' + err);
            }
        }
        fetchAllUsers()
    }, [])
    function handleClick() {
        setClick(true);
    }
    console.log(users);

    return (
        <div>1
            <button onClick={handleClick}>Click here</button>
            {click && <div className="message">The button was clicked</div>}
            <SecondComponent />
            <>
                <h1>List of Users</h1>
                {users ? (
                    <ul>
                        {users.map(({ id, name }: any) => (
                            <li id={`li${id}`} key={id}>{name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No users found</p>
                )}
            </>
        </div>
    )
}

export default MyComponent