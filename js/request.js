const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('id');

if (productId == null) {
    productId = '';
}

function getHttpRequest (method, url, boolean) {

    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            
            } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                reject(alert('Error 404'));
            }
        };

        request.open(method, url, boolean);        
        request.send();  
    })
}



