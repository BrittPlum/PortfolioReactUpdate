import React from "react"


function Footer() {


    return (

<section id="contact" className="contact">

      <div className="container fluid">
        <div className="section-title text-center">
          <h1 className="p-4" id="contact">Contact Me</h1>
          </div>
        </div>
        
        
        <form className="d-flex flex-column px-4" action="mailto:brittanyplummer@gmail.com?subject=contact me&amp;" method="post" encType="text/plain">

          Name
          <br/>
          <input className="form-control" type="text" name="name" placeholder="Your Name"/>
          <br/>
          Email
          <br/>
          <input className="form-control" type="text" name="mail"  placeholder="Your Email"/>
          <br/>
         
          
          Message
          <br/>
          <textarea className="form-control" type="text" name="message" size="50" placeholder="Message">
          </textarea>
          <br/>
          <br/>
          <input className="btn btn-dark mb-2" type="submit" value="Send"/>
          <input className="btn btn-dark mb-2" type="reset" value="Reset"/>

          </form>

</section>

)
}

export default Footer