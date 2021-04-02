class ValidOrder {

    constructor () {
        this.getValidOrder();
        this.printOrder();
    }

    // get elements put in localStorage
    getValidOrder () {

        let validOrder = JSON.parse(localStorage.getItem('ordered'));
        let orderId = document.getElementsByClassName('order_id')[0];
        let orderAmount = document.getElementsByClassName('order_total_amount')[0];

        orderId.innerHTML = validOrder[0];
        orderAmount.innerHTML = validOrder[1];
    }

    // the user can print the order
    printOrder () {
        let printOrder = document.getElementsByClassName('print_order')[0];
        printOrder.addEventListener('click', () => {
            window.print();
        });
    }
}

let validOrder = new ValidOrder;
