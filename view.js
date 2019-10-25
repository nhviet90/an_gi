const view = {}

const validators = {
    require(str) {
        return str
    },
    email(str) {
        return str.includes('@')
    },
    password(str) {
        return str.length >= 6
    }
}

view.showComponent = function (name) {
    let app = document.getElementById('app');
    switch (name) {
        case 'food':
            app.innerHTML = component.food;
            break;
        case 'register': {
            app.innerHTML = component.register;
            let link = document.getElementById('login-link')
            link.onclick = linkClickHandler

            let form = document.getElementById('register-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('login')
            }

            function formSubmitHandler(event) {
                event.preventDefault()
                let registerInfo = {
                    firstname: form.firstname.value,
                    lastname: form.lastname.value,
                    email: form.email.value,
                    password: form.password.value,
                    confirmPassword: form.confirmPassword.value
                }

                let validateResult = [

                    view.validate(registerInfo.firstname, validators.require, 'firstname-error', 'Invalid firstname'),


                    view.validate(registerInfo.lastname, validators.require, 'lastname-error', 'Invalid lastname'),
                    view.validate(registerInfo.email, validators.email, 'email-error', 'Invalid email!'),
                    view.validate(registerInfo.password, validators.password, 'password-error', 'Invalid password!'),
                    view.validate(registerInfo.confirmPassword, function (str) {
                        return str === registerInfo.password
                    }, 'confirm-password-error', 'Invalid confirm password')
                ]
                if (allPassed(validateResult)) {
                    controller.register(registerInfo)
                }


            }
            break;
        }
        case 'login': {
            app.innerHTML = component.login;
            let link = document.getElementById('register-link');
            link.onclick = linkClickHandler;

            let form = document.getElementById('login-form')
            form.onsubmit = formSubmitHandler

            function linkClickHandler() {
                view.showComponent('register')

            }

            function formSubmitHandler(event) {
                event.preventDefault();

                let loginInfo = {
                    email: form.email.value,
                    password: form.password.value
                }
                let validateResult = [
                    view.validate(loginInfo.email, validators.email, 'email-error', 'Invalid email'),
                    view.validate(loginInfo.password, validators.password, 'password-error', 'Invalid password')
                ]
                if (allPassed(validateResult)) {
                    controller.login(loginInfo)
                }
            }
            break;
        }
        case 'admin': {
            app.innerHTML = component.navAmin + component.adminPage;
            let add_food_form = document.getElementById("add_food_form");
            let add_food_btn = document.getElementById("add-btn");
            add_food_btn.onclick = function () {
                add_food_form.style.display = "block"
            }
            let close_add_food_form = document.getElementById("close-add-food-form");
            close_add_food_form.onclick = function () {
                add_food_form.style.display = "none"
                form.foodType.value = "mon_chinh"
                form.foodName.value = "";
                form.foodMaterial.value = "";
                form.foodRecipe.value = "";
            }
            let form = document.getElementById('add-form');
            form.onsubmit = addFoodHandler
            let signOutBtn = document.getElementById('btn-sign-out');
            signOutBtn.onclick = signOutHandler;
            let monChinhMenu = document.getElementById('mon-chinh-menu');
            monChinhMenu.onclick = view.showListFood('monChinh');

            function signOutHandler() {
                firebase.auth().signOut().then(view.showComponent('login'))
            }
            function addFoodHandler(event) {
                event.preventDefault();

                let foodType = form.foodType.value;
                let foodName = form.foodName.value;
                let foodMaterial = form.foodMaterial.value;
                let foodRecipe = form.foodRecipe.value;

                let validateResult = [
                    view.validate(foodName, validators.require, 'food-name-error', 'Please enter food name'),
                    view.validate(foodMaterial, validators.require, 'food-material-error', 'Please enter food material'),
                    view.validate(foodRecipe, validators.require, 'food-recipe-error', 'Please enter food recipe')
                ];
                if (allPassed(validateResult)) {
                    let foodInfo = {
                        foodName: foodName,
                        foodMaterial: foodMaterial,
                        foodRecipe: foodRecipe,
                        foodType: foodType,
                        createdAt: new Date().toISOString()
                    }
                    controller.addFood(foodInfo)
                    add_food_form.style.display = "none";
                    form.foodType.value = "mon_chinh"
                    form.foodName.value = "";
                    form.foodMaterial.value = "";
                    form.foodRecipe.value = "";

                }
            }
            break;
        }
            function allPassed(validateResult) {
                for (let result of validateResult) {
                    if (!result) {
                        return false
                    }

                }
                return true
            }

    }
}

view.setText = function (id, text) {
    document.getElementById(id).innerHTML = text
}


view.validate = function (value, validators, idErrorMessage, errorMessage) {
    if (validators(value)) {
        view.setText(idErrorMessage, '')
        return true
    } else {
        view.setText(idErrorMessage, errorMessage)
        return false
    }
}
view.showListFood = function (name) {
    if (name == 'monChinh') {
        for (let i = 0; i < model.monChinh.list.length; i++) {
            let list = document.getElementById('food-list');
            list.innerHTML += `
            <div>${food.foodName}</div>
            `
        }
    }
}