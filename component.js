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
    <a id="login-link" href="#">Already have an account? Login</a>
    <button id="register-submit-btn" type="submit">Register</button>
  </div>
</form>
</section>
`
component.login = `
<section class="login-container">
<form id="login-form" class="login-form">
  <div class="form-header">
    <h3 class="register-header">Đăng nhập :</h3>
  </div>
  <div class="form-content">
    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email">
      <div id="email-error" class="message-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password">
      <div id="password-error" class="message-error"></div>
    </div>
  </div>
  <div id="login-error" class="message-error"></div>
  <div id="login-success" class="message-success"></div>
  <div class="form-footer">
    <a id="register-link" href="">Not yet have an account? Register</a>
    <button id="login-submit-btn" type="submit">Login</button>
  </div>
</form>
</section>
`


component.loading = `
  <div class="loading-container">
    Loading
  </div>
`
component.navAmin = `
<nav class="nav-admin">
        <div>
            <button class="add-btn" id="add-btn">THÊM MÓN</button>
            <button id="btn-sign-out" class="btn-icon"><i class="fas fa-sign-out-alt"></i></button>
        </div>
    </nav>
`
component.adminPage = `
<form id = "add-form" action="">
        <div class="add_food_form" id="add_food_form">
            <h1>Thêm món</h1>
            <label><b>Loại món ăn</b></label>
            <br>
            <select name="foodType" id="food_type">
                <option value="mon_chinh">Món chính</option>
                <option value="mon_canh">Món canh</option>
                <option value="mon_rau">Món rau</option>
            </select>
            <br>
            <label><b name="foodName">Tên món ăn</b></label>
            <br>
            <input name="foodName" type="text" placeholder="Nhập tên món ăn">
            <div class="message-error" id="food-name-error"></div>
            <label><b>Nguyên liệu</b></label>
            <br>
            <textarea name="foodMaterial" class="food-materia" type="text"
                placeholder="Nhập nguyên liệu"></textarea>
            <div class="message-error" id="food-material-error"></div>
            <label><b>Công thức nấu</b></label>
            <br>
            <textarea name="foodRecipe" class="food-recipe" type="text" placeholder="Công thức nấu"></textarea>
            <div class="message-error" id="food-recipe-error"></div>
            <button type="submit" class="add_btn_done" id="add_btn_done">Hoàn thành</button>
            <button class="close-add-food-form" id="close-add-food-form" type="button">Thoát</button>
        </div>
    </form>
    <section class="food-menu">
        <div class="food-admin-menu" id="mon-chin-menu">
            <img src="img/mon-chinh.png" alt="mon-chinh">
            <br>
            <b>MÓN CHÍNH</b>
            </div>
        <div class="food-admin-menu" id="mon-canh-menu">
            <img src="img/mon-canh.png" alt="mon-canh">
            <br>
            <b>MÓN CANH</b>
        </div>
        <div class="food-admin-menu" id="mon-rau-menu">
            <img src="img/mon-rau.png" alt="mon-rau">
            <br>
            <b>MÓN RAU</b>
            </div>
    </section>
    <section class="food-detail">
        <div id="food-list"><b>DANH SÁCH MÓN</b></div>
        <div id="food-material"><b>NGUYÊN LIỆU</b></div>
        <div id="food-recipe"><b>CÔNG THỨC</b></div>
    </section>
`