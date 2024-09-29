<script>
</script>

<template>
    <div class="header-panel">
        <label>Fitness Tracker</label>
        <div class="header-buttons-div">
            <button>Profile</button>
            <button>Excersizes</button>
            <button>Workouts</button>
        </div>
    </div>
</template>

<style scoped>
.header-panel {
  height: 10vh;
  width: 100vw;
  background-color: #2e4a97;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}

.header-buttons-div {
  display: flex;
  flex-direction: row;
}
</style>