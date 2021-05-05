import React from 'react'
import Button from 'react-bootstrap/Button'
import './List.css'

const List = (props)=>{

    return(
        <>
        <div className='list'>
            
            <li>{props.text}</li>
            {/* on clicking the delete button the deleteItem function is called passing id as the argument */ }
            <Button id='deleteButton' type='button' onClick={()=>{

                return props.onSelect(props.id)
            }}>
            <i id='icon' className="fa fa-trash" aria-hidden='true' />
            </Button>
        </div> 
        </> 
    )
};

export default List;