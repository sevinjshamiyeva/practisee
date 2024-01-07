import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button, Flex } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBasket,increment,decrement } from '../redux/slice/basketSlice';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid({element}) {
    const basket = useSelector((state) => state.baskets.basket)
    
    const dispatch = useDispatch()
  return (
    <Paper 
    style={{border:"2px solid black",marginBottom:"20px"}}
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} >
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
                {element.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {element.price} x {element.quantity}
              </Typography>
              <button style={{borderRadius:"50%",backgroundColor:"red",color:"white",border:"none",cursor:"pointer",width:"20px",height:"20px"}}
              onClick={()=>{
                dispatch(decrement(element))
              }}>-</button>
              <Typography variant="body2" color="text.secondary">
               {element.quantity}
              </Typography>
              <button style={{borderRadius:"50%",backgroundColor:"green",color:"white",border:"none",cursor:"pointer",width:"20px",height:"20px"}}onClick={()=>{
                dispatch(increment(element))
              }}>+</button>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
              <Button type="primary" danger onClick={()=>{
                dispatch(deleteBasket(element))
              }}>
      Delete
    </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
             ${element.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}