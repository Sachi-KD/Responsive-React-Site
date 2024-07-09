import React from 'react';

function Contactus(){
      return (
       
            <div>
             <section className="py-4 bg-info"> 
                <div className="container">
                     <div className="row">
                  <div className="col-md-4 my-auto">
                     <h4> Contact</h4>
                     </div>
             <div className="col-md-8 my-auto">
                 
                       </div>
                          </div>
                          </div>
                      </section>


                  <section className="section">
                  <div className="container">
                  <div className="card shadow">
                  <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                     <h5 style={{ textAlign: "left", display: "block"}}>Contact Form </h5>
                     <hr/>

                     <div className="form-group">
                             <label className="mb-1" style={{ textAlign: "left", display: "block" , fontWeight: "bold"  }}>Full Name</label>
                             <input type="text" className="form-control" placeholder="Enter Full Name"/>
                     </div>

                     <div className="form-group">
                             <label className="mb-1" style={{ textAlign: "left", display: "block" , fontWeight: "bold"  }}>Phone Number</label>
                             <input type="text" className="form-control" placeholder="Enter Phone Number"/>
                     </div>

                     <div className="form-group">
                             <label className="mb-1" style={{ textAlign: "left", display: "block" , fontWeight: "bold" }}>Email Address</label>
                             <input type="text" className="form-control" placeholder="Enter Email Address "/>
                     </div>

                     <div className="form-group">
                             <label className="mb-1" style={{ textAlign: "left", display: "block" , fontWeight: "bold" }}>Message</label>
                             <textarea rows="3" className="form-control" placeholder="Type your Message.."/>
                     </div>

                     <div className="form-group py-3">
                            
                             <button type="button" className="btn btn-warning shadow w-100">Send Message</button>
                     </div>

                    </div>
                  
                     <div className="col-md-6 border-start">
                  <h5 className="main-heading">Address Information</h5> 
                  <div className="underline"></div>
                 <p>
                No.210/10 Hirana Panadura -Sri lanka
                   </p>
                   
                  <p>
                Phone: +0387926463
                   </p>
                   Email: email@tastefood.com
                      <p>
                    
                   </p>
                       </div>
                  </div>
                    </div>
                      </div>
                            </div>
</section>
</div>

      );
}

export default Contactus;
