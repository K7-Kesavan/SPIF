import React from 'react'

import { Button, TextField } from '@material-ui/core'

const OnlyVideo = ({ setOpen, setOpenQA, setTitle }) => {
    return (
        <div className='only-video'>
            <div className='para-vdo' >
                <label>Upload the Video</label>
                <div className='file-input-vdo'>
                    <input id='slideVDO' accept="video/*" type="file" />
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

export default OnlyVideo
