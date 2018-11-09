(() =>{
//set up vue instance
const vm = new Vue({
    el : "#app",

    data : {
        message: "Welcome to your first Vue App!",

        targetURL : "http://google.ca",

        vuemessage : "yay! You can haz vue",

        anchorOff : true,

        footermessage: "hi",

        deliciousFruit : [
            {name: "apple", flavour: "tasty"},
            {name: "watermelon", flavour: "sweet"},
            {name: "pear", flavour: "yum"},
        ],

        hazVue : true

    },

    methods : {
        logFruit(e) {
            console.log(e.current.Target);
        }
    }


});


})();