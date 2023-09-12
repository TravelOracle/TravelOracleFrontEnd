import { useState } from "react";
import axios from "axios";

const Filters = () => {
    const [environment, setEnvironment] = useState("");
    const [interest, setInterest] = useState("");
    const [travelBudget, setTravelBudget] = useState("");
    const [home, setHome] = useState("");
    const [climate, setClimate] = useState("");
    const [travelGroup, setTravelGroup] = useState("");
    const [continent, setContinent] = useState("");

    const handlePost = () => {
        axios
            .post("http://127.0.0.1:8000/api/filter/generate", {
                environment: environment,
                interest: interest,
                travel_budget: travelBudget,
                home: home,
                climate: climate,
                travel_group: travelGroup,
                continent: continent,
            })
            .then ((response) => {

            }) 
    }

    const handleEnvironment = (selectedEnvironment) => {
        setEnvironment(selectedEnvironment)
        console.log(selectedEnvironment)
    }

    return(
        <>
        <div>
            <h1>Travel Oracle</h1>
            <h3>Environment</h3>
                <button onClick={() => handleEnvironment("Coastal")}>Coastal</button>
                <button onClick={() => handleEnvironment("Mountains")}>Mountains</button>
                <button onClick={() => handleEnvironment("Urban")}>Urban</button>
            <h3>Continent/Area</h3>
                <button onClick={() => handleEnvironment("Europe")}>Europe</button>
                <button>Asia</button>
                <button>Africa</button>
                <button>South America</button>
                <button>Middle East</button>
                <button>Caribbean</button>
                <button>South East Asia</button>
            <button onClick={handlePost}>Generate</button>
        </div>
        </>
    )


}
export default Filters