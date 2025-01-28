<template>
  <nav class="navbar">
    <div class="navbar-content">
      <a href="/" class="navbar-logo">artMUSE𖦹</a>
      <button @click="toggleMenu" class="navbar-toggle" aria-label="Toggle navigation">
        ☰
      </button>
      <ul :class="['navbar-menu', { 'is-active': isMenuActive }]">
        <li class="menu-item"><a href="/">Home</a></li>
        <li class="menu-item"><a href="/gallery">Gallery</a></li>
        <li class="menu-item"><a href="/artists">Artists</a></li>
        <li class="menu-item"><a href="/about">About</a></li>
        <li class="menu-item"><a href="/contact">Contact</a></li>
      </ul>
      <!-- Log In and Sign Up buttons -->
      <div class="auth-buttons">
        <a href="/login" class="auth-btn login">Log In</a>
        <!-- <a href="/signup" class="auth-btn signup">Sign Up</a> -->
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuActive: false, // State for menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive; // Toggle menu visibility
    },
  },
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}

.navbar {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0.74rem 0;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  /* border-bottom: 1px solid #ddd; */
}

.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.navbar-logo {
  font-size: 2rem;
  color: #6b5447;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  margin-bottom: 1rem; /* Space between logo and menu */
}

.navbar-toggle {
  display: none;
  background: none;
  color: #6b5447;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  align-self: left;
}

/* Default menu styling */
.navbar-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item a {
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.menu-item a:hover {
  color: #9e8c76;
}

/* Styling for auth buttons */
.auth-buttons {
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 2rem; /* Position buttons to the far right */
}

.auth-btn {
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #6b5447;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.login {
  background-color: #fff; /* Log In button color */
}

.login:hover {
  color: #9e8c76; /* Hover color for Log In button */
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-toggle {
    display: block; /* Show hamburger menu */
  }

  .navbar-content {
    flex-direction: row; /* Arrange logo and toggle button in one row */
    justify-content: space-between; /* Space between logo and toggle */
    width: 90%; /* Ensure the content spans the width */
  }

  .navbar-menu {
    display: none; /* Hide menu by default */
    flex-direction: column;
    gap: 1rem;
    background-color: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.is-active {
    display: flex; /* Show menu when active */
  }

  .menu-item a {
    font-size: 1.2rem;
    padding: 0.8rem 0;
    text-align: left;
  }

  .auth-buttons {
    flex-direction: column; /* Stack buttons vertically on small screens */
    gap: 0.5rem;
    margin-top: 1rem;
    position: relative;
    right: unset; /* Reset right positioning for smaller screens */
  }
}
</style>