var meals= [
    {
        name: "Beef Tacos",
        description: "Flavorful Mexican tacos with seasoned ground beef",
        alert:"",
        level: "Easy",
        origin: "American",
        rate: 4.6,
        reviews: 278,
        img: "",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        ingredients: ["500g ground beef","8 taco shells","1 onion, diced","2 tablespoons taco seasoning","Shredded lettuce","Diced tomatoes",
            "Shredded cheddar cheese", "Sour cream", "Salsa"],
        instructions: ["Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."],
        nutration: 
        {
            calories: 420,
            carbohydrates: 32,
            fiber: 4,
            protein: 26,
            fat: 20,
            sodium: 780,
        },
        tips:["Drain excess fat from beef for healthier tacos","Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef","Use ground turkey for a lighter option"],
    },

    {
        name: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        alert:"",
        level: "Easy",
        origin: "Mediterranean",
        rate: 4.4,
        reviews: 198,
        img: "",
        prepTime: 15,
        cookTime: 0,
        servings: 2,
        ingredients: ["1 large romaine lettuce","1/2 cup Caesar dressing","1/2 cup parmesan cheese, shaved","1 cup croutons","2 anchovy fillets (optional)","Lemon wedges",
            "Black pepper"],
        instructions: ["Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper."],
        nutration: 
        {
            calories: 320,
            carbohydrates: 18,
            fiber: 3,
            protein: 12,
            fat: 22,
            sodium: 680,
        },
        tips:["Use cold, crisp lettuce for best texture","Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal","Don't dress salad until ready to serve"],

    },
 
    {
        name: "Honey Garlic Salmon",
        description: "Pan-seared salmon with a sweet and savory glaze",
        alert:"",
        level: "Easy",
        origin: "Seafood",
        rate: 4.9,
        reviews: 187,
        img: "",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        ingredients: ["2 salmon fillets (6oz each)","3 tablespoons honey","2 tablespoons soy sauce","4 cloves garlic, minced","1 tablespoon olive oil","1 teaspoon fresh ginger, grated",
            "Sesame seeds for garnish", "Green onions, sliced"],
        instructions: ["Pat salmon fillets dry with paper towels. Season with salt and pepper.",
            "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
            "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
            "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."],
        nutration: 
        {
            calories: 380,
            carbohydrates: 28,
            fiber: 0,
            protein: 35,
            fat: 14,
            sodium: 720,
        },
        tips:["Don't overcook salmon - it should be slightly pink in the center","Use wild-caught salmon for best flavor and nutrition",
            "Let the sauce caramelize slightly for deeper flavor","Pair with steamed broccoli or asparagus for a complete meal"],

    },

    {
        name: "Pad Thai",
        description: "Popular Thai stir-fried noodles with shrimp and peanuts",
        alert:"",
        level: "Intermediate",
        origin: "Asian",
        rate: 4.8,
        reviews: 445,
        img: "",
        prepTime: 20,
        cookTime: 15,
        servings: 2,
        ingredients: ["200g rice noodles","200g shrimp, peeled","2 eggs","3 tablespoons tamarind paste","2 tablespoons fish sauce","1 tablespoon palm sugar",
            "Bean sprouts", "Crushed peanuts", "Lime wedges and cilantro"],
        instructions: ["Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro.",
           ],
        nutration: 
        {
            calories: 540,
            carbohydrates: 62,
            fiber: 4,
            protein: 32,
            fat: 16,
            sodium: 1120,
        },
        tips:["Don't oversoak noodles or they'll be mushy","Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors","Prepare all ingredients before starting to cook"],

    },

    {
        name: "Classic Beef Burger",
        description: "Juicy homemade burger with all the fixings",
        alert:"",
        level: "Easy",
        origin: "American",
        rate: 4.6,
        reviews: 421,
        img: "",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        ingredients: ["500g ground beef (80/20)","4 burger buns","4 slices cheddar cheese","Lettuce leaves","Tomato slices",
            "Red onion, sliced", "Pickles", "Burger sauce or condiments"],
        instructions: ["Season patties generously with salt and pepper on both sides.",
            "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
            "Add cheese slices in the last minute of cooking and cover to melt.",
            "Toast burger buns lightly on the grill or in a pan.",
            "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
           ],
        nutration: 
        {
            calories: 650,
            carbohydrates: 42,
            fiber: 2,
            protein: 38,
            fat: 35,
            sodium: 920,
        },
        tips:["Don't press down on burgers while cooking - keeps them juicy","Make indent in center to prevent burger from puffing up",
            "Let patties rest for 2-3 minutes before serving","Toast buns for better texture and flavor"],

    },

    {
        name: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        alert: `<p class="py-3 ps-5 burgandy-color fw-bold">Extended Preparation Time <br>
        <span class="red-color">This recipe requires more than 45 minutes to prepare. Plan accordingly!</span>
        </p>`,
        level: "Easy",
        origin: "American",
        rate: 4.6,
        reviews: 421,
        img: "",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        ingredients: ["1 cup quinoa","Cherry tomatoes, halved","Cucumber, diced","Red onion, sliced","Kalamata olives",
            "Feta cheese, crumbled", "Fresh parsley", "Tahini dressing"],
        instructions: ["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
           ],
        nutration: 
        {
            calories: 480,
            carbohydrates: 58,
            fiber: 10,
            protein: 18,
            fat: 20,
            sodium: 540,
        },
        tips:["Rinse quinoa well to remove bitter coating","Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge","Add grilled chicken or chickpeas for extra protein"],

    },


];

// store the element to use easily 
var imageWraper= document.getElementById("mealImage");
var ratingContainer= document.getElementById("rates");
var reviewsContainer= document.getElementById("review");
var time= document.getElementById("time");
var cook= document.getElementById("cook");
var serving= document.getElementById("serve");
var levelContainer= document.getElementById("level");
var originContainer= document.getElementById("country");
var mealName=document.getElementById("mealName");
var mealDesc=document.getElementById("mealDesc");
var mealAlert= document.getElementById("alert");
var ingredients=document.getElementById("ingredientsContainer");
var instructionsContainer=document.getElementById("instructionsContainer");

//to prevent duplicate 
var lastIndex= -1;


//make a function for just make an action (not to return a value) and call it to perform the operation or the code inside it.
//the code inside the function is attached to an event, not just operate directly, but operate according to a specified event.
//the function not executed until I call it or invoke.

//need to operate the code (inside the function) when press on the button (Try Another Recipe)
function changeMeal() {
    do {
        var index= Math.floor(Math.random()*meals.length);
    } while(lastIndex == index);
    lastIndex = index;

   
    //to display meals randomly once click on the button
    console.log(meals[index]);

    //display image
    imageWraper.innerHTML= `<img src=${meals[index].img} 
    class="img-fluid rounded-start-4" alt="" id="mealImage">`;

    ratingContainer.innerHTML= `<span id="rates">${meals[index].rate}</span>`;

    reviewsContainer.innerHTML= meals[index].reviews;

    time.innerHTML=meals[index].prepTime;

    cook.innerHTML=meals[index].cookTime;

    serve.innerHTML=meals[index].servings;

    levelContainer.innerHTML=meals[index].level;

    originContainer.innerHTML=meals[index].origin;

    mealName.innerHTML=meals[index].name;

    mealDesc.innerHTML=meals[index].description;

    mealAlert.innerHTML= meals[index].alert;


    //to display the array in html
    var container=``;


    //to display an element contains array use loop (for/while)
    for (var i=0; i < meals[index].ingredients.length; i++){

        //to print only the current index one-by-one (not all the array in the same line)
       // console.log(meals[index].ingredients[i]);

       container += `
                     <div class="d-flex column-gap-3">
                        <div class="ingNum p-2">
                         <p class=""> ${i+1} </p>
                        </div>

                        <div class="ingName p-2">
                          <p class=""> ${meals[index].ingredients[i]} </p>
                        </div>
                     </div> 
                    `;
    }

    ingredients.innerHTML= container;

container=``;

for (var i=0; i<meals[index].instructions.length; i++){

    container += `
                    <div class="d-flex column-gap-3">
                        <div class="instNum p-2">
                         <p class="">${i+1}</p>
                        </div>

                        <div class="instName p-2">
                          <p class="">${meals[index].instructions[i]}</p>
                        </div>
                    </div> 
    
    `;
    instructionsContainer.innerHTML= container;
}





    





}
