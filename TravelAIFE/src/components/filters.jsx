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

    const handleInterest = (selectedInterest) => {
        setInterest(selectedInterest)
        console.log(selectedInterest)
    }

    const handleTravelBudget = (selectedTravelBudget) => {
        setTravelBudget(selectedTravelBudget)
        console.log(selectedTravelBudget)
    }

    const handleHome = (selectedHome) => {
        setHome(selectedHome)
        console.log(selectedHome)
    }

    const handleClimate = (selectedClimate) => {
        setClimate(selectedClimate)
        console.log(selectedClimate)
    }

    const handleTravelGroup = (selectedTravelGroup) => {
        setTravelGroup(selectedTravelGroup)
        console.log(selectedTravelGroup)
    }

    const handleContinent = (selectedContinent) => {
        setContinent(selectedContinent)
        console.log(selectedContinent)
    }

    return(
        <>
        <div>
            <h1 class="appTitle">Travel Oracle</h1>
            <h3 class="filterTitle">Environment</h3>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Coastal")}>Coastal</button>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Mountains")}>Mountains</button>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Urban")}>Urban</button>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Countryside")}>Countryside</button>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Arid")}>Arid</button>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Forest")}>Forest</button>
                <button class="button-51" role="button" onClick={() => handleEnvironment("Tropical")}>Tropical</button>
            <h3 class="filterTitle">Continent/Area</h3>
                <button class="button-51" role="button" onClick={() => handleContinent("Europe")}>Europe</button>
                <button class="button-51" role="button" onClick={() => handleContinent("Asia")}>Asia</button>
                <button class="button-51" role="button" onClick={() => handleContinent("Africa")}>Africa</button>
                <button class="button-51" role="button" onClick={() => handleContinent("South America")}>South America</button>
                <button class="button-51" role="button" onClick={() => handleContinent("Middle East")}>Middle East</button>
                <button class="button-51" role="button" onClick={() => handleContinent("Caribbean")}>Caribbean</button>
                <button class="button-51" role="button" onClick={() => handleContinent("South East Asia")}>South East Asia</button>
            <h3 class="filterTitle">Budget</h3>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("Under $200")}>Under $200</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$201-$500")}>$201-$500</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$501-$1,000")}>$501-$1,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$1,001-$2,000")}>$1,001-$2,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$2,001-$4,000")}>$2,001-$4,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$4,001-$7,000")}>$4,001-$7,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$7,001-$10,000")}>$7,001-$10,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$10,001-$14,000")}>$10,001-$14,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("$14,001-$20,000")}>$14,001-$20,000</button>
                <button class="button-51" role="button" onClick={() => handleTravelBudget("Money is no object")}>Money is no object</button>
            <h3 class="filterTitle">Interests</h3>
                <button class="button-51" role="button" onClick={() => handleInterest("Beach")}>Beach</button>
                <button class="button-51" role="button" onClick={() => handleInterest("Historical Sites")}>Historical Sites</button>
                <button class="button-51" role="button" onClick={() => handleInterest("Restaurants")}>Restaurants</button>
                <button class="button-51" role="button" onClick={() => handleInterest("Wine Tasting")}>Wine Tasting</button>
                <button class="button-51" role="button" onClick={() => handleInterest("Outdoor Activities")}>Outdoor Activities</button>
                <button class="button-51" role="button" onClick={() => handleInterest("Sports")}>Sports</button>
            <h3> </h3>    
            <button class="button-74" role="button" onClick={handlePost}>Generate</button>
        </div>
        </>
    )
}
export default Filters