import PlaidLinkComp from './PlaidLink.vue';

const PlaidLink = {
    install(Vue, options) {
        Vue.component(PlaidLinkComp.name, PlaidLinkComp)
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(PlaidLinkComp)
}

export default PlaidLink;
