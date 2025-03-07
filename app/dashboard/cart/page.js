"use client";
import { Provider, useSelector } from 'react-redux';
import { meraStore } from '@/store/store';

export default function Page(){
    return <Provider store={meraStore}>
           <Cart></Cart>
     </Provider>
}

function Cart(){

    let cartItems = useSelector((store)=>{
        return store.productSlice.cart
    })

    let total = 0;

    cartItems.forEach((item)=>{
      total += item.price;
    })


    return <div>
      <table>
        {
          cartItems.map((item)=>{
            return <tr>
              <td><img width="40"  src={item.src} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          })
        }

        <tr>
          <th>Total Bill</th>
          <th>{total}</th>
        </tr>
        </table>
    </div>
  

}