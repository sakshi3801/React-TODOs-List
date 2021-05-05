import React, { useState } from 'react'
import './Input.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'

const Input = ()=>{

    /* Below are the two hooks used to accomplish the TODOs list */
    /* item stores the value of the current item that the user typed in the input box. setItem is responsible for changing the state of item as the input changes */
    /* listItem is the actual array of items that are there in the TODOs list. Hence it's initially empty*/
    const [item,setItem] = useState('');
    const [listItem ,setListItem] = useState([]);

    /* function to keep changing the state of item. We use it with onChange in input box, so actually stores the final val of current input */
    const newItem = (e)=>{
        setItem(e.target.value)
    }

    //* function used to add an item to the list upon clicking the add button *//
    const addItem = (e)=>{

        /* if the button is clicked without entering input return */
        if(item === '')
        return

        /* for preventing the form to get submitted and hence avoiding the page from getting refreshed */
        e.preventDefault();

        /* changing the state of the array of items */
        setListItem((oldItems)=>{
            
            /* ...oldItems is a way to write all the the previous array items. [...oldItems,item] is old array with newly added item */
            return [...oldItems,item]
            
        });

        /* after modifying the list clear the text in input box */
        setItem('')
    }

    //* function to delete an item upon clicking the delete button. id is the index of the item that has to be deleted *//
    const deleteItem = (id)=>{

        /* modifying the list */
        setListItem((oldItems)=>{

            /* applying filter function to filter the elements whose index isn't equal to id */ 
            return oldItems.filter((arrElem, index)=>{
                
                return index!== id;
            })
        })
    }
    return(
    /* actual input box, add button, further having List component comprising of the list of the elements along with delete button */    
    <div className='input'>

        <form>
            <input type='text' placeholder='Enter your item' className='todoInput' onChange={newItem} value={item}></input>
    
            <button id='addButton' onClick={addItem} type="button" className="btn btn-primary ">
            Add
            </button>

    
            <ol>

            {/* traversing through the array listItem in order to fetch each of it's elements */ }
            {listItem.map((itemVal,index)=>{
            
            /* calling the List component*/
            return <List
            key={index} 
            text = {itemVal}
            id = {index}
            onSelect={deleteItem}
            />
            
            })}

            </ol>

        </form>
  
    </div>

    )
};

export default Input;

