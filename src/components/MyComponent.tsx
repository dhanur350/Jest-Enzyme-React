import { useState } from "react"
const SecondComponent = () => {
    return <div>Hello</div>
}

const MyComponent = () => {
    const [click, setClick] = useState<boolean>(false);
    function handleClick() {
        setClick(true);
    }
    return (
        <div>1
            <button onClick={handleClick}>Click here</button>
            {click && <div className="message">The button was clicked</div>}
            <SecondComponent />
        </div>
    )
}

export default MyComponent