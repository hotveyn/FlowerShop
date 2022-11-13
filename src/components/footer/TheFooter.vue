<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <h2><span class="orange-text">Flower</span> Shop</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis eos et exercitationem laudantium
          provident quibusdam reiciendis voluptas! At dolorum eos vel? Alias dignissimos ducimus explicabo labore
          nostrum soluta tempora.
        </p>
      </div>
      <footer class="footer-links">
        <!-- Fix: links -->
        <ul class="links">
          <li><h3>Links</h3></li>
          <router-link
              class="rt-link"
              to="/">
            <li class="links__info">
              Home
            </li>
          </router-link>
          <router-link
              class="rt-link"
              to="/shop">
            <li class="links__info">
              Shop
            </li>
          </router-link>
          <router-link
              class="rt-link"
              to="/">
            <li class="links__info">
              About
            </li>
          </router-link>
          <router-link
              class="rt-link"
              to="/login">
            <li class="links__info">
              Login
            </li>
          </router-link>
          <router-link
              class="rt-link"
              to="/registration">
            <li class="links__info">
              Reg
            </li>
          </router-link>
        </ul>
        <ul class="contact">
          <li><h3>Contact</h3></li>
          <li class="contact__address contact__info">
            26985 Brighton Lane, Lake Forest, CA
          </li>
          <li class="contact__mail contact__info">
            support@Flowers.com
          </li>
          <li class="contact__phone contact__info">
            +7 962 648 66 82
          </li>
        </ul>
      </footer>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.footer {
  background-color: rgba(69, 69, 69, 1);
  font-family: 'Roboto', sans-serif;

  .footer-container {
    @include myFlex($ai: start);
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 0;

    .footer-info {
      @include myFlex($ai: start, $fd: column);

      h2 {
        font-size: 32px;
        font-weight: 500;
        color: white;
        margin-bottom: 15px;

        .orange-text {
          color: $myOrange;
        }
      }

      p {
        max-width: 300px;
        color: rgba(217, 217, 217, 1);
        line-height: 20px;
      }
    }


    .footer-links {
      @include myFlex($ai:start);
      max-width: 524px;
      width: 100%;
      margin-top: 10px;
      h3 {
        color: white;
        font-size: 22px;
        padding-bottom: 15px;
      }

      .rt-link {
        text-decoration: none;
      }

      .contact__info, .links__info {
        font-weight: 300;
        font-size: 17px;
        margin-bottom: 10px;
        color: $myGrey;
        position: relative;
      }
      .contact__info{
        margin-bottom: 20px;
      }
      .contact__address::before{
        content: url("@/assets/icons/map.png");
        position: absolute;
        left:-30px;
      }
      .contact__mail::before{
        content: url("@/assets/icons/mail.png");
        position: absolute;
        left:-30px;
      }
      .contact__phone::before{
        content: url("@/assets/icons/phone.png");
        position: absolute;
        left:-30px;
      }
    }
  }
}
</style>
