const searchFood = () => {
    const foodItem = document.getElementById('food-item');
    foodItem.innerText = " ";
    const inputFoodName = document.getElementById('input-foodName').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => foodList(data.meals));

    const foodList  = foods =>{
        foods.forEach(food => {
            const foodDetails =`
            <div id="food" onclick="displayFoodInfo('${food.strMeal}')">
            <img src=${food.strMealThumb}>
            <h3>${food.strMeal}</h3>
            </div>
            `

            const div = document.createElement("div");
            div.className="food-div"
            div.innerHTML = foodDetails;
            foodItem.appendChild(div);
        });
    }

}

const displayFoodInfo = name => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals[0]))
}

const displayFood = div => {
    const foodInfo = document.getElementById("food-details");
    foodInfo.innerText = " ";
    const pic = document.createElement("img");
    pic.src = div.strMealThumb;
    foodInfo.appendChild(pic);

    const foodName = document.createElement("h2");
    foodName.innerText = div.strMeal;
    foodInfo.appendChild(foodName);


    const ul = document.createElement("ul");
    for (let i = 1; i < 10; i++) {
        let foodIngredients = div[`strMeasure${i}`] + div[`strIngredient${i}`];
        if(foodIngredients == "null"){
            continue;
        }
        const li = document.createElement("li");
        li.innerText = foodIngredients;
        ul.appendChild(li);
        foodInfo.appendChild(ul);
    }

}



// const displayFoodDetails = name => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//         .then(res => res.json())
//         .then(data => displayFood(data.meals[0]))
// }

// const displayFood = div => {
//     const foodDetails = document.getElementById("food-details");
//     foodDetails.innerText = " ";
//     const pic = document.createElement("img");
//     pic.src = div.strMealThumb;
//     foodDetails.appendChild(pic);

//     const foodName = document.createElement("h3");
//     foodName.innerText = div.strMeal;
//     foodDetails.appendChild(foodName);

//     const ul = document.createElement("ul");
//     for (let i = 1; i < 20; i++) {
//         let foodIngredients = div[`strMeasure${i}`] + div[`strIngredient${i}`];
//         if(foodIngredients == "null"){
//             continue;
//         }
//         const li = document.createElement("li");
//         li.innerText = foodIngredients;
//         ul.appendChild(li);
//         foodDetails.appendChild(ul);
//     }

// }
