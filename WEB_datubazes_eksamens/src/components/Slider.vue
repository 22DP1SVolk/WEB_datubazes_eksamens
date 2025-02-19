<template>
    <div class="slideshow-container">
        <div v-for="(slide, index) in slides" :key="index" v-show="index + 1 === slideIndex" class="mySlides fade">
            <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
            <img :src="slide.image" style="width:100%">
            <div class="text">{{ slide.caption }}</div>
        </div>

        <a class="prev" @click="plusSlides(-1)">❮</a>
        <a class="next" @click="plusSlides(1)">❯</a>
    </div>

    <div style="text-align:center">
        <span v-for="(slide, index) in slides" :key="index" class="dot" :class="{ active: index + 1 === slideIndex }" @click="currentSlide(index + 1)"></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slideIndex: 1,
            slides: [
                { image: "https://www.w3schools.com/howto/img_nature_wide.jpg", caption: "Caption Text" },
                { image: "https://www.w3schools.com/howto/img_nature_wide.jpg", caption: "Caption Two" },
                { image: "https://www.w3schools.com/howto/img_nature_wide.jpg", caption: "Caption Three" }
            ]
        };
    },
    methods: {
        plusSlides(n) {
            this.showSlides(this.slideIndex + n);
        },
        currentSlide(n) {
            this.showSlides(n);
        },
        showSlides(n) {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            } else if (n < 1) {
                this.slideIndex = this.slides.length;
            } else {
                this.slideIndex = n;
            }
        }
    },
    mounted() {
        this.showSlides(this.slideIndex);
    }
};
</script>

<style scoped>
/* Add your CSS here */
/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>
