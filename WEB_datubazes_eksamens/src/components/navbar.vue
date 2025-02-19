<template>
  <nav class="navbar">
    <div class="navbar-content">
      <a href="/" class="navbar-logo">artMUSE𖦹</a>
      <button @click="toggleMenu" class="navbar-toggle" aria-label="Toggle navigation">
        ☰
      </button>
      <!-- <div class="border-divider"></div> -->
      <ul :class="['navbar-menu', { 'is-active': isMenuActive }]">
        <li class="menu-item"><a href="/">Home</a></li>
        <li class="menu-item"><a href="/gallery">Gallery</a></li>
        <li class="menu-item"><a href="/lists">Lists</a></li>
        <li class="menu-item"><a href="/about">About</a></li>
        <!-- <li class="menu-item"><a href="/contact">Contact</a></li> -->
      </ul>
      <!-- Log In and Sign Up buttons -->
      <div class="auth-buttons">
        <a href="/login" class="auth-btn login"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#997b66"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg></a>
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

.navbar {
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(245, 235, 224);
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px rgba(245, 235, 224, 3);
  padding: 0.74rem 1rem;
  position: relative;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 5000;
  height: 20px;
  /* box-shadow: 0 10px 20px rgba(255, 241, 230, 1); */
  max-width: 100vw; /* Ensure it doesn't go beyond the viewport */
  overflow: hidden; /* Prevent horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping */
}

/* .navbar::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(to bottom, rgba(255, 241, 230, 0.7), rgba(255, 241, 230, 0));
  filter: blur(10px);
  z-index: 999;
  pointer-events: none;
} */

.navbar-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  flex: 1; /* Allow it to take available space */
  justify-content: center; /* Center the menu */
}

.navbar-logo {
  font-size: 2rem;
  color: #997b66;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  flex: 1;
  text-align: left;
  margin-left: 1rem; /* Move logo more to the left */
  font-size: 2.2rem;
}

.navbar-toggle {
  display: none;
  background: none;
  color: #997b66;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  align-self: left;
}

/* .border-divider {
  width: 100%; 
  height: 1px; 
  background-color: #ddd;
} */

/* Default menu styling */
.navbar-menu {
  display: flex;
  justify-content: center;
  font-weight: bold;
  align-items: center;
  gap: 4rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 2;
  /* font-weight: bold; */
}

.menu-item a {
  color: #655245;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;
}

.menu-item a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.menu-item a:hover {
  color: #997b66;
}

.menu-item a:hover::after {
  background-color: #997b66;
}

/* Styling for auth buttons */
.auth-buttons {
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;
  margin-right: 3rem;
}

/* .auth-btn {
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #6b5447;
  border-radius: 4px;
  transition: background-color 0.3s ease;
} */

/* .login {
  background-color: #fff1e6;
}

.login:hover {
  color: #9e8c76;
} */

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