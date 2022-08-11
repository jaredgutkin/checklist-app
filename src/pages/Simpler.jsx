import { useState, useEffect } from 'react'

function Simpler() {
    const [name, setName] = useState([])

    useEffect(() => {
        names()
    }, [])

    const names = async () => {
        const response = await fetch('https://surprise-5-api.vercel.app/api/minibrand');

        setName(await response.json())
    }
  return (
    <>
    <h1>Name is Written Here</h1>
    <ol>
        {name.map((data) => {
            return(
                <li key={data.itemName}>{data.itemName}</li>
            )
        })}
    </ol>
    </>
  )
}

export default Simpler