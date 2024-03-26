import React from 'react'
import './Breadcrumb.css'
export const Breadcrumb = (props) => {
  const {product} = props;
    return (
    <div className="breadcrumb">
        Home &#62; Shop &#62; {product.category} &#62; {product.name}
    </div>
  )
}

export default Breadcrumb;
