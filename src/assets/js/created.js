// alert("Hello! I am an alert box!!");


// function insertCart(a) {
//     // var pPrice = document.getElementById("pPrice").value;
//     var pId = document.getElementById(a).value;
//     // alert(pId + " -  " + a);
//     const request = {
//         // orderItemId: 1,
//         productId: pId,
//         // price: pPrice,
//         quantity: 1
//     };

//     fetch("http://localhost:1234/orderItem/insertIntoCard", {
//             method: 'POST', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(request),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             //alert("ok")
//         })
//         .catch((error) => {
//             console.log('Error:', error);
//         });
// }