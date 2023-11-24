<template>
  <div class="container">
    <div class="block menu-btn">
      <img class="button" src="../assets/MenuBtn.png" />
    </div>
    <div class="block setting-btn">
      <img class="button" src="../assets/SettingBtn.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh; 
  align-items: flex-start; 
}

.block {
  position: relative;
  margin: 5px;
}

.menu-btn .button {
  position: absolute;
  top: 20px;
  left: 25px;
  transition: transform 0.5s ease; 
}

.menu-btn .button:hover {
  transform: translate(20px, 20px); 
}

.setting-btn .button {
  position: absolute;
  top: 20px;
  right: 25px;
  transition: transform 0.5s ease; 
}

.setting-btn .button:hover {
  transform: translate(-20px, 20px); 
}
</style>

<script>
export default {
  name: "YourComponentName",
};
</script>