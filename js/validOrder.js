class ValidOrder {

    getValidOrder () {

        let validOrder = JSON.parse(localStorage.getItem('ordered'));
        let orderId = document.getElementsByClassName('order_id')[0];
        let orderAmount = document.getElementsByClassName('order_total_amount')[0];

        orderId.innerHTML = validOrder[0];
        orderAmount.innerHTML = validOrder[1];
    }
}

let validOrder = new ValidOrder;
validOrder.getValidOrder();