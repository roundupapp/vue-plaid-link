<template>
  <div class="plaid-link-wrapper">
    <slot name="button" v-bind:onClick="handleOnClick">
      <button class="plaid-link-button" @click="handleOnClick">
        <slot />
      </button>
    </slot>
  </div>
</template>

<script>
export default {
  name: "PlaidLink",
  props: {
    plaidUrl: {
      type: String,
      default: "https://cdn.plaid.com/link/v2/stable/link-initialize.js",
    },
    env: {
      type: String,
      default: "sandbox",
    },
    institution: String,
    selectAccount: Boolean,
    token: String,
    product: {
      type: [String, Array],
      default: function () {
        return ["transactions"];
      },
    },
    receivedRedirectUri: {
      type: String,
      default: null,
    },
    language: String,
    countryCodes: Array,
    isWebView: Boolean,
    clientName: String,
    publicKey: String,
    webhook: String,
    onLoad: Function,
    onSuccess: Function,
    onExit: Function,
    onEvent: Function,
  },
  created() {
    this.loadScript(this.plaidUrl)
      .then(this.onScriptLoaded)
      .catch(this.onScriptError);
  },
  beforeDestroy() {
    if (window.linkHandler) {
      window.linkHandler.exit();
    }
  },
  methods: {
    onScriptError(error) {
      console.error("There was an issue loading the link-initialize.js script");
    },
    onScriptLoaded() {
      let props = {
        clientName: this.clientName,
        env: this.env,
        key: this.publicKey,
        onExit: this.onExit,
        onEvent: this.onEvent,
        onSuccess: this.onSuccess,
        product: this.product,
        selectAccount: this.selectAccount,
        token: this.token,
        webhook: this.webhook,
      };

      if (this.receivedRedirectUri) {
        props.receivedRedirectUri = this.receivedRedirectUri;
      }

      window.linkHandler = window.Plaid.create(props);
      this.$emit("plaidLoaded");
      this.onLoad();
    },
    handleOnClick() {
      const institution = this.institution || null;
      if (window.linkHandler) {
        window.linkHandler.open(institution);
      }
    },
    loadScript(src) {
      return new Promise(function (resolve, reject) {
        if (document.querySelector('script[src="' + src + '"]')) {
          resolve();
          return;
        }

        const el = document.createElement("script");

        el.type = "text/javascript";
        el.async = true;
        el.src = src;

        el.addEventListener("load", resolve);
        el.addEventListener("error", reject);
        el.addEventListener("abort", reject);

        document.head.appendChild(el);
      });
    },
  },
  watch: {
    $props: {
      handler(newVal) {
        if (newVal.token) {
          this.onScriptLoaded();
        }
      },
      deep: true,
    },
  },
};
</script>
