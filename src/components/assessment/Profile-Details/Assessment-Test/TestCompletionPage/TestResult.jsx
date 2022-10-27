import React from 'react'
import './testResult.css'

const TestResult = () => {
  return (
    <div className='test-result'>
      <div className="card test-card" >
        <div className="card-body">
          <h2 className="card-title"> Test Has Been Completed Successfully </h2>
          <p className="card-text"> Correct Anwsers : 12 </p>
          <p className="card-text"> Wrong Anwsers : 4 </p>
          <p className="card-text"> Points : 15/20 </p>
          <p className="card-text"> Percentage : 70% </p>
          <p className="card-text"> Duration : 70% </p>
          <div>
            <h5>Feedback</h5>
            <p>You've eperienced how clean and professional your tests will look with SPIF </p>
          </div>
          <a href=".." className="card-link">Card link</a>
          <a href=".." className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
}

export default TestResult
