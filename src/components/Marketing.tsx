'use client'

import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function Marketing() {

    const { data } = useQuery<Product[]>({
        queryKey: ['feature-products'],
        queryFn: async () => {
            const response = await axios.get('https://fakestoreapi.com/products?limit=3')
            return response.data
        },
    });

    return (
        <div className="container marketing">
            <div className="row">
                {data?.map((product) => (
                    <div className="col-lg-4 text-center" key={product.id}>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={140}
                            height={140}
                            className="rounded-circle"
                            style={{ objectFit: 'contain' }}
                        />
                        <h4 className="fw-normal mt-3">{product.title}</h4>
                        <p>{product.description.slice(0, 60)}...</p>
                        <p><strong>${product.price.toFixed(2)}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
