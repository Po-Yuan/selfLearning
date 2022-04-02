//////Vue 3.0

const { createApp, ref } = Vue;
console.log(createApp);
const vm = createApp({
    setup() {
        const message = ref('Test Vue 3.0');
        const count = ref(0);
        return {
            message,
            customId: "item_01",
            isBtnDisabled: true,
            isBtnHidden: false,
            isSelected: true,
            picked: 1,
            checkedNames: ['Jack'],
            count,
            isShow: true,
            notShow:false
        }
    },
    computed: {
        msgStyle: () => {
            return {
                'border': this.count === 6 ? "red solid 2px" : "",
                'color': this.count === 6 ? "red" : ""
            }
        }
    },
    methods: {
        plus(event) {
            console.log(event);
            console.log(event.target.tagName);
            console.log(this.count);
            this.count++;
        }
    }
}).mount('#app');

//vm.mount('#app');

//2.0的寫法 
//const vm = new Vue({
//    data: {
//        message: 'hello vue!'
//    }
//});

//vm.$mount('#app');