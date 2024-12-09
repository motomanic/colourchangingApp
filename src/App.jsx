import { useState } from 'react'
import './App.css'

function App() {
  
  const [color,setColor] = useState('white')

  const bgColorChanger = (color)=>{
    setColor(color)
  }
    return (
      <>
        <div style={{minHeight:'100vh',backgroundColor:color}}>
          
            <h2 className='text-center mb-4 text-dark fw-bolder' style={{fontSize:'1.8rem'}}>Color Changing App</h2>
            <img className='border ' src="" alt="" />
           <div className='d-flex justify-content-around' >
            
              <button className='btn btn-danger text-white' onClick={()=>bgColorChanger('red')}>RED</button>
              <button className='btn btn-success text-white'onClick={()=>bgColorChanger('green')}>GREEN</button>
              <button className='btn btn-info text-white'onClick={()=>bgColorChanger('blue')}>BLUE</button>
              <button className='btn btn-dark text-white'onClick={()=>bgColorChanger('black')}>BLACK</button>
              <button className='btn btn-warning text-white'onClick={()=>bgColorChanger('yellow')}>Yellow</button>

              
           </div>
          </div>
  
       
      </>
    )
  }
 

export default App