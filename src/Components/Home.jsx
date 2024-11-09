import React, { useEffect } from 'react'

const Home = () => {
    
  async function getData() {
     const d= await axios.get();
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='home'>
      <h1>Home page</h1>
    </div>
  )
}

export default Home
