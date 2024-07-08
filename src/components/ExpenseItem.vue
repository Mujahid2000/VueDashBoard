<template>
    <div class="flex justify-between items-center 2xl:mb-2">
      <div class="flex items-center space-x-2  2xl:space-y-7">
        <div :class="['p-2 rounded-full', iconBgColor]">
         <img :src='iconClass' alt="" class="w-[3rem] h-[3rem]">
        </div>
        <div>
          <p class="text-gray-700 font-[popinsRegular] font-medium text-[1rem]">{{ item.category }}</p>
          <p class="text-[#404852] font-[popinsRegular] text-[0.875rem]">{{ item.time }} • {{ item.description }}</p>
        </div>
      </div>
      <p :class="['text-lg font-[popinsRegular] text-[#273240] font-semibold', amountColor]">{{ item.amount }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExpenseItem',
    props: {
      item: Object,
    },
    computed: {
      iconClass() {
        switch (this.item.icon) {
          case 'shopping-cart':
            return 'https://i.ibb.co/0yVsqdK/Group-4.png';
          case 'bus':
            return 'https://i.ibb.co/dmS7nqk/Group-4-1.png';
          case 'home':
            return 'https://i.ibb.co/LCR62FY/Group-4-2.png';
          case 'utensils':
            return 'https://i.ibb.co/0K5r60w/Group-4-3.png';
          case 'film':
            return 'https://i.ibb.co/JdrxsvN/Group-4-4.png';
          default:
            return '';
        }
      },
      iconBgColor() {
        switch (this.item.icon) {
          case 'shopping-cart':
            return 'https://i.ibb.co/0yVsqdK/Group-4.png';
          case 'bus':
            return 'https://i.ibb.co/dmS7nqk/Group-4-1.png';
          case 'home':
            return 'https://i.ibb.co/LCR62FY/Group-4-2.png';
          case 'utensils':
            return 'https://i.ibb.co/0K5r60w/Group-4-3.png';
          case 'film':
            return 'https://i.ibb.co/JdrxsvN/Group-4-4.png';
          default:
            return '';
        }
      },
      amountColor() {
        return this.item.amount.startsWith('-') ? 'text-red-500' : 'text-green-500';
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
  