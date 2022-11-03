import React from 'react'
import { useState } from 'react'
import './tabs.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@material-ui/core'

const Tabs = ({ questions }) => {

    let [currentTab, setCurrentTab] = useState('1');

    let handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return (
        <div className='container tabTypeQuestion'>
            <div className="tab">
                {
                    questions.map((tab, i) =>
                        <button
                            key={i} id={tab.sStatementID}
                            disabled={currentTab === `${tab.sStatementID}`}
                            onClick={handleTabClick}
                        >
                            Slide <span> {i + 1} </span>
                        </button>
                    )
                }
            </div>
            <div className="content">
                {
                    questions.map((tab, i) =>
                        <div key={i} >
                            {
                                currentTab === `${tab.sStatementID}` &&
                                <div>
                                    <div>
                                        <h5> Statement </h5>
                                        <TextareaAutosize
                                            maxRows={4}
                                            aria-label="maximum height"
                                            defaultValue={tab.sDescription}
                                            style={{ width: '100%', height:"150px", padding: "10px", outline:"none", border:"1px solid rgba(55, 59, 59, 0.2)", borderRadius:"5px" }}
                                            />
                                    </div>
                                    <hr />
                                    <div>
                                        <h5> Options </h5>
                                        <div className='options-container'>
                                            {
                                                tab.options.map((option, i) =>

                                                    <TextareaAutosize
                                                        maxRows={4}
                                                        aria-label="maximum height"
                                                        defaultValue={option.text}
                                                        style={{ width: '100%', padding: "10px", outline:"none", border:"1px solid rgba(55, 59, 59, 0.2)", borderRadius:"5px" }}
                                                    />
                                                )

                                            }
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
                                    <div className='tab-body-btns'>
                                        <button className='btn btn-primary' >
                                            SAVE
                                        </button>
                                        <button className='btn btn-primary' >
                                            RESET
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Tabs