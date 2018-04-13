// Vue demo site
// Bulit with Vuetify Material Design Component Framework -- https://vuetifyjs.com

var hayStack = '.n@fktearogl';
var fool = [4,9,1,5,9,8,2,3,7,4,5,7,3,9,8,11,7,10,6,5,0,1,9];

Vue.component('kontor', {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: '',
        }
    },
    mounted: function () {
        for (var i = 0; i < fool.length; i++) {
            this.message += hayStack[fool[i]];
        }
    }
});

Vue.component('book', {
    props : ['imgsrc','price','title'],
    template: '<v-flex d-flex xs12 sm12 md12 lg6 xl4><v-card light color="white"><hcard><v-flex xs4><bookimg v-bind:src="imgsrc" v-bind:height="200"></bookimg></v-flex><v-flex xs9><bookheading>{{title}}</bookheading><bookdesc><slot></slot></bookdesc><price>{{price}}</price></v-flex></hcard></v-card></v-flex>',
});

Vue.component('bookheading', {
    template: '<h2 class="headline mb-0"><slot></slot></h2>',
});

Vue.component('bookdesc', {
    template: '<p><slot></slot></p>',
});

Vue.component('bookimg', {
    props : ['src','height'],
    template: '<v-card-media v-bind:src="src" v-bind:height="height" contain></v-card-media>',
});

Vue.component('hcard', {
    template: '<v-container fluid grid-list-xs><v-layout row><slot></slot></v-layout></v-container>',
});

Vue.component('price', {
    template: '<v-chip color="light-blue darken-3" text-color="white">kr <slot></slot>,- (+ mva)</v-chip>',
});

Vue.component('infocard', {
    props: ['color'],
    template: '<v-flex d-flex xs12 sm12 md6 lg6 xl6><v-card dark v-bind:color="color"><v-card-text><slot></slot> </v-card-text></v-card></v-flex>',
});