import React from 'react'
import { Button, TextField } from '@material-ui/core'

import './AddSlides.css'

import { useState } from 'react';
import Select from 'react-select'
import QuestionAnswer from './SlideComponents/QuestionAnswer';

const AddSLides = ({ setOpen, setOpenQA, setTitle }) => {

    
    
    const slideComponents = [
        { label : "Q/A", value : 1 },
        { label : "Para", value : 2 },
        { label : "ParaWithImage", value : 3 },
        { label : "Image", value : 4 },
        { label : "Video", value : 5 },
        { label : "Audio", value : 6 }
    ]
    
    const [ dropDownVal, setDropDownVal] = useState(  slideComponents.value )

    const handleChange = (e) =>{
        setDropDownVal(e.value);
     }


    const renderSlideContent = ()=>{

        

        switch (dropDownVal) 
        {
            case 1: return  <QuestionAnswer/> ;
                break;   
            default:
                break;
        }

    }

    



    return (
        <div className='row p-0'>
            <div className="col-12  content">
                <div className='slide-summary'>
                    <h3>Choose Your Slide</h3>
                    <Select className='select-slides' 
                            defaultValue="Select Slides"  
                            options={slideComponents} 
                            onChange={ handleChange } 
                    />
                    <h1> { dropDownVal } </h1>
                </div>

                { renderSlideContent() }

                <div className='tab-body-btns'>
                    <Button variant='contained' color='primary' onClick={() => { setOpen(false); setOpenQA(true); setTitle("Statement Manager") }}>
                        ADD
                    </Button>
                </div>
            </div>
        </div>
    )

    
}


export default AddSLides