import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField } from '@material-ui/core'


const QuestionAnswer = () => {
  return (
    <div>
        <div>
                <h5> Statement </h5>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder='Enter Your Statement'
                    style={{ width: '100%', height: "150px", padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                />
            </div>
            <hr />
            <div>
                <h5> Options </h5>
                <div className='options-container'>

                    <TextareaAutosize
                        maxRows={4}
                        aria-label="maximum height"
                        placeholder='Enter Your Option'
                        style={{ width: '100%', padding: "10px", outline: "none", border: "1px solid rgba(55, 59, 59, 0.2)", borderRadius: "5px" }}
                    />
                    <div>
                        <Button className='option-add-btn' style={{ width: "150px", height: "40px" }} variant="outlined" color='success'>
                            <IconButton>
                                <AddIcon fontSize='small' style={{ color: "gray" }} />
                            </IconButton>
                            Add Option
                        </Button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default QuestionAnswer