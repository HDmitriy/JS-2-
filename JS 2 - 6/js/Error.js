export const Error = {
 data() {
    return {
        text: ''
    }
}, 

template: `<p class="error-text" v-if="text"> {{text}} </p>  `

};