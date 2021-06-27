import React form "react"


function Footer() {


    return (

<section id="contact" class="contact">

      <div class="container fluid">
        <div class="section-title text-center">
          <h1 class="p-4" id="contact">Contact Me</h1>
          </div>
        </div>
        
        
        <form class="d-flex flex-column px-4" action="mailto:brittanyplummer@gmail.com?subject=contact me&amp;" method="post" enctype="text/plain">

          Name
          <br/>
          <input class="form-control" type="text" name="name" placeholder="Your Name"/>
          <br/>
          Email
          <br/>
          <input class="form-control" type="text" name="mail"  placeholder="Your Email"/>
          <br/>
         
          
          Message
          <br/>
          <textarea class="form-control" type="text" name="message" size="50" placeholder="Message">
          </textarea>
          <br/>
          <br/>
          <input class="btn btn-dark mb-2" type="submit" value="Send"/>
          <input class="btn btn-dark mb-2" type="reset" value="Reset"/>

          </form>

</section>

)
}

export default Footer