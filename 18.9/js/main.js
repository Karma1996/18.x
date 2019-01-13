//全局组件
Vue.component('alert-global',{
    template:'<button @click="on_click">全局弹弹弹</button>',
    methods: {
        on_click: function(){
            alert('Yo.');
        }
    }
});

new Vue({
   el: '#app'
});

//局部组件
var alert_component = {
    template: '<button @click="on_click">局部弹弹弹</button>',
    methods: {
        on_click: function(){
            alert('Yo.');
        }
    }
};

new Vue({
    el: '#seg1',
    components: {
        'alert-local': alert_component
    }
});
new Vue({
    el: '#seg2',
    components: {
        'alert-local': alert_component
    }
});
