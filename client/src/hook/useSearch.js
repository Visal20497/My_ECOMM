import { useContext } from "react"
import { searchcontext}  from "../context/SearchContext.js"
let useSearch=()=> {
   return  useContext(searchcontext)
}

export default useSearch