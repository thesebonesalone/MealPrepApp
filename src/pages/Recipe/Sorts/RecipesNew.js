import React, { useEffect, useState } from "react";
import RecipePage from "../RecipePage";
import { site } from "../../../site";


function RecipesNew(props)
{
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch(site + "/recipe/get/new")
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
    },[])

    return (
        <div> New Recipes</div>
    )
}

export default RecipesNew