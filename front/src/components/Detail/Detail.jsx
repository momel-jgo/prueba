import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Detail = () => {
    const [character, setCharacter] = useState({})
    const { detailID } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailID}`)
        .then((response) => response.json())
        .then((char)=>{
            if(char.name){
                setCharacter(char)
            }else{
                alert(`No hay personajes con ${detailID}`)
            }
        })
        .catch((err)=>{
            alert(`No hay personajes con ${detailID}`)
        })
        setCharacter({})
    }, [detailID])
    

    return (
    <div className=''>
    <button>
        <Link to='/home'>
            Home
        </Link>
    </button>
        <h1>{character?.name}</h1>
        <p>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        <p>{character?.origin?.name}</p>
        <img src={character.image} alt ={character.name}/>
    </div>
    )
}

export default Detail