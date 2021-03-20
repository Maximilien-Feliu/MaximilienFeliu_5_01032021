function getHttpRequest (method, url, boolean, productId = null, datas = null) {

    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            
            } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                reject(alert('Error 404'));
            }
        };

        if (productId == null) {
            request.open(method, url, boolean);        
              
        } else {
            request.open(method, url + productId, boolean);
        }
        
        request.send(datas);
    })
}

function postHttpRequest (method, url, datas) {

    return new Promise (function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                resolve(JSON.parse(this.responseText));
            
            } else if (this.readyState == XMLHttpRequest.DONE && this.status == 404) {
                reject(alert('Error 404'));
            }
        };
        request.open(method, url);
        request.setRequestHeader('Content-type', 'application/json');
        request.send(datas);    
    })
}



