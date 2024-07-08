<template>
    <div class="flex  justify-center mx-6 h-[95vh]  pr-6 md:flex-row ">
      <!-- Left Section -->
      <div class="xl:w-[45rem] 2xl:w-[71rem] mx-auto bg-white rounded-l-xl px-[4rem] py-[3.2rem]">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-[2.3rem] font-[popinsSemiBold] font-semibold">Expenses</h1>
          <div class="flex gap-2">
            <div class="flex items-center -space-x-4">
  <img
    alt="user 1"
    src="https://i.ibb.co/MGkLZSg/Bitmap-1.png"
    class="relative inline-block h-[2rem] w-[2rem] cursor-pointer rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 2"
    src="https://i.ibb.co/3BFQC6v/Bitmap-2.png"
    class="relative inline-block h-[2rem] w-[2rem] cursor-pointer rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  <img
    alt="user 3"
    src="https://i.ibb.co/vHCwgqP/Bitmap-3.png"
    class="relative inline-block h-[2rem] w-[2rem] cursor-pointer rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
  
</div>
<div>
    <img src="https://i.ibb.co/cyfTGjk/Group-3-Copy-7.png" alt="" class="h-[2rem] w-[2rem] cursor-pointer rounded-full">
</div>
          </div>
        </div>
        <p class="text-[#101010] font-normal -mt-[1rem] font-[popinsRegular] text-[1rem] mb-4">01 - 25 March, 2020</p>
        <div class="p-4 rounded-lg mb-4">
          <!-- Placeholder for the bar chart -->
          <div class="flex items-end h-32 space-x-3 ">
    <div
      v-for="(bar, index) in bars"
      :key="index"
      :style="{ height: bar.height + 'px' }"
      :class="bar.color"
      class="w-6 bg-opacity-75"
    ></div>
  </div>
        </div>
        <div>
          <div class="flex justify-between ">
            <h2 class="text-xl font-[popinsBold] font-bold mb-2">Today</h2>
            <img src="https://i.ibb.co/mt5P8R4/Group-3.png" alt="" class="w-5 mt-2 h-1">
          </div>
          <hr>
          <ExpenseItem
            v-for="(item, index) in todayExpenses"
            :key="index"
            :item="item"
          />
        </div>
        <div class="mt-4">
          <h2 class="text-xl font-[popinsBold] font-bold mb-2">Monday, 23 March 2020</h2>
          <hr>
          <ExpenseItem
            v-for="(item, index) in previousExpenses"
            :key="index"
            :item="item"
          />
        </div>
      </div>
  
      <!-- Right Section -->
      <div class="xl:w-[21rem] 2xl:w-[25rem] bg-[#F9FAFC] px-[3rem] rounded-r-xl md:mt-0">
        <div class="  pt-[4rem] pb-[3rem] rounded-tr-xl">
          <h2 class=" text-[1.24rem] pb-[1.5rem] font-bold font-[avenir] ">Where your money go?</h2>
          <div v-for="(category, index) in categories" :key="index" class="mb-4">
            <div class="flex justify-between items-center  py-2">
              <span class="text-[#273240] font-[popinsRegular] font-medium">{{ category.name }}</span>
              <span class="text-gray-700 font-[popinsRegular]">{{ category.amount }}</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div
                :style="{ width: (category.amount / totalAmount * 100) + '%' }"
                class="h-full font-[popinsRegular] bg-[#31BA96] rounded-full"
              ></div>
            </div>
          </div>
        </div>
        <div class="bg-[#EDF0F6] rounded-xl px-[1.57rem]   w-[16rem] h-[17.125rem]  mx-auto">
            <div class="flex items-center gap-16 mt-[-2rem] justify-between absolute">
                <img src="https://i.ibb.co/4F63vyw/Illustration-1.png" alt=""><img src="https://i.ibb.co/Z6LVmFd/Illustration.png" alt="">
            </div>
          <div class="xl:pt-14 2xl:pt-16">
            <h2 class="text-xl font-bold font-[popinsRegular] mb-2">Save more money</h2>
          <p class="text-gray-600  font-[popinsRegular]  mb-3">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <button class="bg-[#101010] font-[popinsRegular] text-[0.9125rem] w-full text-white py-[0.81rem] px-[3.87rem] rounded-lg">VIEW TIPS</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ExpenseItem from './ExpenseItem.vue';
  
  export default {
    name: 'Content',
    components: {
      ExpenseItem,
    },
    data() {
      return {
        avatars: [
          'https://i.ibb.co/MGkLZSg/Bitmap-1.png',
          'https://i.ibb.co/MGkLZSg/Bitmap-1.png',
          'https://i.ibb.co/MGkLZSg/Bitmap-1.png',
        ],
        todayExpenses: [
          { icon: 'shopping-cart', category: 'Grocery', amount: '-326.800', time: '5:12 pm', description: 'Belanja di pasar' },
          { icon: 'bus', category: 'Transportation', amount: '-15.000', time: '5:12 pm', description: 'Naik bus umum' },
          { icon: 'home', category: 'Housing', amount: '-185.750', time: '5:12 pm', description: 'Bayar Listrik' },
        ],
        previousExpenses: [
          { icon: 'utensils', category: 'Food and Drink', amount: '-156.000', time: '5:12 pm', description: 'Makan Steak' },
          { icon: 'film', category: 'Entertainment', amount: '-35.200', time: '5:12 pm', description: 'Nonton Bioskop' },
        ],
        categories: [
          { name: 'Food and Drinks', amount: 872400 },
          { name: 'Shopping', amount: 1378200 },
          { name: 'Housing', amount: 928500 },
          { name: 'Transportation', amount: 420700 },
          { name: 'Vehicle', amount: 520000 },
        ],
        bars: [
        { height: 60, color: 'bg-blue-300' },
        { height: 100, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 40, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 40, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 80, color: 'bg-blue-300' },
        { height: 40, color: 'bg-blue-300' },
        { height: 60, color: 'bg-blue-300' },
        { height: 120, color: 'bg-blue-600' }, 
        { height: 80, color: 'bg-blue-300' },
      ],
      };
    },
    computed: {
      totalAmount() {
        return this.categories.reduce((sum, category) => sum + category.amount, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  @font-face {
    font-family: avenir;
    src: url('../assets/AvenirNextLTProRegular.ttf');
}
  @font-face {
    font-family: popinsBold;
    src: url('../assets/Poppins-Bold.ttf');
}
  @font-face {
    font-family: popinsRegular;
    src: url('../assets/Poppins-Regular.ttf');
}
  @font-face {
    font-family: popinsSemiBold;
    src: url('../assets/Poppins-SemiBold.ttf');
}
  </style>
  