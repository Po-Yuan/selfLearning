//////Vue 3.0

const { createApp, ref } = Vue;
console.log(createApp);
const vm = createApp({
    setup() {
        const message = ref('Test Vue 3.0');
        return {
            message
        }
    }
});

vm.mount('#app');

//2.0的寫法 
//const vm = new Vue({
//    data: {
//        message: 'hello vue!'
//    }
//});

//vm.$mount('#app');