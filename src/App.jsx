import './App.css'
import { useState } from 'react'

const App=()=>{
  const[value,setValue]=useState('')
  return(
    <div className="container">
      <div className="calc">
        <form action=''>
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div className='buttons'>
            <input className='function' type="button" value="C" onClick={e => setValue('')} />
            <input type="button" className='function' value="DEL" onClick={e => setValue(value.slice(0,-1))}  />
            <input type="button" className='calculation' value="."  onClick={e => setValue(value + e.target.value)}/>
            <input type="button" className='calculation' value="/"  onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div className='buttons' >
            <input type="button" className='number' value='7' onClick={e => setValue(value + e.target.value)}/>
            <input type="button" className='number' value='8' onClick={e => setValue(value + e.target.value)} />
            <input type="button" className='number' value="9" onClick={e => setValue(value + e.target.value)} />
            <input type="button" className='calculation' value='X' onClick={e => setValue(value + '*')} />
          </div>
          <div className='buttons'>
            <input type="button" className='number' value='4' onClick={e => setValue(value + e.target.value)} />
            <input type="button" className='number' value='5' onClick={e => setValue(value + e.target.value)} />
            <input type="button" className='number' value='6' onClick={e => setValue(value + e.target.value)}/>
            <input type="button" className='calculation' value='+' onClick={e => setValue(value + e.target.value)} />
          </div>
          <div className='buttons'>
            <input type="button" className='number' value='1' onClick={e => setValue(value + e.target.value)} />
            <input type="button" className='number' value='2' onClick={e => setValue(value + e.target.value)} />
            <input type="button" className='number' value='3' onClick={e => setValue(value + e.target.value)}/>
            <input type="button" className='calculation' value='-' onClick={e => setValue(value + e.target.value)} />
          </div>
          <div className='buttons'>
          <input type="button" className='calculation' value='%' onClick={e => setValue(value + '/100')} />
            <input type="button" className='number' value='0' onClick={e => setValue(value + e.target.value)} />
            <input  type="button" value='=' className='equal' onClick={e => setValue(eval(value))}/>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default App