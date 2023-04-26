
import { useForm } from "react-hook-form";
import { useState } from "react";
import React from 'react';
import './contact.css';
import { Icon } from 'react-icons-kit';
import { basic_eye } from 'react-icons-kit/linea/basic_eye';
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed';



function Contact() {
  const [type, setType] = useState('password')
  const [input, setInput] = useState("");
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const sendData = (data) => {
    if (data.passwordSec !== data.password) {
      setInput("Incorrect Password")
      return false
    }
    reset()
      console.log(data);
  }

  return (
    <div className="formBlock">
      <form className="form" onSubmit={handleSubmit(sendData)}>
        <input placeholder="Nick Name"  type="text" {...register("name", { required: "* Write your name" })} />
        {errors.name && <span className="req">{errors.name.message}</span>}
        <div className="inpBlock"> 
        <input className="inpPass"  placeholder="Password" type={type} {...register("password", { required: "* Write Password", maxLength: { value: 10, message: "Too much simbols" } })} />
        {type === "password" ? (
          <span className="icon" onClick={() => setType('text')}>
            <Icon icon={basic_eye_closed} size={20} />
          </span>
        ) : (
          <span className="icon"  onClick={() => setType('password')}>
            <Icon icon={basic_eye} size={20} />
          </span>
        )}
        {errors.password && <span className="req">{errors.password.message}</span>}
        </div>
        <input className="inpPassTwo"  placeholder="Repeat Password" type="password" {...register("passwordSec", { required: "* Repeat Password", maxLength: { value: 10, message: "Too much symbols" } })} />
        {errors.passwordSec && <span className="req">{errors.passwordSec.message}</span>}
        <span className="req" >{input}</span>
        <input className="mailInp" placeholder="Mail" type='text' {...register("mail", {
          required: "* Enter your email", pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "* invalid email address"
          }
        })} />
        {errors.mail && <span className="req">{errors.mail.message}</span>}
        <button className="sendBut" type="submit"  >Log in</button>
      </form>
    </div>
  )
}

export default Contact
