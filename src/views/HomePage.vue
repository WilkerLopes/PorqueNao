<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="title-page">POR QUE NÃO?</div>
      <div id="page-view">
        <div class="load" v-if="isLoading">
          <div class="card-preview">
            <div class="ball"></div>
            <div class="loading-board board1"></div>
            <div class="loading-board board2"></div>
            <div class="loading-board board3"></div>
          </div>
        </div>
        <div class="error" v-if="!isLoading && hasError">
          <div class="card-preview">
            <div class="text">
              <div class="icon-card">😭</div>
              <div class="title-card">Noooooo!!</div>
              <div class="description-card">Não conseguimos carregar nenhuma informação, tente novamente mais tarde. Sentimos muito!</div>
            </div>
          </div>
        </div>
        <div class="card" v-if="!isLoading && !hasError">
          <h1>{{ product.name }}</h1>
          <img :src="product.image" alt="" />
          <div class="card-description">
            <p>{{ product.description }}</p>
          </div>
          <a :href="product.link" target="_blank" rel="noopener noreferrer">Explorar</a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import { useProductStore } from "@/stores/product";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
  },

  setup() {
    const store = useProductStore();
    const { product, loading, error } = storeToRefs(store);

    store.loadProduct();

    return {
      product,
      error,
      isLoading: loading,
      hasError: error,
    };
  },
});
</script>

<style>
ion-content::part(background) {
  background-image: linear-gradient(#2d2d2d, #6f6f6f) !important;
}
.title-page {
  height: 72px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 700;
  padding-bottom: 12px;
  position: absolute;
  top: 0;
  left: 0;
}
#page-view {
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#page-view h1 {
  margin: 0 auto 12px;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.01rem;
  opacity: 0.82;
}
#page-view img {
  width: 90%;
  max-width: 450px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}
#page-view .card-description {
  background-color: var(--ion-color-dark);
  width: 60%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px 16px 32px;
  border-radius: 16px;
}
#page-view p {
  margin: 0;
  font-size: 0.8em;
  font-weight: 400;
  text-transform: lowercase;
}
#page-view p::first-letter {
  text-transform: uppercase;
}
#page-view a {
  padding: 12px 32px;
  border-radius: 8px;
  background: var(--ion-text-color);
  color: var(--ion-color-light-contrast);
  font-weight: 900;
  transform: translateY(-50%);
  text-decoration: none;
}

.card-preview {
  width: 210px;
  height: 360px;
  border-radius: 10px;
  margin: auto;
  background-color: white;
  position: relative;
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.15);
  color: var(--ion-color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.loading-board {
  width: 52px;
  height: 4px;
  position: absolute;

  background-color: rgb(255, 90, 95);

  border-radius: 4px;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  animation: loadingBoard 3s linear both infinite;
}

.loading-board.board2 {
  opacity: 0;
  transform: translate(-50%, -50%);
  animation-delay: 1s;
}
.loading-board.board3 {
  opacity: 0;
  transform: translate(-50%, -50%);
  animation-delay: 2s;
}
.ball {
  width: 14px;
  height: 14px;

  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -10px;
  margin-top: -10px;

  border-radius: 50%;
  background-color: rgb(255, 90, 95);
  opacity: 0;

  animation: jumpingBall 1s 1s forwards cubic-bezier(0.87, 0.04, 0.26, 0.95) infinite;
}
@keyframes loadingBoard {
  0% {
    transform: translate(100%, -1500%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(-200%, 1500%);
    opacity: 0;
  }
}
@-webkit-keyframes loadingBoard {
  0% {
    transform: translate(100%, -900%);
  }
  100% {
    transform: translate(-100%, 900%);
  }
}
@keyframes jumpingBall {
  0% {
    transform: translate(0, -50px) scaleX(1);
    opacity: 1;
  }
  49% {
    transform: translate(0, -2px) scaleX(1.05);
  }
  100% {
    transform: translate(0, -50px);
    opacity: 1;
  }
}

.icon-card {
  font-size: 48px;
  margin: 0 0 8px;
}
.title-card {
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 12px;
}
.description-card {
  font-size: 0.8em;
  font-weight: 400;
  margin: 0 0 12px;
  opacity: 0.62;
}
</style>
