let cart = [];

function showCategory(category) {
    if (category === 'cakes') {
        window.location.href = 'cakes_new.html';
    } else if (category === 'donuts') {
        window.location.href = 'donuts_new.html';
    } else if (category === 'pastries') {
        window.location.href = 'pastries_new.html';
    }
}

function showCakeOptions(name, basePrice) {
    let pounds = prompt("Enter the weight (1, 2, or 5 pounds):");
    let quantity = prompt("Enter the quantity:");
    let price;

    if (pounds == 1) {
        price = basePrice * quantity;
    } else if (pounds == 2) {
        price = (basePrice + 200) * quantity;
    } else if (pounds == 5) {
        price = (basePrice + 500) * quantity;
    } else {
        alert("Invalid weight entered.");
        return;
    }

    cart.push({ product: name, pounds, quantity, price });
    alert(name + " has been added to your cart.");
}

function showDonutOptions(name, basePrice) {
    let quantity = prompt("Enter the quantity:");
    let price = basePrice * quantity;

    cart.push({ product: name, quantity, price });
    alert(name + " has been added to your cart.");
}

function showCreamFilledOptions() {
    let subCategory = prompt("Enter the type (Strawberry, Chocolate, Vanilla):");
    let sparkle = confirm("Add sparkle on top?");
    let quantity = prompt("Enter the quantity:");
    let basePrice = 450;

    if (subCategory.toLowerCase() === 'strawberry' || subCategory.toLowerCase() === 'chocolate' || subCategory.toLowerCase() === 'vanilla') {
        let price = basePrice * quantity;

        if (sparkle) {
            price += 50;
        }

        cart.push({ product: subCategory + ' Cream Filled Donut', quantity, price });
        alert(subCategory + " Cream Filled Donut has been added to your cart.");
    } else {
        alert("Invalid type entered.");
    }
}

function showPastryOptions(name, basePrice) {
    let quantity = prompt("Enter the quantity:");
    let price = basePrice * quantity;

    cart.push({ product: name, quantity, price });
    alert(name + " has been added to your cart.");
}
