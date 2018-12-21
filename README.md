# vue-plaid-link

A simple Vue component for easy integration with the [Plaid Link drop-in module](https://plaid.com/docs/link/)


## Install

```
npm install vue-plaid-link --save
```

## Example Usage

```vue
<template>
    <section>
        <plaid-link
            env="sandbox"
            publicKey="{PLAID_PUBLIC_KEY}"
            clientName="Test App"
            product="transactions"
            v-bind="{ onSuccess }">
            Open Plaid Link
        </plaid-link>
    </section>
</template>

<script>
import PlaidLink from 'vue-plaid-link'

export default {
    components: { PlaidLink },
    methods: {
        onSuccess (token) {
            console.log(token)
        }
    }
}
</script>
```

Alternatively if you would like to pass in your own view instead of the default button, utilize the ```button``` slot.

```vue
<template>
    <section>
        <plaid-link
            env="sandbox"
            publicKey="{PLAID_PUBLIC_KEY}"
            clientName="Test App"
            product="transactions"
            v-bind="{ onSuccess }">
            <template slot="button" slot-scope="props">
                <a @click="props.onClick">Custom Open Element</a>
            </template>
        </plaid-link>
    </section>
</template>
```

## All Props

Please refer to the [official Plaid Link docs](https://plaid.com/docs/link/) for descriptions on the various Link options.

```vue
<plaid-link
    clientName="Your app name"
    env="sandbox"
    institution={null}
    publicKey={PLAID_PUBLIC_KEY}
    product={'transactions'}
    token={'public-token-123...'}
    webhook="https://webhooks.test.com"
    onEvent={this.handleOnEvent}
    onExit={this.handleOnExit}
    onLoad={this.handleOnLoad}
    onSuccess={this.handleOnSuccess}>
    Title Of Button
</plain-link>
```
