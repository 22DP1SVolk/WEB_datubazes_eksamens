// src/views/SignupView.vue
<template>
  <div class="signup-container">
    <div class="signup-box">
      <h2 class="signup-title">Create an Account</h2>
      <form @submit.prevent="handleSubmit" class="signup-form">
        <div>
          <label for="name" class="signup-label">Full Name</label>
          <input type="text" id="name" v-model="name" placeholder="Enter your full name" required class="signup-input" />
        </div>
        <div>
          <label for="email" class="signup-label">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required class="signup-input" />
        </div>
        <div>
          <label for="password" class="signup-label">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required class="signup-input" />
        </div>
        <div>
          <label for="confirm-password" class="signup-label">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Confirm your password" required class="signup-input" />
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
      <p class="login-text">Already have an account? <a href="/login" class="login-link">Login</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log({ name: this.name, email: this.email, password: this.password, confirmPassword: this.confirmPassword });
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #ff7eb3, #ff758c);
  padding: 16px;
}

.signup-box {
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.9);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.signup-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 24px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.signup-label {
  font-weight: 500;
  color: #555;
}

.signup-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.signup-input:focus {
  border-color: #ff758c;
}

.signup-button {
  width: 100%;
  background: linear-gradient(to right, #ff7eb3, #ff758c);
  color: white;
  padding: 12px;
  font-weight: bold;
  border-radius: 8px;
  transition: opacity 0.3s;
  cursor: pointer;
}

.signup-button:hover {
  opacity: 0.9;
}

.login-text {
  text-align: center;
  margin-top: 16px;
  color: #666;
}

.login-link {
  color: #ff758c;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
