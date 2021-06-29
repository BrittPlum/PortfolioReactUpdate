import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Resume() {

    return (
<div>
    <Header />
    <div className="resumeContainer">
        <iframe className="resume" src= {process.env.PUBLIC_URL + '/assests/resume.pdf'} />
    </div>
    <Footer />
</div>
    )
}

export default Resume