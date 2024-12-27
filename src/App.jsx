import React, { useState } from 'react'
import { Hero } from './Components/Hero/Hero'
import { Banner } from './Components/Banner/Banner'
import { WhyChoose } from './Components/WhyChoose/WhyChoose'
import { About } from './Components/About/About'
import { AbouUs } from './Components/AbouUs/AbouUs'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Search } from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'

const App = () => {
    const [showPage, setShowPage] = useState(false);
    const [ConfirmPage, setConfirmPage] = useState('');
    return (
      <div className='overflow-x-hidden'>
        <Hero setShowPage={setShowPage} setConfirmPage={setConfirmPage} ConfirmPage={ConfirmPage}/>
        <Banner/>
        <WhyChoose/>
        <About/>
        <AbouUs/>
        <Portfolio/>
        <Search/>
        <Footer/>
        <Popup showPage={showPage} setShowPage={setShowPage} ConfirmPage={ConfirmPage} setConfirmPage={setConfirmPage}/>
      </div>
    )
}

export default App

