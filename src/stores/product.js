import { defineStore } from "pinia";
import { get } from "../services/api.service";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: {
      id: 4,
      name: "Tênis Masculino",
      description: "OS CALÇADOS QUE VÊM GANHANDO ESPAÇO A CADA DIA MAIS NOS PÉS DOS BRASILEIROS, VOCÊ ENCONTRA AQUI !!",
      link: "https://shopee.com.br/T%C3%AAnis-masculino-e-feminino-Zoom-Bondi-6-Caminhada-Academia-Corrida-Promo%C3%A7%C3%A3o-Envio-Imediato-i.736600829.19804518222",
      image: "https://static.shoptimao.com.br/produtos/tenis-nike-sb-charge-suede/06/HZM-2999-006/HZM-2999-006_zoom1.jpg?ts=1584657985",
    },
    loading: true,
    error: false,
  }),
  getters: {
    getProduct: (state) => state.product,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,
  },
  actions: {
    async loadProduct() {
      this.loading = true;
      await get("product/lastProduct")
        .then((product) => {
          this.product = product;
        })
        .catch(() => {
          this.error = true;
        });
      this.loading = false;
    },
  },
});
