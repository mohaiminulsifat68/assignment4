function clickHandle(cases, increase) {
    let previousQuantity = document.getElementById(cases + "-quantity").value;
    let valueOfQuantity = parseInt(previousQuantity);
    //for increase
    if (increase == true) {
        let newQuantity = valueOfQuantity + 1;
        document.getElementById(cases + "-quantity").setAttribute("value", newQuantity);
        //price increase by quantity
        let classType = cases;
        totalPriceCalculator(classType);
    }
    //for decrease
    else if (increase == false && valueOfQuantity > 0) {
        let newQuantity = valueOfQuantity - 1;
        document.getElementById(cases + "-quantity").setAttribute("value", newQuantity);
        //price decrease by quantity
        let classType = cases;
        totalPriceCalculator(classType);
    }
}
//price calculator
function totalPriceCalculator(classType) {
    let ticketQuantity = document.getElementById(classType + "-quantity").value;
    let quantity = parseInt(ticketQuantity);
    if (classType == "firstClass") {
        let total = 150 * quantity;
        document.getElementById(classType + "-price").innerText = "$" + total;
    }
    else {
        let total = 100 * quantity;
        document.getElementById(classType + "-price").innerText = "$" + total;
    }
    let numOfTicketF = document.getElementById("firstClass-quantity").value;
    let quantityOfFirstClass = parseInt(numOfTicketF);
    let numOfTicketE = document.getElementById("economyClass-quantity").value;
    let quantityOfEconomy = parseInt(numOfTicketE);
    //subtotal calculator
    let subTotal = quantityOfFirstClass * 150 + quantityOfEconomy * 100;
    document.getElementById("subtotal").innerText = "$" + subTotal;
    //tax calculator
    let tax = subTotal * (0.1);
    document.getElementById("tax").innerText = "$" + tax;
    //total calculator
    let total = subTotal + tax;
    document.getElementById("total").innerText = "$" + total;
}


