import React from 'react'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useSearch from '../../hook/useSearch.js'



function Search() {
  let {search,setSearch}=useSearch()
  let navigation=useNavigate()


  // this is for the search
  function searchHandler(e){
    setSearch({...search,keyword:e.target.value})
    console.log(search)
  }

 // this is for the search submit Handler
  async function searchSubmitHandler(e){
    try {
         e.preventDefault()
      let {data}=await axios.get(`https://myecom-48cw.onrender.com/api/v1//search-product/${search.keyword}`)
      if(data.success){
        setSearch({...search,result:data.products})
        navigation('/search')
      }
      else{
         toast(data.message)
        return
      }
      
    } catch (error) {
      toast(error.message)
    }

  }

  return (
    <div>
      <nav className="navbar">
  <div className="container-fluid">
    <form className="d-flex" >
      <input className="form-control me-2"value={search.keyword} onChange={searchHandler} type="search" placeholder="Search..." aria-label="Search" />
      <button className="btn btn-outline-warning" onClick={searchSubmitHandler}>Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Search 