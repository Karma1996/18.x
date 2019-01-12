var app = new Vue({
    el: '#app',
    methods: {
        onClick: function () {
            console.log('onClick');
        },
        onEnter: function () {
            console.log('mouse enter');
        },
        onOut: function () {
            console.log('mouse leave');
        },
        onSubmit: function () {
            // e.preventDefault();
            console.log('submitted')
        }
    }
});