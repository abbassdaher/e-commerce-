import React from 'react'
import laptops from "../../images/laptops.png";


function SaleSection() {
  return (
    <div className="soldArea my-4  d-flex justify-content-center">
          <img className="" src={laptops} alt="laptops"></img>
            <span className="align-content-center  soldAreaText">
              Sale up to 80 ! off laptops
            </span>
          </div>
  )
}

export default SaleSection
