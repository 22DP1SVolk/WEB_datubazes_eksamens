<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Navigation Links -->
        <div class="footer-section">
          <h2>Letterboxd</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Pro</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        
        <!-- Social Media Links -->
        <div class="footer-section">
          <h2>Follow Us</h2>
          <div class="social-icons">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <!-- Legal Info -->
        <div class="footer-section">
          <h2>Legal</h2>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="footer-copyright">
        © {{ new Date().getFullYear() }} Letterboxd Clone. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #14181c;
    color: #a0a0a0;
    padding: 2rem 1rem;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: auto;
  }
  
  .footer-section {
    margin-bottom: 1.5rem;
  }
  
  .footer-section h2 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 0.5rem 0;
  }
  
  .footer-section ul li a {
    color: #a0a0a0;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-section ul li a:hover {
    color: white;
  }
  
  .social-icons a {
    margin: 0 0.5rem;
    color: #a0a0a0;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: white;
  }
  
  .footer-copyright {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #707070;
  }
  </style>
  