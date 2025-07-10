"use client";

import { use, useEffect, useState } from "react";

// data 
import famousItems from "../../../../data/data";

export default function ProductPage({ params }: { params: Promise<{ id: number }> }) {

  const { id } = use(params);
  const [currentProduct, setCurrentProduct] = useState<any>(null);

  useEffect(() => {
    const product = famousItems.find((item) => {
      return item.id === Number(id);
    })

    setCurrentProduct(product);
  }, [])

  if (!currentProduct) {
    return (
      <h1>loading</h1>
    )
  }

  return (
    <div className="w-[90%] max-w-[990px] mx-auto flex items-start justify-between">
      <div className="w-[50%]">
        <div className="w-full bg-red-700">
          <img src={currentProduct.image} alt={currentProduct.name} />
        </div>
      </div>

      <div className="w-[50%]">
        <p>Mahsulot narxi: <span>{currentProduct.price}</span></p>
        <p>Mahsulot haqida: <span>{currentProduct.description}</span></p>
        <button>Add to Card</button>
      </div>
    </div>
  )
}
