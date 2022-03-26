import React, { useEffect } from "react";
import Tmbd from "./Tmbd"

useEffect(()=> {
  const loadAll = async () => {
    let list = await Tmbd.getHomeList()
    console.log(list);
  }
  loadAll()
}, [])

export default () => {
  return(
    <div>
      <h1>Olá Mundo</h1>
    </div>
  )
} 