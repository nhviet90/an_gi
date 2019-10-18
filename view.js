const view = {}
view.showComponent = function(name) {
    let app = document.getElementById('app');
    switch (name) {
        case 'food':
            app.innerHTML = component.food;
            break;
        case 'register':
            app.innerHTML = component.register;
            break;
    
        default:
            break;
    }
}