let lunches = [];
let removedItem;
let itemNew;
let randomNum;
function addLunchToEnd(lunches, itemNew) {
    lunches.push(itemNew);
    console.log(`${itemNew} added to the end of the lunch menu.`);
    return lunches;
};
function addLunchToStart(lunches, itemNew) {
    lunches.unshift(itemNew);
    console.log(`${itemNew} added to the start of the lunch menu.`);
    return lunches;
};
function removeLastLunch(lunches) {
    if (Number(lunches.length) !== 0) {
        removedItem = lunches.pop();
        console.log(`${removedItem} removed from the end of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return lunches;
};
function removeFirstLunch(lunches) {
    if (Number(lunches.length) !== 0) {
        removedItem = lunches.shift();
        console.log(`${removedItem} removed from the start of the lunch menu.`);
    } else {
        console.log("No lunches to remove.");
    }
    return lunches;
};
function getRandomLunch(lunches) {
    if (lunches.length !== 0) {
        let randomNum = Math.round(Math.random() * (lunches.length));
        console.log(`Randomly selected lunch: ${lunches[randomNum]}`);
    } else {
        console.log("No lunches available.");
    }
    return lunches;
}
function showLunchMenu(lunches) {
    if (lunches.length !== 0) {
        let strMenu = String(lunches).replaceAll(",", ", ");
        console.log(`Menu items: ${strMenu}`);
    } else {
        console.log("The menu is empty.");
    }
    return lunches;
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));
