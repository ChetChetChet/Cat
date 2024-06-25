/**function toSearch() {
    const UserInput = document.getElementById("inputBOX").value.toLowerCase();
    const dangerous = [
        "chocolate", 
        "onions", 
        "garlic", 
        "grapes", 
        "raisins", 
        "alcohol", 
        "caffeine", 
        "xylitol",
        "Wine, beer, liquor and food that contains alcohol can result in diarrhea, vomiting, breathing problems, tremors and other serious conditions. Alcohol is toxic to cats and can cause death."
    ];

    const results = dangerous.filter(food => food.includes(UserInput));

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement("p");
            listItem.textContent = result;
            resultsContainer.appendChild(listItem);
        });
    } else {
        resultsContainer.textContent = "No dangerous foods found.";
    }
}

const badFoods = [
    "chocolate",
    "onion",
    "garlic",
    "grapes",
    "raisins",
    "alcohol",
    "caffeine",
    "xylitol",
    "avocado",
    "macadamia nuts",
    "Wine, beer, liquor and food that contains alcohol can result in diarrhea, vomiting, breathing problems, tremors and other serious conditions. Alcohol is toxic to cats and can cause death."
];

function toSearch() {
    const foodInput = document.getElementById("inputBOX").value.toLowerCase();
    const result = document.getElementById("results");
    
    if (foodInput === "") {
        result.textContent = "Please enter a food name.";
        result.style.color = "black";
    } else if (badFoods.includes(foodInput)) {
        result.textContent = `${foodInput} is dangerous for your cat.`;
        result.style.color = "red";
    } else {
        result.textContent = `${foodInput} is safe for your cat.`;
        result.style.color = "green";
    }
}*/

const badFoods = {
    "chocolate": "Chocolate is dangerous for your cat. It contains theobromine, which is toxic to cats.",
    "onion": "Onions can cause gastrointestinal upset and anemia in cats.",
    "garlic": "Garlic is toxic to cats and can cause gastrointestinal upset and anemia.",
    "grapes": "Grapes can cause kidney failure in cats.",
    "raisin ": "Raisins can cause kidney failure in cats.",
    "alcohol": "Wine, beer, liquor and food that contains alcohol can result in diarrhea, vomiting, breathing problems, tremors and other serious conditions. Alcohol is toxic to cats and can cause death.",
    "wine": "Wine, beer, liquor and food that contains alcohol can result in diarrhea, vomiting, breathing problems, tremors and other serious conditions. Alcohol is toxic to cats and can cause death.",
    "beer": "Wine, beer, liquor and food that contains alcohol can result in diarrhea, vomiting, breathing problems, tremors and other serious conditions. Alcohol is toxic to cats and can cause death.",
    "caffeine": "Caffeine is toxic to cats and can cause rapid breathing, heart palpitations, and muscle tremors.",
    "xylitol": "Xylitol is toxic to cats and can cause hypoglycemia, seizures, liver failure, and death.",
    "avocado": "Avocado contains persin, which can cause vomiting and diarrhea in cats.",
    "macadamia nuts": "Macadamia nuts can cause lethargy, vomiting, and hyperthermia in cats.",
    "cheese": "Cats become lactose intolerant as they mature, which means they have trouble digesting dairy products. Consuming high or frequent amounts of dairy products containing lactose can lead to gastrointestinal pain and diarrhea.",
    "yogurt": "Cats become lactose intolerant as they mature, which means they have trouble digesting dairy products. Consuming high or frequent amounts of dairy products containing lactose can lead to gastrointestinal pain and diarrhea.",

};

function toSearch() {
    const foodInput = document.getElementById("inputBOX").value.toLowerCase();
    const result = document.getElementById("results");
    
    if (foodInput === "") {
        result.textContent = "Please enter a food name.";
        result.style.color = "black";
        result.style.fontSize = "30px"
    } else if (badFoods.hasOwnProperty(foodInput)) {
        result.textContent = badFoods[foodInput];
        result.style.color = "red";
        result.style.fontSize = "30px"
        var br = document.createElement("br");
        result.appendChild(br)
        var gif = document.createElement("img");
        gif.src = "sad.gif";
        gif.width = 300;
        gif.style.margin = "10px auto";
        result.appendChild(gif)
    } else {
        result.textContent = `${foodInput} is safe for your cat.`;
        result.style.color = "green";
        result.style.fontSize = "30px"
        var br = document.createElement("br");
        result.appendChild(br)
        var gif = document.createElement("img");
        gif.src = "happy.gif";
        gif.width = 300;
        gif.style.margin = "10px auto";
        result.appendChild(gif)
        result.appendChild(gif)
    }
}
