<template>
  <nav>
    <div>
      <p>Hey there... display name here</p>
      <p class="email">CUrrently loged in as ... email</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
  nav {
    padding: 20px;
    /* border-bottom: 1px solid rgb(126, 218, 183); */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>