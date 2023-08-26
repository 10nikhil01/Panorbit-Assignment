import {React, useEffect} from 'react'
import Users from '../components/Users'
import "./LandingPage.css"
function LandingPage() {
  // useEffect(() =>{
  //   localStorage.clear();
  // })
  return (
    <div className='landingPage'>
        <Users />
    </div>
  )
}

export default LandingPage;