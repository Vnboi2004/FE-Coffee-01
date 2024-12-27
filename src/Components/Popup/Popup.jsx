import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
const Popup = ({ showPage, setShowPage, ConfirmPage, setConfirmPage}) => {
  return (
    <div>
        { showPage && (ConfirmPage === 'signin' || ConfirmPage === 'signup') ? ( ConfirmPage === 'signin' ? <SignIn setShowPage={setShowPage} setConfirmPage={setConfirmPage}/> : <SignUp setShowPage={setShowPage} setConfirmPage={setConfirmPage}/>) : null }
    </div>
  )
}

export default Popup
