"use client";
import { useEffect, useState } from "react"
import Meeting from "./model/page";

function AddUser({abc, setCity, a1}){

  return <div>

  yeh child wala
    <h1>{abc}</h1>

    <button onClick={()=>{

      let name = prompt("enter name");
      a1(5)

    }}
    >Change karo</button>

    yeh add user
  </div>
}


export default  function Page(){

  let [modal, setModal]  = useState();

  useEffect(()=>{

    let meetingWalModal = new bootstrap.Modal('#exampleModal', {});
    setModal(meetingWalModal);

  }, [])


  let [users, setUsers] = useState([]);

  const addKaro = (user)=>{

    setUsers([...users, user])
    modal.hide();

  }

  const showModal = ()=>{

    modal.show();

  }

  return <div>
    
    <table>{
      users.map((user,index)=>{
        return <tr key={index}>
          <td>{user.name}</td>
          <td>{user.password}</td>
          <td>{user.city}</td>

        </tr>
      })
      }</table>

<button type="button" onClick={showModal}>
  Launch demo modal
</button>

    <Meeting addKaro={addKaro}></Meeting>
</div>
}