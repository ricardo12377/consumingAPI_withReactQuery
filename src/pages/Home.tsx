import React, {useEffect, useState} from 'react';
import './Home.css';
import {useQuery} from 'react-query'
import axios from 'axios'
import Endpoint from '../endpoints/RickyAndMorty'
import { useSelector, useDispatch } from "react-redux";
import { CharacterCard } from '../components/CharacterCard';
import {
  Link
} from "react-router-dom";

export interface userData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

function Home() {

  const [currentUserId, setCurrentUserId] = useState(1)
  const {data, isError, isLoading, isFetching} = useQuery(["users", currentUserId],() =>
      axios.get(Endpoint(currentUserId))
      .then((response) => response.data)
  )

  if(isError) return <p>Something is whrong....</p>

  if(!data || isLoading) return <p>Loading</p>

  return (
      <section className="App">
        <img src={data.image} />
        <p>
          {data.name}
        </p>

        <p>{data.gender}</p>

        <div className='buttons'>
          <button onClick={() => setCurrentUserId((prev) => prev - 1)}>Previous</button>
          <button  onClick={() => setCurrentUserId((prev) => prev + 1)}>Next</button>
        </div>

        
        {isFetching && <small>We are updating your data</small>}
        <CharacterCard
        id={data.id}
        name={data.name}
        gender={data.gender}
        status={data.status}
        species={data.species}
        type={data.type}
        originurl={data.origin.url}
        originname={data.origin.name}
        locationname={data.location.name}
        locationurl={data.location.url}
        image={data.image}
        episode={data.episode}
        url={data.url}
        created={data.created}
        />
        </section>
  );  
}

export default Home;
