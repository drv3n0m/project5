// Input Area

const searchButton = document.getElementById('searchButton').addEventListener('click', () => {
    const searchMenu = document.getElementById('searchMenu').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMenu}`)
        .then(res => res.json())
        .then(data => displayFood(data.meals));
})

//Show food item area

function displayFood(foods) {
    const result = document.getElementById('result').innerText = searchMenu.value;


    const foodItems = document.getElementById("foodItems");

    //clear part
    searchMenu.value = "";
    foodItems.innerHTML = "";


    foods.forEach(food => {
        const foodDiv = document.createElement('div');

        const foodInfo = `
                  <div onclick="displayFoodDetail('${food.strMeal}')" class="food">  
                  <img src="${food.strMealThumb}">
                  <h4 id="foodName">${food.strMeal}</h3>
                  </div>
                
              `;

        foodDiv.innerHTML = foodInfo;
        foodItems.appendChild(foodDiv);



    });
}


// food detail handler 

const displayFoodDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]))
}

//food details area

const renderFoodInfo = food => {
    const foodDiv = document.getElementById('foodDetails');
    foodDiv.innerHTML = `
        <img src="${food.strMealThumb}">
        <h2>${food.strMeal}</h2>
        <p> Ingredients </p>
        <ul>
            <li>${food.strMeasure1} ${food.strIngredient1}</li>
            <li>${food.strMeasure2} ${food.strIngredient2}</li>
            <li>${food.strMeasure3} ${food.strIngredient3}</li>
            <li>${food.strMeasure4} ${food.strIngredient4}</li>
            <li>${food.strMeasure5} ${food.strIngredient5}</li>
            <li>${food.strMeasure6} ${food.strIngredient6}</li>
            <li>${food.strMeasure7} ${food.strIngredient7}</li>
            <li>${food.strMeasure8} ${food.strIngredient8}</li>
            <li>${food.strMeasure9} ${food.strIngredient9}</li>
            <li>${food.strMeasure10} ${food.strIngredient10}</li>
            <li>${food.strMeasure11} ${food.strIngredient11}</li>
            <li>${food.strMeasure12} ${food.strIngredient12}</li>
            <li>${food.strMeasure13} ${food.strIngredient13}</li>
            <li>${food.strMeasure14} ${food.strIngredient14}</li>
            <li>${food.strMeasure15} ${food.strIngredient15}</li>
            <li>${food.strMeasure16} ${food.strIngredient16}</li>
            <li>${food.strMeasure17} ${food.strIngredient17}</li>
            <li>${food.strMeasure18} ${food.strIngredient18}</li>
            <li>${food.strMeasure19} ${food.strIngredient19}</li>
            <li>${food.strMeasure20} ${food.strIngredient20}</li>
        </ul>
    `

}