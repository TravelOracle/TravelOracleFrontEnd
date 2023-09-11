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

    return(
        <>
        <div>
            
        </div>
        </>
    )


}