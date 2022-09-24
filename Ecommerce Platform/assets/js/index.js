
class App{
    // HERE WE START A APPLICATION
    shoppingEcommerce(){
        const startingShop = new Shop();
        startingShop.ecommercePlatform();
    }
}

class Product{
    // HERE WE MAKE A VARS FOR THIS APP
    constructor(
        creatorId, creatorName, creatorDateTime, itemId, 
        itemName, itemImg, itemDescr, itemPrice
    ){
        this.creatorId = creatorId,
        this.creatorName = creatorName,
        this.creatorDateTime = creatorDateTime,

        this.itemId = itemId,
        this.itemName = itemName,
        this.itemImg = itemImg,
        this.itemDescr = itemDescr,
        this.itemPrice = itemPrice
    }
}

class Shop{
    // HERE WE RENDER ON SITE OUR ITEMS
    ecommercePlatform(){
        const startItemInput = new ItemInput();
        startItemInput.collectingValueBtn();
    }
}

class ItemInput extends Product{
    // COLLECTING ITEMS FROM INPUT FORM
    itemList = [];

    constructor(){
        super();
    }
    
    collectingValueBtn(){
        const itemInputBtn = document.querySelector('#btn_input');
        const removeBtn = document.querySelector('#btn_remove');

        const inputValueIncluding = () => {
            const creatorName = document.querySelector('#Name-creator').value;

            const itemName = document.querySelector('#Name-input').value;
            const itemImg = document.querySelector('#Img-input').value;
            const itemDesc = document.querySelector('#Desc_input').value;
            const itemPrice = document.querySelector('#Price_input').value;
            
            this.creatorId = Math.floor(Math.random() * 100000);;
            this.creatorName = creatorName;
            this.creatorDateTime = Date();

            this.itemId = Math.floor(Math.random() * 100000);;
            this.itemName = itemName;
            this.itemQuantity = 1;
            this.itemImg = itemImg;
            this.itemDescr = itemDesc;
            this.itemPrice = itemPrice;

            this.creatorName = creatorName;

            const checkingInputValues = () => {

                if( creatorName || itemName || itemImg || itemDesc || itemPrice ){
                    console.log(this.itemList);
                    this.sortingItemsList();
                    
                }else{
                    alert('Fill the fields!')
                }
            };
                
            checkingInputValues();
        };

        itemInputBtn.addEventListener('click', inputValueIncluding);
        removeBtn.addEventListener('click', this.removingItem);
    }

    resetingValueItems(){
        
    }

    sortingItemsList(){
        const createItem = new Product(this.creatorId, this.creatorName, this.creatorDateTime, this.itemId, this.itemName, this.itemImg, this.itemDescr, this.itemPrice);
        this.createItem = createItem;
        this.itemList.push(this.createItem);
        this.renderDataBase();
    }

    renderDataBase(){
        const renderHook = document.querySelector('#render_items');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        const prodItem = this.createItem;
        this.prodItem = prodItem;

        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
                <div class='product-cart-item'>
                    <img src='${prodItem.itemImg}' alt='${prodItem.itemName}' class='img-item'>
                    <div class='product_content'>
                        <h2>${prodItem.itemName}</h2>
                        <p>${prodItem.itemDescr}</p>
                        <p>Item Code: ${prodItem.creatorId}</p>
                        <h3>$${prodItem.itemPrice}</h3>
                        <button id="order-btn">ORDER ITEM</button>
                    </div>
                </div>
        `;
        prodList.append(prodEl);
            
        renderHook.append(prodList);
        
        const removeBtn = document.querySelector('#btn_remove');

        function removeItemFn(){
            const removeInput = document.querySelector('#removeInput').value;
            const listRemoveItems = document.querySelector('#removed-item-list');
            const removedList = [];
            removedList.push(prodItem);            

             if (removeInput == prodItem.creatorId) {
                prodEl.innerHTML = '';
                prodEl.className = 'unvisible';
                console.log(removedList);
                // console.log('Removed Item code: ', prodItem.creatorId);
                alert('Removed Item code: ', prodItem.creatorId);
             }else{
                console.log('Insert a valid Item Code!');
             }
        }

        removeBtn.addEventListener('click', removeItemFn);
    }
}

class DataBaseItems{
    // DATABASE
}

class CheckingAvailable{
    // HERE WE CHECK AVAILABLE OUR ITEMS
}

class OrderItems{
    //  HERE CUSTOMER ORDER ITEM
    
}

class IncludingCustomerAddress{
    // HERE WE COLLECTING INFO FROM CUSTOMER
}

class SendItem{
    // HERE WE SEND ITEM AND DELETE FROM DATABASE
}


const ecommerce = new App();
ecommerce.shoppingEcommerce();
