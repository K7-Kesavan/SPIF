import React from 'react';
// import ReactDOM from 'react';
// import MaterialLayout from './components/Layout/MaterialLayout';
// import CheckoutPage from './components/CheckoutPage';
import TermsConditions from './components/assessment/Assessment-Test/Terms & Condions/Terms_Conditions';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AssessmentTest from './components/assessment/Assessment-Test/MainAssesment/AssessmentTest';
import TestResult from './components/assessment/Assessment-Test/TestCompletionPage/TestResult/TestResult';
import AdminStatement from './components/assessment/Admin-Statement/AdminStatement';
import CertificationPage from './components/assessment/Assessment-Test/TestCompletionPage/Certification/CertificationPage';


function App() {
  return (
      <Router>
        <Routes>
          {/* <MaterialLayout> 
            <CheckoutPage />
          </MaterialLayout> */}

          {/* <Route path='/' element={ <AdminStatement/>}/> */}

          <Route path='/' element={ <TermsConditions/>} />

          <Route path='assessment-test' element={<AssessmentTest/>} />

          <Route path='test-result' element={ <TestResult/> } />

          <Route path='certification-page' element={ <CertificationPage/> } />
          
        </Routes>
      </Router>
  );
}

export default App;
