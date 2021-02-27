    const app = Vue.createApp({
        data() {
            return {
                dogs:[
                    {id:'1',name:'Pembroke Welsh Corgi',description:'Among the most agreeable of all small housedogs, the Pembroke Welsh Corgi is a strong, athletic, and lively little herder who is affectionate and companionable without being needy. They are one of the worlds most popular herding breeds.' ,img:'./images/corgi.jpg',price:'30,000฿',like:false,show:false},
                    {id:'2',name:'Shih Tzu',description:'The Shih Tzu is a strong little dog with a small muzzle and normally have large dark brown eyes. They have a soft and long double coat. Although sometimes long, a Shih Tzu will not always have extremely lengthy hair like the Pekingese.  ' ,img:'./images/shitzu.jpg',price:'4,000฿',like:false,show:false},
                    {id:'3',name:'French Bulldog',description:'The French Bulldog is a breed of domestic dog, bred to be companion dogs. The breed is the result of a cross between Toy Bulldogs imported from England, and local ratters in Paris, France, in the 1800s. They are stocky, compact dogs with a friendly' ,img:'./images/bulldog.jpg',price:'25,000฿',like:false,show:false}
                ],
               inputSearch:''
            }
            
        
    },
    methods:{
        toggleLike(id){
            for (let index = 0; index < this.dogs.length; index++) {
                if (this.dogs[index].id == id) {
                    this.dogs[index].like = !this.dogs[index].like;
                } 
            }
        },
        popupImage(id){
            for (let index = 0; index < this.dogs.length; index++) {
                if (this.dogs[index].id == id) {
                    this.dogs[index].show = !this.dogs[index].show;
                } 
            }
        },
      
        

        },
        computed:{
            countLiked(){
                return this.dogs.filter( m => m.like).length
            },
            resultQuery() {
              return this.dogs.filter(showResult => {
                  return showResult.name.toLowerCase().includes(this.inputSearch.toLowerCase())
              })
               
            }
        }
    });
 