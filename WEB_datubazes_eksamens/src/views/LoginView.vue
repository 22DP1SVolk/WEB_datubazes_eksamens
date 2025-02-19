// src/views/LoginView.vue
<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Welcome Back</h2>
      <form @submit.prevent="handleSubmit" class="login-form">
        <div>
          <label for="email" class="login-label">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required class="login-input" />
        </div>
        <div>
          <label for="password" class="login-label">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required class="login-input" />
        </div>
        <div class="login-options">
          <div class="remember-me">
            <input type="checkbox" id="remember" v-model="remember" />
            <label for="remember">Remember Me</label>
          </div>
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p class="signup-text">Don't have an account? <a href="/signup" class="signup-link">Sign Up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log({ email: this.email, password: this.password, remember: this.remember });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: rgb(245, 235, 224);
  padding: 16px;
}

.login-box {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 24px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.login-label {
  font-weight: 500;
  color: #555;
}

.login-input {
  width: 100%; /* Ensures full width within its container */
  /* max-width: 360px; Controls excessive stretching */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  box-sizing: border-box; /* Prevents padding from affecting width */
  display: block;
  margin: 0 auto; /* Centers the input fields */
}

.login-input:focus {
  border-color: #997b66;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 5px;
}

.forgot-password {
  color: #997b66;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  background: rgb(245, 235, 224);
  color: black;
  padding: 12px;
  font-weight: bold;
  border-radius: 8px;
  border-color: #997b66;
  transition: opacity 0.3s;
  cursor: pointer;
}

.login-button:hover {
  opacity: 0.9;
}

.signup-text {
  text-align: center;
  margin-top: 16px;
  color: #666;
}

.signup-link {
  color: #997b66;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
