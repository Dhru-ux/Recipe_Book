import React, { useState, useEffect } from 'react'
import Header from './Header'
import FoodRecipe from './FoodRecipe'
import './App.css'

function App() {
    const APP_URL = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"

    const APP_ID = "ace70595";
    const APP_KEY = "9eeba7369bf391aeedd3f9ffe4bce41b";


    const [Search, setSearch] = useState("");
    const [Recipe, setRecipe] = useState([]);


    let InputChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {

        searchRecipe("chicken")

    }, [])

    const searchRecipe = async (title) => {
        const responce = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await responce.json();
        setRecipe(data.hits);
        console.log(data.hits);
        // console.log(data);

    }
    let funClick = () =>{
        searchRecipe(Search)
    }

    return (
        <div>
            {/* <h1>Hii !</h1> */}
            <Header search={Search} InputChange={InputChange} funClick = {funClick} />
            <div className="container">
                <FoodRecipe recipe={Recipe} />
            </div>
        </div>
    )
}

export default App
