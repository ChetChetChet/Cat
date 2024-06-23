function toSearch() {
    const UserInput = document.getElementById('inputBOX').value.toLowerCase();
    const dangerous = [
        "chocolate", 
        "onions", 
        "garlic", 
        "grapes", 
        "raisins", 
        "alcohol", 
        "caffeine", 
        "xylitol"
    ];

    const results = dangerous.filter(food => food.includes(UserInput));

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement('p');
            listItem.textContent = result;
            resultsContainer.appendChild(listItem);
        });
    } else {
        resultsContainer.textContent = 'No dangerous foods found.';
    }
}