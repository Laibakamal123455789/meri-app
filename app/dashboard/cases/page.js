"use client"

import Card from "@/component/Card/card"
import { ads } from "@/app/data"
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function Page(){
return <Suspense>
  <search>
    
  </search>
</Suspense>
}
 function Search() {
  let params = useSearchParams();
  let searchText = params.get('q')?.toLowerCase() ?? "";

  return <div className="card-container">
    {
      ads.filter((ad) => {
        if (ad.name.toLowerCase().includes(searchText)) {
          return true;
        }
      }).map((a2, i) => {
        return <Card key={i} meraAd={a2}></Card>
      })
    }

  </div>

}