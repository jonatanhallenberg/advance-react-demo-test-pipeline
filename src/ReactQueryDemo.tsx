import { useMutation, useQuery, useQueryClient } from 'react-query';

export const ReactQueryDemo = () => {

    const { isLoading, error, data } = useQuery('items', () =>
        fetch('http://localhost:5001/items').then(res =>
            res.json()
        )
    )

    type Product = {
        id?: number;
        title: string;
        price: number;
        description?: string;
        category?: string;
        image?: string;
    }

    const queryClient = useQueryClient()

    const { mutate, isLoading: isMutating, error: mutateError, data: mutateData, variables } = useMutation<Product>({
        mutationFn: (newProduct) => fetch('http://localhost:5001/items', {
            method: 'POST',
            body: JSON.stringify(newProduct),
        }).then(res => res.json()),
        onMutate: async (newItem) => {
            console.log('onMutate', newItem);
            const previousItems = queryClient.getQueryData(['items']);
            console.log('previousItems', previousItems);   
            queryClient.setQueryData(['items'], (old) => [...old, newItem])
        }
    })

    return <>
        <h1>React Query Demo</h1>
        {isLoading && <p>Laddar...</p>}
        {error && <p>Det blev fel!</p>}
        {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        {/* { variables && <p style={{ opacity: 0.5 }}>{variables.title}</p>} */}

        <button onClick={() => mutate({ title: 'Hårtork', order: 5, completed: false })}>Lägg till produkt</button>

    </>
}