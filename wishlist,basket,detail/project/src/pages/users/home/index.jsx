import React from 'react'
import Cardd from '../../../components/card'
import { getAllproducts } from '../../../redux/slice/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

function Home() {
  const product = useSelector((state) => state.products.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllproducts());
  }, [dispatch]);
  
  return (
    <>
    <div style={{display:'flex',gap:"10px"}}>
    {
      product && product.map((elem,id)=>{
       return <Cardd key={id} elem={elem}/>
      })
    }

    </div>
    
   
    </>
  )
}

export default Home