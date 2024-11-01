"use client";
import { useRef } from "react"
import { users } from "../data";
import { useRouter } from "next/navigation";


export default function Login(){
    let router = useRouter();

let emailRef = useRef();
let passwordRef = useRef();


function Savedata(){


    let userMilgya = users.find(function(user){

        if(user.email == emailRef.current.value && user.password == passwordRef.current.value){
            return true;
        }

    })
    if(userMilgya){
        router.push('/dashboard')
    }
    else{
        toast.error("user nahi mila");
    }
    

}
   
    return <div className="input">
        <input placeholder="Email" ref={emailRef}></input> <br></br>
        <input placeholder="Password" ref={passwordRef}></input> <br></br>
        <button onClick={Savedata}>Log In</button>

    </div>
}