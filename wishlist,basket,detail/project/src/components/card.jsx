import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import {HeartOutlined} from "@ant-design/icons"
import { Button, Flex } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { addBasket } from '../redux/slice/basketSlice';

const Cardd = ({elem}) => {
  const basket = useSelector((state) => state.baskets.basket)
  const dispatch = useDispatch()
  console.log(basket)

return(
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={elem.name} description={elem.count} />
    <HeartOutlined style={{fontSize:"30px"}} />
    <Button style={{marginLeft:"10px"}} type="primary" ghost>
     Detail
    </Button>
    <Button style={{marginLeft:"10px"}} type="primary" ghost onClick={()=>{
      dispatch(addBasket({...elem,quantity:1}))
    }}>
     add
    </Button>
  </Card>)
};
export default Cardd;