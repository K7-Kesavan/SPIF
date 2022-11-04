import React from 'react';
import TermsConditions from './components/assessment/Assessment-Test/Terms & Condions/Terms_Conditions';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import AssessmentTest from './components/assessment/Assessment-Test/MainAssesment/AssessmentTest';
import TestResult from './components/assessment/Assessment-Test/TestCompletionPage/TestResult/TestResult';
import AdminStatement from './components/assessment/Admin-Statement/AdminStatement/AdminStatement';
import CertificationPage from './components/assessment/Assessment-Test/TestCompletionPage/Certification/CertificationPage';


function App() {
  return (
      <Router>
          <Switch>

              <Route exact='/' >
                <AdminStatement/>
              </Route>
              {/* <Route exact='/' >
                <TermsConditions/>
              </Route>
              <Route path='/assessment-test' >
                <AssessmentTest/>
              </Route>
              <Route path='/test-result' >
                <TestResult/>
              </Route>
              <Route path='/certification-page' >
                <CertificationPage/>
              </Route> */}


          </Switch>

          {/* <Route path='/' element={ <AdminStatement/>}/>

          {/* <Route path='/' element={ <TermsConditions/>} />

          <Route path='assessment-test' element={<AssessmentTest/>} />

          <Route path='test-result' element={ <TestResult/> } />

          <Route path='certification-page' element={ <CertificationPage/> } /> */} 
          
      </Router>
  );
}

export default App;
