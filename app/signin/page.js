"use client";
import { useRef } from "react"
import { users } from "../data";




export default function SignIn(){

let emailRef = useRef();
let passwordRef = useRef();


function Savedata(){

let user ={
    email:emailRef.current.value,
    password:passwordRef.current.value,
}
   
users.push(user);
console.log(user);



}
    return <div className="input">
        <input placeholder="Email" ref={emailRef}></input> <br></br>
        <input placeholder="Password" ref={passwordRef}></input> <br></br>
        <button onClick={Savedata}>Sign In</button>

    </div>
}