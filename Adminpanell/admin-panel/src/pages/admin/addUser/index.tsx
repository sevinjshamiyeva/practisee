import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'

type Props = {}

function AddUser({}: Props) {
  return (
    <>
    <Header style={{ color:"white", padding: 0,background: "rgb(2,0,36)",background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" ,display:"flex", justifyContent:'space-between'}}>
 <Link to="/" style={{color:"white",fontSize:"20px"}}>Admin Panel</Link>
    </Header>
    </>
  )
}

export default AddUser