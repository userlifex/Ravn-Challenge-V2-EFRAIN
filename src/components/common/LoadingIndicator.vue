<template>
  
  <div class="loader-indicator">
      <div class="loader">
        <div class="loader__line">
          <div class="loader__item loader__item--1"></div>
          <div class="loader__item loader__item--7"></div>
        </div>
        <div class="loader__line">
          <div class="loader__item loader__item--2"></div>
          <div class="loader__item loader__item--8"></div>
        </div>
        <div class="loader__line">
          <div class="loader__item loader__item--3"></div>
          <div class="loader__item loader__item--9"></div>
        </div>
        <div class="loader__line">
          <div class="loader__item loader__item--4"></div>
          <div class="loader__item loader__item--10"></div>
        </div>
        <div class="loader__line">
          <div class="loader__item loader__item--5"></div>
          <div class="loader__item loader__item--11"></div>
        </div>
        <div class="loader__line">
          <div class="loader__item loader__item--6"></div>
          <div class="loader__item loader__item--12"></div>
        </div>
      </div>
      <p class="loader__text low-emphasis">Loading</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">

.loader-indicator{
    display: flex;
    align-items: center;
}

.loader {
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}.loader__line {
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
}

.loader__item {
  width: 2px;
  height: 5px;
  border-radius: 2px;
  background: $text-light;
  animation: lds-spinner 1.2s linear infinite;

}

.loader__text{
    margin-left: 8px;
    font-weight: bold;
}

.loader__line:nth-child(1) {
  transform: rotate(0deg);
}
.loader__line:nth-child(2) {
  transform: rotate(30deg);
}
.loader__line:nth-child(3) {
  transform: rotate(60deg);
}
.loader__line:nth-child(4) {
  transform: rotate(90deg);
}
.loader__line:nth-child(5) {
  transform: rotate(120deg);
}
.loader__line:nth-child(6) {
  transform: rotate(150deg);
}
.loader__item--1 {
    animation-delay: -1.1s;
}
.loader__item--2 {
    animation-delay: -1.0s;
}
.loader__item--3 {
    animation-delay: -0.9s;
}
.loader__item--4 {
    animation-delay: -0.8s;
}
.loader__item--5 {
    animation-delay: -0.7s;
}
.loader__item--6 {
    animation-delay: -0.6s;
}
.loader__item--7 {
    animation-delay: -0.5s;
}
.loader__item--8 {
    animation-delay: -0.4s;
}
.loader__item--9 {
    animation-delay: -0.3s;
}
.loader__item--10 {
    animation-delay: -0.2s;
}
.loader__item--11 {
    animation-delay: -0.1s;
}
.loader__item--12 {
    animation-delay: 0s;
}



@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
