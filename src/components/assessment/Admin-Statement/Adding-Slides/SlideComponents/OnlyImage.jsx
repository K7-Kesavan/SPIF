import React from 'react'

import { Button, TextField } from '@material-ui/core'

const OnlyImage = ({ setOpen, setOpenQA, setTitle }) => {
    return (
        <div className='only-image'>
            <div className='para-img' >
                <label>Upload the Image</label>
                <div className='file-input-img'>
                    <input id='slideIMG' accept=" image/*" type="file" />
                </div>
            </div>
            <hr />
            <div className='tab-body-btns'>
                <Button variant='contained' color='primary' onClick={() => { setOpen(false); setOpenQA(true); setTitle("Statement Manager") }}>
                    ADD
                </Button>
            </div>
        </div>
    )
}

export default OnlyImage
