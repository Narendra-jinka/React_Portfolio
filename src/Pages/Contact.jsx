import React from 'react'
import { NavLink } from "react-router-dom";
import { PowerBtn } from "./AllSvgs";

import Swal from 'sweetalert2'
const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d4b5f79-2b5b-4f9d-836e-5309bfed7e9b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: " Success!",
        text: "Message sent Successfully!",
        icon: "success"
      });
      event.target.reset();
    }
  };
  
  return (
    <div className='  bg-[#283035]'>
        <div className='flex justify-center pt-3'>
        <NavLink
            to="/"
            className="h-[40px]  z-20 w-[40px] rounded-full p-2 power_hover hover:shadow-custom bg-white"
          >
            <PowerBtn />
          </NavLink>
        </div>
        <section  className='mt-2'>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="about_titles text-[3rem] text-center text-white">Contact Me .</h2>
        <p className="mb-3 lg:mb-6 font-light text-center about_text text__para">
           want to send feeddback or want to connect <br/>
            Let me know. 
        </p>
        <form onSubmit={onSubmit} className='space-y-3'>
          <div>
            <label htmlFor="email" className='form__label'>Your Email</label>
            <input type="email" id='email' name='email'
            placeholder='example@gmail.com'
            className='form__input mt-1'
             />
          </div>
          <div>
            <label htmlFor="subject" className='form__label'>Subject</label>
            <input type="text" id='subject'
            placeholder='Let me know how I can help you..'
            className='form__input mt-1' name='name'
             />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form__label'>Message</label>
            <textarea rows='4' type="text" id='message'
            placeholder='Leave a comment......'
            className='form__input mt-1' name='message'
             />
          </div>
          <div className='flex justify-center '>
          <button type='submit' className='btn mb-10 rounded sm:w-fit hover:scale-110 hover:transition-transform hover:duration-500 hover:ease-in-out'>Submit</button>
          </div>
          
        </form>
      </div>
    </section>

    </div>
  )
}

export default Contact
