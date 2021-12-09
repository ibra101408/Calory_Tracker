const ItemCtrl = (function (){
    const Item = function (id, name, calories){
        this.id = id
        this.name = name
        this.calories = calories
    }

    const data = {
        items: [
            {id: 0, name: 'Cookie', calories: 1200},
            {id: 1, name: 'Eggs', calories: 400},
            {id: 2, name: 'Cheese', calories: 650},
        ],
        total: 0
    }

    return{
        logData: function (){
            return data
        }
    }
})();



const UICtrl = (function (){
})();

const App = (function (ItemCtrl, UICtrl) {
    return {
        init: function () {
            console.log('Initializing App')
        }
    }
})(ItemCtrl, UICtrl);

App.init()