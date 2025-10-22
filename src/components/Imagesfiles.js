import React from 'react'

function Imagesfiles({value}) {
    return (
    <div> 
        <div>
           <img  src={value.picture} alt='imag'/>
        </div>
    </div>
  )
}

export default Imagesfiles