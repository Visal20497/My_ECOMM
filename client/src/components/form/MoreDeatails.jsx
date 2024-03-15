import React from 'react'

function MoreDeatils({p_id,singlPageHandler}) {
  return (
    <button className="btn btn-primary "style={{fontSize:"14px"}} onClick={()=>{
        singlPageHandler(p_id)
    }}>
    More Details
  </button>
  )
}

export default MoreDeatils