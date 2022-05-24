const { createApp, ref, reactive } = Vue;
console.log(createApp);
const vm = Vue.createApp({
    setup() {
        const message = ref('Test Vue 3.0');
        const count = ref(0);
        const today = new Date().toLocaleDateString();
        const numbers = [1, 2, 3, 4, 5, 6];
        const tableData = [];
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
            notShow: false,
            lis: {
                title: 'Vue 3',
                username: 'Vue user',
                time: today
            },
            numbers,
            tableDatas: [{
                name: 'name1',
                cash: 100,
                date: new Date().toLocaleDateString("zh-tw")
            },
            {
                name: 'name2',
                cash: 200,
                date: Date.now()
            },
            {
                name: 'name3',
                cash: 300,
                date: Date.now()
            }
            ]
        }
    },
    data() {
        return {
            num : 10
        }
    },
    computed: {
        msgStyle: () => {
            return {
                'border': this.count === 6 ? "red solid 2px" : "",
                'color': this.count === 6 ? "red" : ""
            }
        },
        evenObject: () => {
            console.log(this.num);
            console.log(this.numbers);
            return this.numbers;
        }
    },
    methods: {
        plus(event) {
            //console.log(event);
            //console.log(event.target.tagName);
            //console.log(this.count);
            this.count++;
        },
        minus(event) {
            this.count--;
            console.log(this.num);
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

//function component test
document.addEventListener("DOMContentLoaded", () => {
    function test() {
        alert('test01');
        this.test02 = () => {
            alert('alert02')
        }
    }
    const func = new test();
    func.test02();

})