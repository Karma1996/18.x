Vue.component('user',{
    template: '<a v-bind:href="\'/user/\' + username">@{{username}}</a>',
    props: ['username'],
    methods: {}
})

var app = new Vue({
    el: '#app'
})