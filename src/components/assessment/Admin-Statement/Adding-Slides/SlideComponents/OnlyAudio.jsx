import React from 'react'

import { Button, TextField } from '@material-ui/core'

const OnlyAudio = ({ setOpen, setOpenQA, setTitle }) => {
    return (
        <div className='only-audio'>
            <div className='para-vdo' >
                <label>Upload the audio</label>
                <div className='file-input-vdo'>
                    <input id='slideVDO' accept="audio/*" type="file" />
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

export default OnlyAudio
