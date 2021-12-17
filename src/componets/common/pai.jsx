import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import _ from "lodash"
import PropTypes from "prop-types"

function pai(props) {
    const {itemsCount,pageSize,currentPage,onPageChange}=props
    const pagesCount=Math.ceil(itemsCount/pageSize )
    
    if(pagesCount===1) return null
    
    const pages =_.range(1,pagesCount+1)
    
    return (
        <nav aria-label="Page navigation example">
  <ul class="pagination">
      {
          pages.map(page=>(
            <li key={page } className={page===currentPage?"page-item active":"page-item"}>
                <a className="page-link" style={{cursor:"pointer"}} onClick={()=>onPageChange(page)}>{page}</a></li>
  
          ))
      }
  
    
  </ul>
</nav>
    )
}
pai.propTypes={
    itemsCount:PropTypes.number.isRequired,
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired,
    onPageChange:PropTypes.func.isRequired
}
export default pai
