import React, { useState } from 'react'
import './Input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'
import Card from 'react-bootstrap/Card'

const Input = ()=>{

    const [item,setItem] = useState('');
    const [listItem ,setListItem] = useState([]);
    const fun = (e)=>{
        setItem(e.target.value)
    }

    const fun1 = (e)=>{

        if(item === '')
        return

        e.preventDefault();
        setListItem((oldItems)=>{
            
            return [...oldItems,item]
            
        });

        setItem('')
    }

    const fun2 = (id)=>{

       
        console.log('deleted')

        setListItem((oldItems)=>{

            return oldItems.filter((arrElem, index)=>{
                
                return index!== id;
            })
        })
    }
    return(
        
        <div className='input'>

        <form>
    <input type='text' placeholder='Enter your item' className='todoInput' onChange={fun} value={item}></input>
    

    {/* <Button type='button' onClick={fun1} className='addButton'> */}
            {/* <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> */}
            <button id='addButton' onClick={fun1} type="button" className="btn btn-primary ">
            Add
            </button>
    {/* </Button> */}

    
    <ol>
        
        {listItem.map((itemVal,index)=>{

            return <List
            key={index} 
            text = {itemVal}
            id = {index}
            onSelect={fun2}
            />
            
        })}

    </ol>

</form>
  
    </div>
    )
};

export default Input;

