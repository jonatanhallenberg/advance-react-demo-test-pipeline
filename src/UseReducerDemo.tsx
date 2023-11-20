import { useJonatansReducer } from './hooks/useJonatansReducer';

type Person = {
    firstname: string;
    lastname: string;
    street: string;
    city: string;
    zip: string;
    counter: number;
}

const UseStateDemo = () => {
    
    const [ state, dispatch ] = useJonatansReducer((state, action) => {
        switch (action.type) {
            case "firstname":
                return { ...state, firstname: action.payload };
            case "lastname":
                return { ...state, lastname: action.payload };
            case "street":
                return { ...state, street: action.payload };
            case "zip":
                return { ...state, zip: action.payload };
            case "city":
                return { ...state, city: action.payload };
            case "counter":
                return { ...state, counter: action.payload };
            default:
                return state;
        }
    }, {
        firstname: "",
        lastname: "",
        street: "",
        city: "",
        zip: "",
        counter: 0,
    });

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <>
            <h1>useState</h1>

            <form onSubmit={onSubmit}>

                <label>Förnamn</label>
                <input type="text" value={state.firstname} onChange={(event) => dispatch({ firstname: event.target.value })} />
                <br />

                <label>Efternamn</label>
                <input type="text" value={state.lastname} onChange={(event) => dispatch({ lastname: event.target.value })} />
                <br />

                <label>Gatuadress</label>
                <input type="text" value={state.street} onChange={(event) => dispatch({ street: event.target.value })} />
                <br />

                <label>Postnummer</label>
                <input type="text" value={state.zip} onChange={(event) => dispatch({ zip: event.target.value })} />
                <br />

                <label>Postort</label>
                <input type="text" value={state.city} onChange={(event) => dispatch({ city: event.target.value })} />
                <br />

                <button type="submit">Skicka</button>

            </form>


        </>
    )
}

export default UseStateDemo;