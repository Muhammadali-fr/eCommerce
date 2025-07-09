// app/product/[id]/page.tsx
"use client"; // must be at the top for Client Components

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;

  return <h1>Product ID: {id}</h1>;
}
