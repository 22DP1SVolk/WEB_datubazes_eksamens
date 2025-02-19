<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <footer class="footer">
      <div class="footer-container">
            <div class="footer-section">
                <h2>artMUSE𖦹</h2>
                <a href="#">Help</a>
            </div>
            <div class="footer-section">
                <h2>Follow Us</h2>
                <div class="social-icons">
                    <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.x.com" target="_blank"><i class="fab fa-x"></i></a>
                    <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            © 2025 artMUSE𖦹 All rights reserved.
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  
<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
.footer {
    background: #997b66;
    color: white;
    padding: 10px 20px;
    font-size: 12px;
}
.footer-container {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    gap: 40px;
}
.footer-section {
    margin: 5px;
}
.footer-section h2 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 14px;
    margin-bottom: 3px;
}
.footer-section a {
    color: white;
    text-decoration: none;
    font-size: 12px;
    transition: color 0.3s;
}
.footer-section a:hover {
    color: rgb(245, 235, 224);
}
.social-icons a {
    margin: 0 5px;
    color: white;
    font-size: 16px;
    transition: color 0.3s;
}
.social-icons a:hover {
    color: rgb(245, 235, 224);
}
.footer-copyright {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 10px;
    color: white;
    margin-top: 5px;
}
  
  </style>
  