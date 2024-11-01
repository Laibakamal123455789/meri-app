import Nav from "@/component/nav/nav";

export default function Page({children}){

    return <div>

            <Nav></Nav>
        
            {children}
    </div>

}