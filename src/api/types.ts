export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export type CatFact = {
    fact: string,
    length: number
}

export type Item = {
    id?: number,
    title: string,
    order?: number,
    completed?: boolean,
    createdOn?: Date
}

