import { useContext, } from "react"
import  {categoryContext}  from "../context/CategoryContext.js"

 
function useCategory() {
  
 return useContext(categoryContext)
}

export default useCategory