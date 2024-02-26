import { useContext } from "react"
import {productContext} from './../context/ProductContext.js'



let  useProduct=()=> {
  return  useContext(productContext)
}


export default useProduct