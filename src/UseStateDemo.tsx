import { useState } from "react";

type Person = {
    firstname: string;
    lastname: string;
    street: string;
    city: string;
    zip: string;
}

const UseStateDemo = () => {

    const [person, setPerson] = useState<Person>({
        firstname: "",
        lastname: "",
        street: "",
        city: "",
        zip: "",
    });

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(person);
    }

    return (
        <>
            <h1>useState</h1>

            <form onSubmit={onSubmit}>

                <label>Förnamn</label>
                <input type="text" value={person.firstname} onChange={(event) => setPerson({ ...person, firstname: event.target.value })} />
                <br />

                <label>Efternamn</label>
                <input type="text" value={person.lastname} onChange={(event) => setPerson({ ...person, lastname: event.target.value })} />
                <br />

                <label>Gatuadress</label>
                <input type="text" value={person.street} onChange={(event) => setPerson({ ...person, street: event.target.value })} />
                <br />

                <label>Postnummer</label>
                <input type="text" value={person.zip} onChange={(event) => setPerson({ ...person, zip: event.target.value })} />
                <br />

                <label>Postort</label>
                <input type="text" value={person.city} onChange={(event) => setPerson({ ...person, city: event.target.value })} />
                <br />

                <button type="submit">Skicka</button>

            </form>


        </>
    )
}

export default UseStateDemo;