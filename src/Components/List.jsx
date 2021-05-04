import React from 'react'
import Button from 'react-bootstrap/Button'
import './List.css'

const List = (props)=>{
    


    return(
        <>
        <div className='list'>
            
            <li>{props.text}</li>
            <Button id='deleteButton' type='button' onClick={()=>{

                return props.onSelect(props.id)
            }}>
            <i className="fa fa-trash" aria-hidden='true' />
            </Button>
        </div> 
        </> 
    )
};

export default List;