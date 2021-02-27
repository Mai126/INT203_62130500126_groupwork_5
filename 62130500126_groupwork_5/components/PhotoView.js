app.component('photo-view',{
    props:["dog"],
    template:
    /*html*/
    `
    <img @click="clickImage(dog.id)" :src="dog.img" class="img-fluid rounded">
            
    <div class="d-flex justify-content-between align-items-center mt-3 px-2 ">
        <h4>{{dog.name}} </h4><div class="btn"><span class="heart"><i class="fa fa-heart" aria-hidden="true" @click="clickLike(dog.id)" :class="{like: dog.like == true}"></i></span></div>
    </div>
    <div class="mt-2 px-2"> <small>{{dog.description}}</small> </div>
    <div class="px-2">
        <h3>{{dog.price}}</h3>
    </div>
    `,
    methods:{
        clickLike(id){
            this.$emit('click-like',id)
        },
        clickImage(id){
            this.$emit('click-image',id)
        }
    }
})