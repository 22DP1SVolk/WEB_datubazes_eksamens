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
  background:rgb(245, 235, 224);
  padding: 16px;
  width: 100vw; /* Ensures full viewport width */
  box-sizing: border-box; /* Prevents extra spacing issues */
}

.signup-box {
  width: 90%;  /* Allows responsiveness */
  max-width: 400px; /* Keeps the form at a good size */
  margin: 0 auto; /* Ensures centering */
  background: rgba(255, 255, 255, 0.9);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  /* text-align: center; Ensures child elements are centered */
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

.signup-input:focus {
  border-color: #997b66;
}

.signup-button {
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

.signup-button:hover {
  opacity: 0.9;
}

.login-text {
  text-align: center;
  margin-top: 16px;
  color: #666;
}

.login-link {
  color: #997b66;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
