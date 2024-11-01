"use client";
import Link from 'next/link';


export default  function Card({meraAd, m}){
      return <div className="card-small-card" >
        <Link href={"/dashboard/product-detail/"+meraAd.name}>
        <h1>{m}</h1>
      <img className="card-img-top"  src={meraAd.src} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{meraAd.name}</h5>
        <p className="card-text">
        Price {meraAd.price}
        </p>
        <a href="#" className="btn btn-primary">
       ADD to Cart
        </a>
      </div>
      </Link>
    </div>   


}



// "use client";
// import Link from "next/link";

// export default function Card({ meraAd, m }) {
//   return (
//     <Link
//       href={`/dashboard/product-detail/${meraAd.name}`}
//       className="card"
//       style={{ width: "18rem" }}
//     >
//       <h1>{m}</h1>
//       <div style={{ textAlign: "center" }}>
//         <img className="card-img-top" src={meraAd.src} alt="Card image cap" />
//       </div>
//       <div className="card-body">
//         <h5 className="card-title">{meraAd.name}</h5>
//         <p className="card-text">Price {meraAd.price}</p>
//         <a href="#" className="btn btn-primary">
//           Add to Card
//         </a>
//       </div>
//     </Link>
//   );
// }
