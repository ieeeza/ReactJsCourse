import { useState } from "react"
import ComponentB from "./ComponentB"

function ComponentA() {

    const [user, setUser] = useState("César")

    return(<div className="box">
        <h1>ComponentA</h1>
        <h2>{`Ola ${user}`}</h2>
        <ComponentB user = {user}/>
    </div>)
}
export default ComponentA