// for (var i = 0; i < form.elements.length; i++){
//     var curr = form.elements[i];
//     var text = curr.innerText;
//     curr.addEventListener("invalid", function (e) {
//         if(this.willValidate && !this.validity.valid){
//             var li = document.createElement("li");
//             var list = document.getElementById("notValidList");
//             li.textContent = this.validationMessage + text;
//             list.appendChild(li);
//         }
//     });
// }
//
// form.addEventListener("submit", function (e) {
//     if(!this.checkValidity()){
//         alert("111");
//     }
//
//     e.preventDefault();
// });

$(function () {

    $("#mainForm").validate({

        rules: {
            email: {
                required: true,
                email: true
            },
            password1: {
                required: true,
                minlength: 6
            },
            password2: {
                required: true,
                minlength: 6,
                equalTo: "#pswd"
            },
            fName: {
                required: true
            },
            social: {
                url: true
            },
            phone: {
                digits: true
            }
        }
    })
});