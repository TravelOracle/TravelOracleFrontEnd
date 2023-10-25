import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Dropdown from "./dropdown";

const Filters = () => {
    const [open, setOpen] = React.useState(false);
    const [environment, setEnvironment] = useState("");
    const [interest, setInterest] = useState("");
    const [travelBudget, setTravelBudget] = useState("");
    const [home, setHome] = useState("");
    const [climate, setClimate] = useState("");
    const [travelGroup, setTravelGroup] = useState("");
    const [continent, setContinent] = useState("");
    const [output, setOutput] = useState("");
    const [respArr, setRespArr] = useState([]);

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
                console.log("Response received:", response.data);
                // setOutput(response.data.output_text);
                setRespArr(response.data.output_text.split("\n\n"));
            }) 
    }

    // useEffect (() => {
    //     axios
    //         .get("http://127.0.0.1:8000/api/filter/generate")
    //         .then((response) => {
    //             setOutputText(response.data.outputText)
    //         })
            
    // })

    const handleOpen = () => {
        setOpen(!open);
      };

    const handleEnvironment = (selectedEnvironment) => {
        setEnvironment(selectedEnvironment)
        console.log(selectedEnvironment)
        setOpen(true);
    }

    const handleInterest = (selectedInterest) => {
        setInterest(selectedInterest)
        console.log(selectedInterest)
        setOpen(true);
    }

    const handleTravelBudget = (selectedTravelBudget) => {
        setTravelBudget(selectedTravelBudget)
        console.log(selectedTravelBudget)
        setOpen(true);
    }

    const handleHome = (selectedHome) => {
        setHome(selectedHome)
        console.log(selectedHome)
        setOpen(true);
    }

    const handleClimate = (selectedClimate) => {
        setClimate(selectedClimate)
        console.log(selectedClimate)
        setOpen(true);
    }

    const handleTravelGroup = (selectedTravelGroup) => {
        setTravelGroup(selectedTravelGroup)
        console.log(selectedTravelGroup)
        setOpen(true);
    }

    const handleContinent = (selectedContinent) => {
        setContinent(selectedContinent)
        console.log(selectedContinent)
        setOpen(true);
    }

    //   const handleMenuOne = () => {
    //     console.log('clicked one');
    //     setOpen(true);
    //   };
    
    //   const handleMenuTwo = () => {
    //     console.log('clicked two');
    //     setOpen(true);
    //   };

    return(
        <>
        <div>
            <h1 className="appTitle">Travel Oracle</h1>
        <Dropdown
            open={open}
            trigger={<button onClick={handleOpen}>Environment</button>}
            menu={[
                <button onClick={() => handleEnvironment("Coastal")}>Coastal</button>,
                <button onClick={() => handleEnvironment("Mountains")}>Mountains</button>,
                <button onClick={() => handleEnvironment("Urban")}>Urban</button>,
                <button onClick={() => handleEnvironment("Countryside")}>Countryside</button>,
                <button onClick={() => handleEnvironment("Arid")}>Arid</button>,
                <button onClick={() => handleEnvironment("Forest")}>Forest</button>,
                <button onClick={() => handleEnvironment("Tropical")}>Tropical</button>,
            ]}
        />
        
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />

        <Dropdown
            open={open}
            trigger={<button onClick={handleOpen}>Area of the world</button>}
            menu={[
                <div>
                <button className="button-85" role="button" onClick={() => handleContinent("Europe")}>Europe</button>
                <button className="button-85" role="button" onClick={() => handleContinent("Asia")}>Asia</button>
                <button className="button-85" role="button" onClick={() => handleContinent("Africa")}>Africa</button>
                <button className="button-85" role="button" onClick={() => handleContinent("South America")}>South America</button>
                <button className="button-85" role="button" onClick={() => handleContinent("Middle East")}>Middle East</button>
                <button className="button-85" role="button" onClick={() => handleContinent("Caribbean")}>Caribbean</button>
                <button className="button-85" role="button" onClick={() => handleContinent("South East Asia")}>South East Asia</button>
                </div>
            ]} 
        />

        <Dropdown
            open={open}
            trigger={<button onClick={handleOpen}>What is your travel budget?</button>}
            menu={[
                <div>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("Under $200")}>Under $200</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$201-$500")}>$201-$500</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$501-$1,000")}>$501-$1,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$1,001-$2,000")}>$1,001-$2,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$2,001-$4,000")}>$2,001-$4,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$4,001-$7,000")}>$4,001-$7,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$7,001-$10,000")}>$7,001-$10,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$10,001-$14,000")}>$10,001-$14,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("$14,001-$20,000")}>$14,001-$20,000</button>
                <button className="button-85" role="button" onClick={() => handleTravelBudget("Money is no object")}>Money is no object</button>
                </div>
            ]}
        />

        <Dropdown
            open={open}
            trigger={<button onClick={handleOpen}>What are your interests?</button>}
            menu={[
                <div>
                <button className="button-85" role="button" onClick={() => handleInterest("Beach")}>Beach</button>
                <button className="button-85" role="button" onClick={() => handleInterest("Historical Sites")}>Historical Sites</button>
                <button className="button-85" role="button" onClick={() => handleInterest("Restaurants")}>Restaurants</button>
                <button className="button-85" role="button" onClick={() => handleInterest("Wine Tasting")}>Wine Tasting</button>
                <button className="button-85" role="button" onClick={() => handleInterest("Outdoor Activities")}>Outdoor Activities</button>
                <button className="button-85" role="button" onClick={() => handleInterest("Sports")}>Sports</button>
                </div>
            ]}
        />

        <Dropdown
            open={open}
            trigger={<button onClick={handleOpen}>Departing from</button>}
            menu={[
                <div>
                <button className="button-85" role="button" onClick={() => handleHome("Wilmington")}>Wilmington</button>
                <button className="button-85" role="button" onClick={() => handleHome("San Diego")}>San Diego</button>
                <button className="button-85" role="button" onClick={() => handleHome("Mexico City")}>Mexico City</button>
                <button className="button-85" role="button" onClick={() => handleHome("Perth")}>Perth</button>
                <button className="button-85" role="button" onClick={() => handleHome("Toronto")}>Toronto</button>
                <button className="button-85" role="button" onClick={() => handleHome("Istanbul")}>Istanbul</button>
                </div>
            ]}
        />

        <Dropdown
            open={open}
            trigger={<button onClick={handleOpen}>Number of travelers</button>}
            menu={[
                <div>
                <button className="button-85" role="button" onClick={() => handleTravelGroup("Solo")}>Solo</button>
                <button className="button-85" role="button" onClick={() => handleTravelGroup("2 people")}>2 people</button>
                <button className="button-85" role="button" onClick={() => handleTravelGroup("3-4 people")}>3-4 people</button>
                <button className="button-85" role="button" onClick={() => handleTravelGroup("5 or more")}>5 or more</button>
                </div>
            ]}
        />
                <div>
                    {respArr.map((response) => (
                        <div>
                            <p>
                                {response}
                            </p>
                        </div>
                    ))}
                </div>
                

        </div>
        </>
    )
}
export default Filters