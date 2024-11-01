"use client";
import { useRouter } from "next/navigation";
import { users } from "../data"

export default()=>{
    let router=  useRouter();


    return <div className="userrs">
        <table border="1" >
            {
                users.map(function(user,i){
                    return <tr key={i}>
                        <td className="column">{user.email}</td>
                        <td className="column">{user.password}</td>
                        <td>
                            <button onClick={()=>{
                                router.push('/signup?abc='+user.email)
                            }}>Edit</button>
                        </td>
                    </tr>
                })
            }
        </table>

    </div>

}