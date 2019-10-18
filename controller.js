const controller = {};
controller.initAuth = function() {
    view.showComponent('loading')
    firebase.auth().onAuthStateChanged(onAuthStateChangedHandler)
  
    function onAuthStateChangedHandler(user) {
      if(user && user.emailVerified) {
        view.showComponent('food')
      } else {
        view.showComponent('register')
      }
    }
  }
  
  