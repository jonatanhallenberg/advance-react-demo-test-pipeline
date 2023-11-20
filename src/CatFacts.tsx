import { useEffect, useState } from "react";
import { getCatFacts } from "./api/getCatFacts";

export const CatFacts = () => {

    const [facts, setFacts] = useState<string[]>([]);

    useEffect(() => {
        getCatFacts().then(
            facts => setFacts(facts)
        );
}, []);

return (
    <div>
        <h1>Cat Facts</h1>
        <ul>
            {facts.map(fact => <li key={fact}>{fact}</li>)}
        </ul>
    </div>
);
    }

