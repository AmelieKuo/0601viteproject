<script setup>
import { ref, onMounted } from "vue";

// 需改成 composition ref(false) 寫法

// 打開 menu
  function showMenu() {
    const menu = document.getElementById('menu');
    const menuParent = document.getElementById('menuParent');

    menu.classList.remove('-top-100%');
    menu.classList.add('top-0', 'transition-1500', 'ease-in-out', 'opacity-100');
    menuParent.classList.remove('after:hidden');
    menuParent.classList.add('after:block');
  };

  // 關閉 menu
  function closeMenu() {
    const menu = document.getElementById('menu');
    const menuParent = document.getElementById('menuParent');

    menu.classList.remove('top-0');
    menu.classList.add('-top-100%', 'transition-3000', 'ease-in-out', 'opacity-0');
    menuParent.classList.remove('after:block');
    menuParent.classList.add('after:hidden');
  };

</script>

<template>
      
  <!-- /^bg-(.+)$/ .bg-\[url\(\/Bg\.png\)\]     .bg-gradient-to-b   /^bg-([-\w]{3,})$/  /^bg-gradient-to-([rltb]{1,2})$/-->
  <div class="font-sans color-white w-100% min-h-[100vh] bg-gradient-to-b from-[#313132] from-0% to-[#161618] to-100%">
    <div class="w-100% h-100vh bg-[url(/Bg.png)] bg-no-repeat bg-right bg-contain grid grid-cols-[1fr_25%] grid-rows-[10%_1fr_40%] md:grid-rows-[10%_1fr_30%] lg:grid-cols-[11%_auto] lg:grid-rows-[11%_1fr_22%] lg:bg-[url(/Bg.png)] lg:bg-no-repeat lg:bg-center">

      <!-- left Menu -->
      <div class="col-start-1 col-end-2 row-start-1 row-end-2 lg:row-end-4 p-[8px_24px] box-border lg:flex lg:flex-col lg:justify-between lg:items-center lg:border-r-1 lg:border-solid lg:border-[#707070]">
        <h2 class="text-[35px] font-bold lg:p-t-40px lg:text-[40px]">CAT</h2>
        <dev class="hidden p-b-40px lg:block">
          <ul class="flex flex-col gap-32px">
            <li><img src="t.png" alt="" class="block"></li>
            <li><img src="IN.png" alt="" class="block"></li>
            <li><img src="f.png" alt="" class="block"></li>
          </ul>
        </dev>
      </div>
      <!-- end:left Menu -->

      <!-- Main Menu --> 
      <header class="col-start-2 col-end-3 row-start-1 row-end-2 p-[8px_24px] lg:p-[40px_55px_0px_0px]">
        <nav id="menuParent" class="w-100% h-100% flex justify-center items-center after:hidden after:content-[''] after:w-100vw after:h-150vh after:bg-white after:bg-opacity-40 after:absolute after:top-0px after:left-0px after:z-1 lg:after:bg-opacity-100 lg:leading-loose lg:justify-end lg:h-auto">
          <div class="w-100% lg:hidden"  @click="showMenu">
            <img src="hamburger.svg" alt="" class="block m-l-auto h-auto w-24px hover:ease-in-out hover:duration-300 hover:scale-135">
          </div>

          <ul id="menu" class="absolute bg-black w-100% min-h-[40vh] right-0 -top-100% z-9 flex-col gap-20px p-24px box-border lg:static lg:bg-transparent lg:min-h-[auto] lg:flex lg:flex-row lg:justify-end lg:gap-55px lg:p-0px lg:w-auto">
            <li class="h-30px lg:hidden" id="close" @click="closeMenu">
              <img src="close.svg" alt="" class="color-white text-white block m-l-auto hover:ease-in-out hover:duration-300 hover:scale-135">
            </li>
            <li class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Home</li>
            <li class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Article</li>
            <li class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">About</li>
            <li class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Location</li>
            <li class="text-white text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">News</li>
            <li><img src="zoom_in_24px.png" alt="" class="p-[10px_0] block"></li>
          </ul>
        </nav>
      </header>
      <!-- end:Main Menu --> 

      <section class="col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-2">
        <div class="flex items-start justify-between lg:p-[40px_20px_20px_20px] lg:h-100% lg:justify-around">
          <div class="hidden max-w-[320px] w-100% lg:block">
              <h2 class="text-28px leading-48px tracking-[0.1em] mb-24px border-b-1 border-solid border-[#707070] relative after:content-[''] after:w-50% after:h-1px after:bg-[#EFC862] after:absolute after:-bottom-1px after:left-0px">/ 01</h2>
              <ul>
                <li class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">About Cat</li>
                <li class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">Senses</li>
                <li class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">Behavior</li>
              </ul>
          </div>
          <div class="p-[5%_40px] lg:p-[0%_0px_0%_40px] lg:max-w-400px">
            <h1 class="font-bold text-36px m-b-24px leading-[1] lg:text-72px">Eat Everyday</h1>
            <p class="text-12px leading-30px tracking-0.1em lg:text-21px">The cat is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</p>
          </div>
        </div>
      </section>

      <footer class="col-start-1 col-end-3 row-start-3 row-end-4 lg:col-start-2 bg-[#00000] bg-opacity-40 backdrop-blur-[20px] p-[24px_40px] flex flex-col justify-around md:flex-row md:gap-24px md:items-center lg:p-[0px_40px] ">
        <div class="box-border md:w-50%">
          <h2 class="font-bold tracking-0.4em text-14px lg:p-[12px_0] lg:text-16px">Event</h2>
          <p class="text-[#A1A1A1] tracking-0.2em text-14px lg:text-16px">Cat’s Foods @Anythings About Cat Club </p>
          <p class="text-white tracking-0.2em text-14px lg:text-16px">SF - Sat,July 14 / 15-17PM</p>
          <a href="#" class="p-t-12px flex gap-16px decoration-0 lg:text-16px">
            <span class="text-[#EFC862] text-xs">●</span>
            <span class="text-[#A1A1A1] text-xs">●</span>
            <span class="text-[#A1A1A1] text-xs">●</span>
          </a>
        </div>
        <div class="flex flex-row-reverse justify-between md:w-50% lg:flex-row">
          <div class="w-30% max-w-[80px] lg:max-w-600px lg:max-h-[100%] lg:w-100%">
            <img src="Left.png" alt="" class="block w-100% object-cover lg:h-100%">
          </div>
          <div class="flex flex-col gap-16px box-border max-w-65% lg:max-w-100% lg:p-l-24px">
            <h2 class="font-bold tracking-0.4em text-14px lg:text-16px lg:p-t-12px">News</h2>
            <p class="leading-18px text-13px text-12px lg:text-13px">The average lifespan of pet cats has risen in recent decades.</p>
            <a href="#" class="block color-[#EFC862] decoration-0 font-bold leading-22px text-14px">Read more</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
.styleBody{
  /* font-family: Tuffy, sans-serif;
  color: white;
  background-image: url('Bg.png'),linear-gradient(180deg, #313132 0%, #161618 100%);
  background-repeat: no-repeat,no-repeat;
  background-size: contain,cover;
  background-position: center top,center center;

  width: 100%;
  min-height: 100vh;


  display: grid;
  grid-template-columns: 11% auto;
  grid-template-rows: 11% auto 22%; */
}

h2{
  font-family: "Tuffy",sans-serif;
}

img{
  /* display: block; */
}

.leftMenu{
  /* grid-column-start: 1; 
  grid-column-end: 2; 
  grid-row-start: 1; 
  grid-row-end: 4; 

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-right: 1px solid #707070; */
}

.leftMenu h2{
  /* padding: 40px;

  font-size: 40px;
  font-weight: 700px;
  line-height: 60px; */
}

.leftMenu .socialMedia{
  /* padding: 40px; */
}

.leftMenu .socialMedia ul{
  /* display: flex;
  flex-direction: column;
  gap: 32px; */
}

header{
  /* padding: 40px 55px;
  grid-column-start: 2;
  grid-column-end: 3; 
  grid-row-start: 1; 
  grid-row-end: 2;  */
}

header nav{
  /* line-height: 2; */
}

header nav ul{
  /* display: flex;
  justify-content: flex-end;
  gap:55px; */
}

header nav ul li{
  /* font-size: 18px; */
}

header nav ul li > img{
  /* padding: 10px 0; */
}

header nav ul li:hover,header nav ul li:active{
  /* color: #EFC862;
  text-decoration: underline; */
}

section{
  /* grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3; */
}

.content{
  /* display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 10% 10% 10% 5%; */
}

.content .contentLeft{
  /* max-width: 320px;
  width: 100%; */
}

.content .contentLeft h2{
  /* font-size: 28px;
  line-height: 48px;
  letter-spacing: 0.1em;

  margin-bottom: 24px;
  border-bottom: 1px solid #707070;
  position: relative; */
}

.content .contentLeft h2:after{
  /* content:'';
  width: 50%;
  background-color:#EFC862;
  height: 1px;

  display: block;

  position: absolute;
  bottom: -1px;
  left: 0; */
}

.content .contentLeft ul{
  
}

.content .contentLeft ul li{
  /* font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #646464;
  padding: 4px 0; */
}

.content .contentLeft ul li:hover,.contentLeft ul li:active{
  /* font-size: 21px;
  line-height: 30px;
  color: #FFFFFF; */
}

.content .contentRight{
  /* max-width: 400px; */
}

.content .contentRight h1{
  /* font-weight: 700;
  font-size: 72px;
  margin-bottom: 24px; */
}

.content .contentRight p{
  /* font-weight: 400;
  font-size: 21px;
  line-height: 30px;
  letter-spacing: 0.1em; */
}

footer{
  /* grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;

  display: flex;
  gap:24px;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px); */
}

footer h2{
  /* font-weight: 700;
  letter-spacing: 0.4em; */
}

footer p{
  /* letter-spacing: 0.2em;
  color: #A1A1A1; */
}

footer .event{
  /* width: 50%;
  padding: 40px; */
}

footer .event h2{
  /* padding: 12px 0;
  font-weight: 700;
  letter-spacing: 0.4em; */
}

footer .event p{
  /* padding: 12px 0; */
}

footer .event p:nth-child(3){
  /* color: white; */
}

footer .event a{
  /* padding-top: 12px;
  display: flex;
  gap: 16px;

  text-decoration: none; */
}

footer .event a span{
  /* color: #A1A1A1;
  zoom: 50%; */
  /* font-size: 6px; */
}

footer .event a span:first-child{
  /* color: #EFC862; */
}

footer .news{
  /* width: 50%;
  display: flex; */
}

footer .news img{

}

footer .news .newsContent{
  /* padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px; */
}

footer .news p{
  /* line-height: 18px;
  font-size: 13px; */
}

footer .news a{
  /* display: block;
  color: #EFC862;
  text-decoration: none;
  font-weight: 700;
  line-height: 22px; */
}
/* *{ outline: 1px solid greenyellow;} */
</style>


