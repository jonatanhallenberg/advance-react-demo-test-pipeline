import { useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";

export const UseEffectSorting = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {

        const loadData = async () => {
            const products = await getProducts();
            setData(products);
        }
        loadData();

    }, []);

    return (
        <ul>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    )   
}