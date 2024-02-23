import './App.css'
import { useState } from 'react'
const Calc=()=>{

    const [value,setValue]=useState(0)
    const [value1,setValue1]=useState(0)
    const [operator,setOperator]=useState('')

    const handleValue=(e)=>{
        if(value===0){
            setValue((value)=> e.target.innerText)
        } else{
            setValue(value+e.target.innerText)
        } if (e.target.innerText==='AC'){
            setValue((value)=>0)
        } if (e.target.innerText==='DEL'){
            setValue(value.slice(0,-1))
        }
    }

    const handleOperator=(e)=>{
        setValue1(value)
        setValue('')
        setOperator((value)=>e.target.innerText)

    }

    const handleResult=()=>{
        switch(operator){
            case '/':
                setValue(parseFloat(value1)/parseFloat(value))
            break;
            case '+':
                setValue(parseFloat(value1)+parseFloat(value))
            break;
            case '-':
                setValue(parseFloat(value1)-parseFloat(value))
            break
            case 'X':
                setValue(parseFloat(value1)*parseFloat(value))
            break
            case '%':
                setValue(parseFloat((value1)/100)*parseFloat(value))

        }
        
    }
    return(
        <div className=" h-screen bg-black flex justify-center items-center">
            <div className='w-[500px] h-[600px] bg-white rounded-lg p-5 '>
                <div className='flex justify-end  text-3xl h-16'>{value}</div>
                <div className='flex w-100 gap-4 flex-wrap justify-center'>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-200 text-black rounded-full'>AC</button>
                    <button onClick={handleValue}className='font-bold w-20 h-20 bg-gray-200 text-black rounded-full'>DEL</button>
                    <button onClick={handleOperator} className='font-bold w-20 h-20 bg-gray-200 text-black rounded-full'>%</button>
                    <button onClick={handleOperator} className='font-bold w-20 h-20 bg-orange-500 text-black rounded-full'>/</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>7</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>8</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>9</button>
                    <button onClick={handleOperator} className='font-bold w-20 h-20 bg-orange-500 text-black rounded-full'>X</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>4</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>5</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>6</button>
                    <button onClick={handleOperator} className='font-bold w-20 h-20 bg-orange-500 text-black rounded-full'>+</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>1</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>2</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>3</button>
                    <button onClick={handleOperator} className='font-bold w-20 h-20 bg-orange-500 text-black rounded-full'>-</button>
                    <button onClick={handleValue} className='font-bold w-20 h-20 bg-gray-600 text-black rounded-full'>0</button>
                    <button onClick={handleResult} className='font-bold w-20 h-20 bg-orange-500 text-black rounded-full'>=</button>
                </div>
            </div>
            

        </div>
        
    )
}

export default Calc