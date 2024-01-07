import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cardd from '../../../components/card'
import ComplexGrid from '../../../components/card2'

function Basket() {
  const basket = useSelector((state) => state.baskets.basket)
  const totals = useSelector((state) => state.baskets.total)
  console.log()
  return (
    <><div style={{width:"200px",height:"100px",border:"1px solid black",marginBottom:"20px"}}>

      total{totals}$
    </div>
    <div>
    {
      basket && basket.map((elem,id)=>{
        return(
          <ComplexGrid key={id} element={elem}/>
        )
      })
    }
  </div>
  
  </>
    

  )
}

export default Basket