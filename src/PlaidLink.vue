<template>
    <button class="plaid-link-button" @click="handleOnClick">
        <slot />
    </button>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'plaid-link',
    props: {
        plaidUrl: {
            type: String,
            default: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js'
        },
        env: {
            type: String,
            default: 'sandbox'
        },
        institution: String,
        selectAccount: Boolean,
        token: String,
        product: {
            type: String,
            default: 'transactions'
        },
        clientName: String,
        publicKey: String,
        webhook: String,
        onSuccess: Function,
        onExit: Function,
        onEvent: Function
    },
    created () {
        Vue.loadScript(this.plaidUrl)
            .then(this.onScriptLoaded)
            .catch(this.onScriptError)
    },
    methods: {
        onScriptError (error) {
            console.error('There was an issue loading the link-initialize.js script')
        },
        onScriptLoaded () {
            window.linkHandler = window.Plaid.create({
                clientName: this.clientName,
                env: this.env,
                key: this.publicKey,
                onExit: this.onExit,
                onEvent: this.onEvent,
                onSuccess: this.onSuccess,
                product: this.product,
                selectAccount: this.selectAccount,
                token: this.token,
                webhook: this.webhook
            })
        },
        handleOnClick () {
            const institution = this.institution || null
            if (window.linkHandler) {
                window.linkHandler.open(institution)
            }
        }
    }
}
</script>
