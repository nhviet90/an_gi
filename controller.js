const controller = {};
controller.initAuth = function () {
  view.showComponent('loading')
  firebase.auth().onAuthStateChanged(onAuthStateChangedHandler)

  function onAuthStateChangedHandler(user) {
    if (user && user.emailVerified) {
      if (user.email == "soul20290@yahoo.com.vn") {
        view.showComponent('admin')
        controller.loadAllFood();
      } else {
        view.showComponent('food')
      }

    } else {
      view.showComponent('login')
    }
  }
<<<<<<< HEAD
}


controller.register = async function (registerInfo) {
  let email = registerInfo.email;
  let password = registerInfo.password;
  let displayName = registerInfo.firstname + " " + registerInfo.lastname;
  let button = document.getElementById('register-submit-btn')
  button.setAttribute('disabled', true)
  view.setText('register-error', '')
  view.setText('register-success', '')

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    await firebase.auth().currentUser.updateProfile({
      displayName: displayName
    })
    await firebase.auth().currentUser.sendEmailVerification()
    view.setText('log-in-success', 'An verification email has been sended to your email address!')
  } catch (error) {
    view.setText('register-error', error.message)
  }
  button.removeAttribute('disabled')
}


controller.login = async function (logInInfo) {
  let email = logInInfo.email;
  let password = logInInfo.password;
  let button = document.getElementById('login-submit-btn')
  button.setAttribute('disabled', true)
  view.setText('login-error', "")
  view.setText('login-success', '')

  try {
    let result = await firebase.auth().signInWithEmailAndPassword(email, password)

    // if (result.user && result.user.emailVerified) {
    //     view.showComponent('chat');
    // } else {
    //     throw Error("You must verified your email!")
    // }
    if (!result.user.emailVerified || !result.user) {
      throw new Error('You must verified your email !')
    }
    if (result.email == "soul20290@yahoo.com.vn") {
      view.showComponent('admin')
    }

  } catch (error) {
    view.setText('login-error', error.message)
    button.removeAttribute('disabled')
  }
}

controller.addFood = async function (foodInfo) {
  let input = document.getElementById('add_btn_done')
  // view.disable('add_btn_done')
  if (foodInfo.foodType == "mon_chinh") {
    await firebase
      .firestore()
      .collection('an-gi')
      .doc('5uaBOwRQcaMm7RghiV05')
      .update({
        list: firebase.firestore.FieldValue.arrayUnion(foodInfo)
      })
  } else if (foodInfo.foodType == "mon_canh") {
    await firebase
      .firestore()
      .collection('an-gi')
      .doc('7Qc8rOsrhIyeCObdZDJ1')
      .update({
        list: firebase.firestore.FieldValue.arrayUnion(foodInfo)
      })
  } else {
    await firebase
      .firestore()
      .collection('an-gi')
      .doc('A1h8aoJkDr5o0HCDE3Fh')
      .update({
        list: firebase.firestore.FieldValue.arrayUnion(foodInfo)
      })
  }
}

controller.loadAllFood = async function () {
  let result = await firebase
    .firestore()
    .collection('an-gi')
    .get()
  let allFood = result.docs.map(function (doc) {
    let food = doc.data()
    food.id = doc.id
    return food
  })
  model.saveMonChinh(allFood);
  model.saveMonCanh(allFood);
  model.saveMonRau(allFood);
  console.log(model.monChinh.list[1].foodName);

=======
  
  
  controller.register = async function (registerInfo) {
    let email = registerInfo.email;
    let password = registerInfo.password;
    let displayName = registerInfo.firstname + " " + registerInfo.lastname;
    let button = document.getElementById('register-submit-btn')
    button.setAttribute('disabled', true)
    view.setText('register-error', '')
    view.setText('register-success', '')

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('log-in-success', 'An verification email has been sended to your email address!')
    } catch (error) {
        view.setText('register-error', error.message)
    }
    button.removeAttribute('disabled')
}


controller.login = async function (logInInfo) {
    let email = logInInfo.email;
    let password = logInInfo.password;
    let button = document.getElementById('login-submit-btn')
    button.setAttribute('disabled', true)
    view.setText('log-in-error', "")
    view.setText('log-in-success', '')

    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)

        // if (result.user && result.user.emailVerified) {
        //     view.showComponent('chat');
        // } else {
        //     throw Error("You must verified your email!")
        // }
        if (!result.user.emailVerified || !result.user) {
            throw new Error('You must verified your email !')
        }

    } catch (error) {
        view.setText('log-in-error', error.message)
        button.removeAttribute('disabled')
    }
>>>>>>> 1d58878ed1cb4d2bf797ef837251849fb8cb06f8
}