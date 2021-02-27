app.component('photo-search',{
    template:
    /*html*/
    `
    <div>
    <div v-if="isHidden" @click="toggleCancel">
     <button class="ml-2 p-1 rounded-sm focus:outline-none "><div class="fa fa-search text-red-500"></div></button>
     </div>
     <div v-else>
         <input v-model="inputSearch" class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
         type="text" placeholder="Please enter text for searching photos">
         <button class="ml-2 p-1 rounded-sm focus:outline-none bg-red-400" @click="toggleCancel">Cancel</button>
         </div>
     </div>
     </div>
    
    `,
    data(){
        return{
            isHidden:true,
            inputSearch:''
        }
    },
    methods:{
        toggleCancel(){
            this.inputSearch = '';
            this.isHidden = !this.isHidden;
        }
    },
    watch:{
        inputSearch(){
          this.$emit('search-img',this.inputSearch);
        }
      }
})