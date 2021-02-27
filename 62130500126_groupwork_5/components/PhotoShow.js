app.component('photo-show',{
    props:["dog"],
    template:
    /*html*/
    `
    <div class="largeImg" v-show="dog.show === true"  :class= "{lightbox: dog.show === true}" >
    <i class="fa fa-times" aria-hidden="true" @click="clickImage(dog.id)"></i>
    <img :src="dog.img">
    </div>
    `,
    methods:{
        clickImage(id){
            this.$emit('click-image',id)
        }
    }
})