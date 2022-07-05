import classes from "./AvailablePlants.module.css";
import PlantItem from "./PlantItem/PlantItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";

function AvailablePlants() {

 const[plants , setPlants] =  useState([])

 useEffect(()=>{
   const fetchData = async ()=>{
          const response = await fetch('https://green-store-43556-default-rtdb.firebaseio.com/plants.json');
          const responseData = await response.json();

          const loadedPlants = [];

          for(const key in responseData)
          {
            loadedPlants.push({
              id : key,
              name : responseData[key].name,
              price : responseData[key].price,
              text : responseData[key].text,

            })
          }
          setPlants(loadedPlants)
   }
   fetchData();
 },[])
  const plantsList = plants.map((plant) => (
    <PlantItem
      name={plant.name}
      id={plant.id}
      price={plant.price}
      text={plant.text}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{plantsList}</ul>
      </Card>
    </section>
  );
}

export default AvailablePlants;
