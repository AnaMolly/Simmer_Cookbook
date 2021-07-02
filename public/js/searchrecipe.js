let searchBut = document.querySelector(".search-button")
let allRecipes = document.querySelector(".all-recipes")
let recipesListEl = $("#search-results")
let indRecipe = $("#ind-recipe")



function getRecipes(){
    let searchVal = document.getElementById("dishSearched")
    
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query="+ searchVal.value +"&number=10&offset=0&type=main%20course", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "cc1be2c279msh0c79bca34154d17p122150jsn9ba23118deaf",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
    .then((data) => {
        return data.json()
       
    })
    .then((data) => {
        console.log(data)
        
        
        for(let i=0;i<5;i++){

            recipesListEl.append(
                `<div class='recipes' id='${data.results[i].id}'  style="display:flex;flex-direction:column; align-items:center; margin:30px"> <h4 style='font-weight:200; font-size:20px; text-align:center; padding:30px'>${data.results[i].title}</h4> <img src='https://spoonacular.com/recipeImages/${data.results[i].image}' style='max-width:200px;max-height:200px'></div>`,

            )
        }

        let recipeList = $(".recipes")

        recipeList.on("click", function(){
            indRecipe.children().remove()
            let searchValue = this.id
            getIndRecipe(searchValue)
        })
        
        
    })

    .catch(err => {
        console.error(err);
    });
}


function getIndRecipe(searchValue){
    console.log(searchValue)
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + searchValue + "/information", {
	method: "GET",
	headers: {
		"x-rapidapi-key": "cc1be2c279msh0c79bca34154d17p122150jsn9ba23118deaf",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
    .then((data) => {
        return data.json()
       
    })
    .then((data) => {
        console.log(data)
    
        indRecipe.append(
            `<div style="display:flex; flex-direction:column; align-items:center; margin:30px"> <h4 id='recipe-title' style='font-weight:200; font-size:40px; text-align:center; padding:30px'>${data.title}</h4> <img class="recipe-id"src='https://spoonacular.com/recipeImages/${data.image}' style='max-width:200px;max-height:200px'></div>`
        )
        
        indRecipe.append(`<h3> Instructions: </h3>  <p id="recipe-instructions" style="padding: 0px 50px"> ${data.instructions}</p> <br>`)
        indRecipe.append(`<h3> Ingredients: </h3>`)
       
            for(let i=0;i<30;i++){
                indRecipe.append(
                    `  <p id="recipe-ingredients" style="font-size: 20px"> ${data.extendedIngredients[i].original}</p>`
                )
            } 
        
        
            
        
       
    })
    .catch(err => {
        console.error(err);
    });
}
    
const addRecipeData = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const ingredients = document.querySelector('#recipe-ingredients').value.trim();
    const instructions = document.querySelector('#recipe-instructions').value.trim();
    const image = document.querySelector('#recipe-img').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/recipes/searchRecipe', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };


//   document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

searchBut.addEventListener("click", function(event){
    event.preventDefault()
    recipesListEl.children().remove()
    getRecipes()
})


