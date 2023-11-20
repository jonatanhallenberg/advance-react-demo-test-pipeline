export const getCatFacts = async () => {
    return {
        data: [
            {
                id: 1,
                fact: 'Unlike dogs'
            },
            {
                id: 2,
                fact: 'Cats are totally awesome'
            },
            {
                id: 3,
                fact: 'Cats are super awesome'
            }
        ]
    }

    const response = await fetch('https://catfact.ninja/facts');
    const data = await response.json();
    return data.data.map((fact) => fact.fact);


}