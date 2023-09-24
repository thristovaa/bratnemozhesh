<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <img src="logo.png" alt="logo">
  <div class="flex justify-center items-center">
      <div class="h-[350px] w-[250px] border-white border-[1px] black-card-bg rounded-[25px] flex flex-col align-start justify-between p-[22px]">
        <div class="text-[18px] leading-[20px] text-start text-white font-black">
          Брат, не можеш да целунеш долната част на обувката на играча срещу теб. Направи го, пий два шота или излез от играта.
        </div>
        <div class="text-[16px] text-start text-white font-black">
          Тази карта носи 2 точки.
        </div>
      </div>
  </div>
  <div class="relative w-full overflow-hidden" id="carousel-container">
    <div class="flex transition-transform duration-500 ease-in-out" id="carousel-post">
        <div class="flex justify-center items-center bg-teal-400"  v-for="(post, index) in posts" :key="index">{{post}}</div>
    </div>
    <div class="flex justify-center items-center mt-[1rem]">
      <button id="prevBtn" @click="moveToPrev">Previous</button>
      <button id="nextBtn" @click="moveToNext">Next</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentIndex: 0,
      posts: [1,2,3],
      autoMoveInterval: null,
    };
  },
  computed: {
    carouselStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
    dots() {
      return Array.from({ length: this.posts.length }, (_, index) => index);
    },
  },
  methods: {
    updateCarousel() {
      carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

      const activeDot = dotsContainer.querySelector('.active-dot');
      if (activeDot) {
          activeDot.classList.remove('active-dot');
      }
      dotsContainer.children[currentIndex].classList.add('active-dot');
    },
    moveToNext() {
    currentIndex = (currentIndex + 1) % posts.length;
    updateCarousel();
    },
    moveToPrev() {
      currentIndex = (currentIndex - 1 + posts.length) % posts.length;
      updateCarousel();
    },
    goTo(index) {
      this.currentIndex = index;
      this.updateCarousel();
    },
    autoMove() {
      this.moveToNext();
    },
  },
  mounted() {
    this.updateCarousel();

    // Automatic movement
    this.autoMoveInterval = setInterval(this.autoMove, 3000);

    // Pause on hover
    this.$el.addEventListener('mouseenter', () => {
      clearInterval(this.autoMoveInterval);
    });

    this.$el.addEventListener('mouseleave', () => {
      this.autoMoveInterval = setInterval(this.autoMove, 3000);
    });
  },
};

</script>
