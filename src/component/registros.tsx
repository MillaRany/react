import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Registros = () => {


const [name, setName] = useState('')
const [password, setPassword] = useState('')
const dispattch = useDispatch()


const register = ()=>{
    dispattch({
      type: 'REGISTER', 
      payload:{
        id:(new Date).getTime(),
        name, password
      }
    })
  }

console.log({useState})
  
return (
  <form>
      <input type="email" name="email" value={name} placeholder='email' onChange={e => setName(e.target.value)}/>
      <input type="password" name="password" value={password} placeholder='senha' onChange={e => setName(e.target.value)}/>
      <input type="button" value="registrar" onClick={register}/>
  </form>
  )
}
export default Registros