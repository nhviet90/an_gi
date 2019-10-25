window.onload = admin;
function admin() {
    let add_food_form = document.getElementById("add_food_form");
    let add_food_btn = document.getElementById("add-btn");
    add_food_btn.onclick = function () {
        add_food_form.style.display = "block"
    }
    let close_add_food_form = document.getElementById("close-add-food-form");
    close_add_food_form.onclick = function () {
        add_food_form.style.display = "none"
    }
    let setText = function (id, text) {
        document.getElementById(id).innerText = text
    }
    let validate = function (value, validator, idErrorMessage, errorMessage) {
        if (validator(value)) {
            view.setText(idErrorMessage, '')
            return true
        } else {
            view.setText(idErrorMessage, errorMessage)
            return false
        }
    }
    let food_info = {
        require(str) {
            return str
        }, 
        require(str) {
            return str
        }, 
        require(str) {
            return str
        }
    }
}