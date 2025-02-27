'use client'

import { Product } from "@/types/Product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export default function Featurettes() {

    const { data } = useQuery<Product[]>({
        queryKey: ['featurettes'],
        queryFn: async () => {
            const response = await axios.get('https://fakestoreapi.com/products?limit=6')
            return response.data
        },
    });

    return (
        <div className="container">
            <hr className="featurette-divider" />
            {data?.slice(3, 6).map((product, index) => {
                const leftColClasses = index % 2 === 1 ? "col-md-7 order-md-2" : "col-md-7";
                const rightColClasses = index % 2 === 1 ? "col-md-5 order-md-1" : "col-md-5";
                return (
                    <div key={product.id}>
                        <div className="row featurette">
                            <div className={leftColClasses}>
                                <h3 className="featurette-heading fw-normal lh-1">
                                    {product.title}{" "}
                                    <span className="text-body-secondary">
                                        &mdash; ${product.price.toFixed(2)}
                                    </span>
                                </h3>
                                <p className="lead">{product.description}</p>
                            </div>
                            <div className={rightColClasses}>
                                <Image
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                    src={product.image}
                                    alt={product.title}
                                    width={400}
                                    height={400}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                    </div>
                );
            })}
        </div>
    );
}
