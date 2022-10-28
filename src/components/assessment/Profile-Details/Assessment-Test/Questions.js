import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, Popper, Typography } from '@material-ui/core'


const Questions = ({ questions, loading }) => {

  const [answers, setAnswers] = useState("");

  const [open, setOpen] = useState(false);
  // const [score, setScore] = useState(0);
  // useEffect(()=>{
  //   if(localStorage.getItem("item")==null)  //if wish array is not presnt before 
  //   {
  //       localStorage.setItem("item","[]")   //then add the wish
  //   }
  // },[]) 

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   console.log('hi');
  // }

  const [anchor, setAnchor] =  useState(null);
 

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    // <div className='row px-3 '>
    <form className='col-md-12 px-3 question-form ' >
      {
        questions.map((question, i) => {
          return (
            <div key={question.sStatementID} className='col-md-6 col-sm-12 col-md-12 question'>
              <div className='body px-3 w-100' >
                <h3 className='w-100'> <span>{question.order}---</span>{question.sDescription}</h3>
                {
                  question.order === null &&
                  <div className='multi-q-details'>
                    <h3 className='w-100'>{question.sDescription1}</h3>
                    <p>{question.sText}</p>
                    <h3>{question.sPointsDesc}</h3>
                    <h3>{question.sPointsBrief}</h3>
                  </div>

                }
                {
                  question.options.map((option) => {                   
                    
                    const openPopover = (event) =>{
                      if (option.isAnswer === false) {
                        setAnchor(event.currentTarget)
                      }
                      else{
                        setAnchor(null)
                      }
                        
                    }

                    const handleClose = () => {
                      setAnchor(null);
                    };

                    const open = Boolean(anchor);
                    

                    return (
                      <div className="question-options">
                        <input type="radio"
                          name={question.sStatementID}
                          value={option.text}
                          onChange={ (e)=>{setAnswers(e.target.value)} }
                          onClick={openPopover}
                          onClose={handleClose}
                        />
                        
                        <label className='px-1 question-label' > {option.text} </label>

                        {/* When user click the wrong Answer(input)-->The Prompt will display */}

                        <Popper
                          style={{ 
                            backgroundColor:"white",
                            borderRadius:"20px",
                            width:"600px",
                            color:"blue",
                            fontWeight:"bolder",
                            marginLeft:"420px",
                            marginTop:"2px",
                            boxShadow:"4px 2px 2px 2px rgba(0,0,0,0.25), -4px 2px 2px 2px rgba(0,0,0,0.25)",
                            padding:"10px"
                          }} 
                          open={open}
                          anchorEl={anchor}
                          // anchorOrigin ={{
                          //   vertical : 'top',
                          //   horizontal : 'center'
                          // }}
                          // transformOrigin ={{
                          //   vertical : 'bottom',
                          //   horizontal : 'center'
                          // }}  
                        >
                          <Typography variant='h6' className='option-popper' >  {option.isPrompt} </Typography>
                        </Popper>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
      <Link to='/test-result'>
        <button type="submit" class="btn btn-primary mt-4">Submit Test</button>
      </Link>
      {/* <Link to='/assessment-test'>
              <button onClick={{handleButton} }
              type="button" class="btn btn-primary"> {num} </button>
            </Link> */}
    </form>
    // </div>
  )
}

export default Questions
