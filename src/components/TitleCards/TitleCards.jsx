/* eslint-disable react/prop-types */
import './TitleCards.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category, page }) => {
    const [apiData, setApiData] = useState([]);
    const cardRef = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWVjODJlNDRjOTdhOTBmM2NmNGRmZmU5Y2U5YmMyNiIsIm5iZiI6MTczMDYyODQ0OC42MDAzNjksInN1YiI6IjY3Mjc0YTFkNWFmMjllODg1NTNhZmIxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2uTx-2ORmcWUoB9ZtG0M8Er3afXXKeO6ZiDSxjn-_eo'
        }
    };


    const handleWheel = (event) => {
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY;
    }
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=${page ? page : 1}`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));

        cardRef.current.addEventListener('wheel', handleWheel);
    }, [])


    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitleCards