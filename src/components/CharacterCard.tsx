import './CharacterCard.css'
import  { Link } from 'react-router-dom'

interface CharacterProps {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    originname: string
    originurl: string
    locationname: string
    locationurl: string
    image: string
    episode: []
    url: string
    created: string
}

export const CharacterCard = ({id, name, status, species, type, gender, originname, originurl, locationname,locationurl, episode, url, created}: CharacterProps) => {
    return(
        <div className='card'>
            <section className='group'>
                <div className='box'>
                    <em>Status:</em>
                    <p>{status}</p>
                </div>
                
                <div className='box'>
                    <em>Species:</em>
                    <p>{species}</p>
                </div>


                <div className='box'>
                    <em>Type:</em>
                    <p>{type}</p>
                </div>

                <div className='box'>
                    <em>Nome Origin:</em>
                    <p>{originname}</p>
                </div>
               
            </section>

            <section className='group'>

                <div className='box'>
                    <em>URL Origin: </em>
                    <a href={originurl}>Learn</a>
                </div>

                <div className='box'>
                    <em>Location Name: </em>
                    <p>{locationname}</p>
                </div>
                <div className='box'>
                    <em>Location URL: </em>
                    <a href={locationurl}>Learn</a>
                </div>
                
                <div className='box'>
                    <em>URL: </em>
                    <a href={url}>Learn</a>
                </div>

                <div className='box'>
                    <em>Created: </em>
                    <p>{created}</p>
                </div>
            </section>
            
        </div>  
    )
}