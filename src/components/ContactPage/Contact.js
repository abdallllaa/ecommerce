import React from 'react';
import Title from '../Title';
export default function Contact(){
    return(
        <section className="py-5"> 
          <div className="row">
               <div className="col-10 mx-auto col-md-6 my-3">
                <Title  title="contact us " />
                <form className="mt-5"action="https://formspree.io/mwkraqrl" method="POST">
                      <div className="form-group">
                        <input 
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="john smith"/>
                      </div>
                      <div className="form-group">
                        <input 
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="email@email.com"/>
                      </div>
                      <div className="form-group">
                        <input 
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Important !!!"/>
                      </div>
                      <div className="form">
                        <textarea
                        name="message"
                        className="form-control"
                        rows="10" placeholder="hello There">
                        </textarea>
                      </div>
                      <div className="form-group">
                        <input type="submit" value="send" className="form-control bg-primary text-white"/>
                      </div>
                </form>
               </div>
          </div>
        </section>
    )
}