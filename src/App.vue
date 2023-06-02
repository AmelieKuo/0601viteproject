<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import domo from './components/demo.vue'
</script>

<template>
  <div class="font-sans color-white w-100% min-h-[100vh] bg-[url(/Bg.png)] bg-no-repeat bg-center bg-gradient-to-b from-[#313132] from-0% to-[#161618] to-100% grid grid-cols-[11%_auto] grid-rows-[11%_1fr_22%] max-[428px]:bg-white ">

    <div class="col-start-1 col-end-2 row-start-1 row-end-4 flex flex-col justify-between items-center border-r-1 border-solid border-[#707070]">
      <h2 class="p-40px text-[40px] font-bold leading-[60px]">CAT</h2>
      <dev class="p-40px">
        <ul class="flex flex-col gap-32px">
          <li><img src="t.png" alt="" class="block"></li>
          <li><img src="IN.png" alt="" class="block"></li>
          <li><img src="f.png" alt="" class="block"></li>
        </ul>
      </dev>
    </div>
    
    <header class="p-[40px_55px] col-start-2 col-end-3 row-start-1 row-end-2">
      <nav class="leading-loose">
        <ul class="flex justify-end gap-55px">
          <li class="text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Home</li>
          <li class="text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Article</li>
          <li class="text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">About</li>
          <li class="text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Location</li>
          <li class="text-18px hover:color-[#EFC862] hover:underline active:color-[#EFC862]">Location</li>
          <li><img src="zoom_in_24px.png" alt="" class="p-[10px_0] block"></li>
        </ul>
      </nav>
    </header>

    <section class="col-start-2 col-end-3 row-start-2 row-end-3">
      <div class="flex items-start justify-between p-[10%_10%_5%_5%]">
        <div class="max-w-[320px] w-100%">
            <h2 class="text-28px leading-48px tracking-[0.1em] mb-24px border-b-1 border-solid border-[#707070] relative after:content-[''] after:w-50% after:h-1px after:bg-[#EFC862] after:absolute after:-bottom-1px after:left-0px">/ 01</h2>
            <ul>
              <li class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">About Cat</li>
              <li class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">Senses</li>
              <li class="text-13px font-[500px] leading-18px color-[#646464] p-[4px_0] hover:text-21px hover:leading-30px hover:color-white active:text-21px active:leading-30px active:color-white">Behavior</li>
            </ul>
        </div>
        <div class="max-w-400px">
          <h1 class="font-bold text-72px m-b-24px leading-[1]">Eat Everyday</h1>
          <p class="text-21px leading-30px tracking-0.1em">The cat is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.</p>
        </div>
      </div>
    </section>

    <footer class="col-start-2 col-end-3 row-start-3 row-end-4 flex bg-[#00000] bg-opacity-40 backdrop-blur-[20px]">
      <div class="w-50% p-40px box-border">
        <h2 class="font-bold tracking-0.4em p-[12px_0]">Event</h2>
        <p class="text-[#A1A1A1] tracking-0.2em">Cat’s Foods @Anythings About Cat Club </p>
        <p class="text-white tracking-0.2em">SF - Sat,July 14 / 15-17PM</p>
        <a href="#" class="p-t-12px flex gap-16px decoration-0">
          <span class="text-[#EFC862] text-xs">●</span>
          <span class="text-[#A1A1A1] text-xs">●</span>
          <span class="text-[#A1A1A1] text-xs">●</span>
        </a>
      </div>
      <div class="w-50% flex">
        <div class="max-h-[100%]">
          <img src="Left.png" alt="" class="block h-100% object-cover">
        </div>
        <div class="p-[40px_24px] flex flex-col gap-16px box-border min-[1122px]:p-[5%_24px]">
          <h2 class="font-bold tracking-0.4em p-[12px_0]">News</h2>
          <p class="leading-18px text-13px">The average lifespan of pet cats has risen in recent decades.</p>
          <a href="#" class="blcok color-[#EFC862] decoration-0 font-bold leading-22px">Read more</a>
        </div>
      </div>
    </footer>

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
*{ outline: 1px solid greenyellow;}
</style>


