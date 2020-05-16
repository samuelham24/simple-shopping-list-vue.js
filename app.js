var shoppingList = new Vue({    //instances
    el: '#shopping-list',       //id tujuan yang dihubungkan ke elemen
    data: {
        state: "default",               //State sebuah data, jika tidak sesuai maka bernilai false
        header: 'Shopping List App',    //Judul kontennya
        newItem: '',                    //Data string kosong buat add data
        items: [                        //Array data
            {
                label: '2Kg of Fish',
                purchased: false,
            }, 
            {
                label: '1Kg of Bananas',
                purchased: true,
            },   
            {
                label: '5 pack of tea',
                purchased: false,
            },     
        ]
    },
    computed:{
        characterCount(){
            return this.newItem.length;
        },
        reversedItems(){
            return this.items.slice(0).reverse();
        }
    },
    methods: {
        saveItem: function(){
            this.items.push({
                label: this.newItem,
                purchased: false,
            });
            this.newItem = '';
        },
        changeState: function(newState){
            this.state = newState;
            this.newItem='';
        },
        togglePurchased: function(item){
            item.purchased = !item.purchased;
        }
    }
});