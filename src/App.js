import React, { useEffect, useState } from "react";
import Tmbd from "./Tmbd"

import "./App.css"

import MovieRow from "./components/MovieRow";
import FeuturedMovie from "./components/FeuturedMovie";


export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmbd.getHomeList()
      setMovieList(list)

      let originals = list.filter(i=>i.slug === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmbd.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)

    }
    loadAll()
  },[])

  return(
    <div className="page">

      {featuredData && 
        <FeuturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title } items={item.items} />     
        ))}
      </section>
    </div>
  )
} 