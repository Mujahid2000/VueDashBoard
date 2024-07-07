<template>
    <div class="h-[95.6vh] pl-[3rem] w-[22.5rem] bg-[#101010] text-gray-300">
      <div class="p-4 mt-11 items-center">
         <div class="relative inline-block">
    <img
      src="https://i.ibb.co/4RW3yJY/Bitmap.png"
      alt="Avatar"
      class="w-16 h-16 rounded-lg"
    />
    <div
      class="absolute -top-3 -right-4 w-6 h-6 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
    >
      {{ notificationCount }}
    </div>
  </div>
        <div class="pt-3">
          <h2 class="text-[1.875rem] font-[popinsSemiBold] font-semibold">Samantha</h2>
          <p class="text-[1.0625rem] font-[popinsRegular]">samantha@email.com</p>
        </div>
      </div>
      <ul class="mt-20 space-y-[-0.3rem]">
        <li class="p-4  text-[1.5625rem]"><a class="cursor-pointer font-[popinsSemiBold]">Dashboard</a></li>
        <li class="p-4  text-[1.5625rem]"><a class="cursor-pointer font-[popinsSemiBold]">Expenses</a></li>
        <li class="p-4  text-[1.5625rem]"><a class="cursor-pointer font-[popinsSemiBold]">Wallets</a></li>
        <li class="p-4  text-[1.5625rem]"><a class="cursor-pointer font-[popinsSemiBold]">Summary</a></li>
        <li class="p-4  text-[1.5625rem]"><a class="cursor-pointer font-[popinsSemiBold]">Accounts</a></li>
        <li class="p-4  text-[1.5625rem]"><a class="cursor-pointer font-[popinsSemiBold]">Settings</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    props: {
    notificationCount: {
      type: Number,
      default: 4,
    },
  },
  }
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