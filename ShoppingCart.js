const shoppingCart = {
    
    items : [],
    
    addItem(item) {
        //check if the item is already present in array
        //find() finds the data if present and returns the data
        const existingItem = this.items.find((i) => i.name === item.name);
        if(existingItem){
            existingItem.quantity += item.quantity;
        }
        else{
            this.items.push(item);
        }
        console.log(`${item.name} added to cart`);
    },
    
    removeItem(itemName) {
        //findIndex() find the index of the first occurence of that element
        const index = this.items.findIndex((i) => i.name === itemName);
        if(index !== -1){
            this.items.splice(index , 1);
            console.log(`${itemName} removed from cart`);
        }
        else{
            console.log(`${itemName} not present in cart`);
        }
    },
    
    totalCost(){
        
        this.items.forEach((item) => {
            console.log(`${item.name} x ${item.quantity}`);
        });
        
        const total = this.items.reduce((total , curr) => 
           total + curr.price * curr.quantity , 0);
            
        console.log(`Total : ${total}`);    
        
    }
}

shoppingCart.addItem({name:"Apple" , price:20 , quantity:2});
shoppingCart.addItem({name:"Banana" , price:40 , quantity:2});
shoppingCart.addItem({name:"Apple" , price:20 , quantity:2});
shoppingCart.addItem({name:"Orange" , price:100 , quantity:5});

shoppingCart.removeItem("Banana");

shoppingCart.totalCost();