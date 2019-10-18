const view = {}
view.showComponent = function(name) {
    let app = document.getElementById('app');
    switch (name) {
        case 'food':
            app.innerHTML = component.food;
            break;
        case 'register':
            app.innerHTML = component.register;
            let link = document.getElementById('login-link')
            link.onclick = linkClickHandler
            function linkClickHandler(){
                view.showComponent('login')
            }
            break;
        case 'login':
            app.innerHTML = component.login;
            break;
        default:
            break;
    }
}