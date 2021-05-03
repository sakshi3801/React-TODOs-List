import React from 'react'
import Button from 'react-bootstrap/Button'
import './List.css'

const List = (props)=>{
    
    // const fun2 = ()=>{

    //     console.log(props.id)
    // }

    return(
        <>
        <div className='list'>
            
            <li>{props.text}</li>
            <Button variant="danger" className='todoButton' type='button' onClick={()=>{

                return props.onSelect(props.id)
            }}>
            <i className="fa fa-trash" aria-hidden='true' />
            </Button>
        </div> 
        </> 
    )
};

export default List;