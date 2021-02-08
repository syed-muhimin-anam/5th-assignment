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
            <div>
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
