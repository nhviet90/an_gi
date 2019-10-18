const component = {}
component.food = `
food
`
component.register = `
<section class="register-container">
<form id="register-form" class="register-form">
  <div class="form-header">
    <h3 class="register-header">Ăn gì?</h3>
  </div>
  <div class="form-content">
    <div class="name-wrapper">
      <div class="input-wrapper">
        <input id="input-firstname" type="text" name="firstname" placeholder="Firstname">
        <div id="firstname-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="text" name="lastname" placeholder="Lastname">
        <div id="lastname-error" class="message-error"></div>
      </div>
    </div>
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email">
      <div id="email-error" class="message-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password">
      <div id="password-error" class="message-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="confirmPassword" placeholder="Confirm Password">
      <div id="confirm-password-error" class="message-error"></div>
    </div>
  </div>
  <div id="register-error" class="message-error"></div>
  <div id="register-success" class="message-success"></div>
  <div class="form-footer">
    <a id="register-link" href="">Already have an account? Login</a>
    <button id="register-submit-btn" type="submit">Register</button>
  </div>
</form>
</section>
`

component.loading = `
  <div class="loading-container">
    Loading
  </div>
`