<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/" class="navbar-logo">MyApp</a>
        <button @click="toggleMenu" class="navbar-toggle">
          ☰
        </button>
      </div>
      <ul :class="{ 'navbar-menu': true, 'is-active': isMenuActive }">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isMenuActive: false, // State to manage mobile menu toggle
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuActive = !this.isMenuActive; // Toggle the menu visibility
      },
    },
  };
  </script>
  
  <style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0; /* Remove the padding */
    margin: 0;  /* Remove any margin */
    width: 100%;
    background-color: #333;
    color: #fff;
    box-sizing: border-box; /* Include border and padding in the element's total width */
  }
  
  .navbar-logo {
    font-size: 1.5rem;
    color: #fff;
    text-decoration: none;
  }
  
  .navbar-toggle {
    display: none;
    background: none;
    color: #fff;
    border: none;
    font-size: 1.5rem;
  }
  
  .navbar-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0; /* Remove any margin */
    padding: 0; /* Remove any padding */
  }
  
  .navbar-menu a {
    color: #fff;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    .navbar-toggle {
      display: block;
    }
    .navbar-menu {
      display: none;
      flex-direction: column;
      background-color: #333;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding: 1rem 0;
      margin: 0; /* Ensure it touches the left and right borders */
    }
    .navbar-menu.is-active {
      display: flex;
    }
  }
  </style>
  