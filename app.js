// Input Area

const searchMealButton = () => {
    const searchMeal = document.getElementById('searchMeal').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaymeal(data.meals))
        .catch(error => displayError("sorry! Search again."))
}

// error result

const displayError = error => {
    const errorTag = document.getElementById('error');
    errorTag.innerText = "";
    errorTag.innerText = error;
}


//Show meal item area

const displaymeal = meals => {
    // search result value
    const result = document.getElementById('result').innerText = searchMeal.value;

    const mealItems = document.getElementById("mealItems");

    //clear part
    searchMeal.value = "";
    mealItems.innerHTML = "";

    // meal short info 

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');

        const mealInfo = `
                  <div onclick="displayMealDetails('${meal.strMeal}')" class="meal">  
                  <img src="${meal.strMealThumb}">
                  <h4 id="mealName">${meal.strMeal}</h3>
                  </div>
                
              `;

        mealDiv.innerHTML = mealInfo;
        mealItems.appendChild(mealDiv);
    });
}


// meal detail handler 

const displayMealDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]))
}


//meal details area

const renderMealInfo = meal => {
    const mealDiv = document.getElementById('mealDetails');
    mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
        <p> Ingredients </p>
        <ul>
            <li>${meal.strMeasure1} ${meal.strIngredient1}</li>
            <li>${meal.strMeasure2} ${meal.strIngredient2}</li>
            <li>${meal.strMeasure3} ${meal.strIngredient3}</li>
            <li>${meal.strMeasure4} ${meal.strIngredient4}</li>
            <li>${meal.strMeasure5} ${meal.strIngredient5}</li>
            <li>${meal.strMeasure6} ${meal.strIngredient6}</li>
            <li>${meal.strMeasure7} ${meal.strIngredient7}</li>
            <li>${meal.strMeasure8} ${meal.strIngredient8}</li>
            <li>${meal.strMeasure9} ${meal.strIngredient9}</li>
            <li>${meal.strMeasure10} ${meal.strIngredient10}</li>
            <li>${meal.strMeasure11} ${meal.strIngredient11}</li>
            <li>${meal.strMeasure12} ${meal.strIngredient12}</li>
            <li>${meal.strMeasure13} ${meal.strIngredient13}</li>
            <li>${meal.strMeasure14} ${meal.strIngredient14}</li>
            <li>${meal.strMeasure15} ${meal.strIngredient15}</li>
            <li>${meal.strMeasure16} ${meal.strIngredient16}</li>
            <li>${meal.strMeasure17} ${meal.strIngredient17}</li>
            <li>${meal.strMeasure18} ${meal.strIngredient18}</li>
            <li>${meal.strMeasure19} ${meal.strIngredient19}</li>
            <li>${meal.strMeasure20} ${meal.strIngredient20}</li>
        </ul>
    `

}