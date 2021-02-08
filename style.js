const searchFood = () => {
    const foodItem = document.getElementById('food-item');
    foodItem.innerText = " ";
    const inputFoodName = document.getElementById('input-foodName').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>

        {
            foodList(data.meals);
            document.getElementById("food-details").innerHTML = `<h4>Sir choose your food.</h4>`;
           
        });

    const foodList  = foods =>{
        if(foods == null){
            document.getElementById("food-details").innerHTML =`<h4>This item is not available.</h4>`;
        }
        foods.forEach(food => {
            const foodDetails =`
            <div id="meal" onclick="displayFoodInfo('${food.strMeal}')">
            <img src=${food.strMealThumb}>
            <h3>${food.strMeal}</h3>
            </div> `

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
    foodInfo.innerText =" ";
    const pic = document.createElement("img");
    pic.src = div.strMealThumb;
    foodInfo.appendChild(pic);

    const foodName = document.createElement("h2");
    foodName.innerText = div.strMeal;
    foodInfo.appendChild(foodName);

    const ul = document.createElement("ul");
    for (let i = 1; i < 10; i++) {
        let foodIngredients = div[`strMeasure${i}`] + div[`strIngredient${i}`];

        const li = document.createElement("li");
        li.innerText = foodIngredients;
        ul.appendChild(li);
        foodInfo.appendChild(ul);
    }

}

