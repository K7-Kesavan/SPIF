import React from 'react';
// import ReactDOM from 'react';
// import MaterialLayout from './components/Layout/MaterialLayout';
// import CheckoutPage from './components/CheckoutPage';
import TermsConditions from './components/assessment/Profile-Details/Terms & Condions/Terms_Conditions';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AssessmentTest from './components/assessment/Profile-Details/Assessment-Test/AssessmentTest';
import TestResult from './components/assessment/Profile-Details/Assessment-Test/TestCompletionPage/TestResult';
import AdminStatement from './components/assessment/Profile-Details/Admin-Statement/AdminStatement';


function App() {
  return (
      <Router>
        <Routes>
          {/* <MaterialLayout> 
            <CheckoutPage />
          </MaterialLayout> */}

          <Route path='/' element={ <AdminStatement/>}/>

          {/* <Route path='/' element={ <TermsConditions/>} />

          <Route path='assessment-test' element={<AssessmentTest/>} />

          <Route path='test-result' element={ <TestResult/> } /> */}
          
        </Routes>
      </Router>
  );
}

export default App;
