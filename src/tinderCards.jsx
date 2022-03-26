import React, {useState,useEffect} from "react";
import TenderCard from 'react-tinder-card'
import './tenderCards.css';
import axios from './axios';

function tenderCards(){
    const [people,setPeople] = useState([]);

    useEffect( ()=>{
      async function fetchData(){
          const res = await axios.get("tender/cards");

          setPeople(res.data);
          console.log(res.data);          
      }
      fetchData();
    },[])

    const swiped = (direction,nameToDelete) => {
        console.log("removing" + nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return(
        <div className="tenderCards">
           <div className="tinderCards_cardContainer">
                {people.map(person => {
                    return(
                        <TenderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped (dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                        <div className="cards" style={{background:"url("+ person.imgUrl +") no-repeat" }}>
                            <h3 className="cards_PersonName">{person.name}</h3>
                        </div> 
                        </TenderCard>
                    )
                })}
           </div>
        </div>
    )
}

export default tenderCards;