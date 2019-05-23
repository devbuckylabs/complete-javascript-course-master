var budgetController = (function () {



    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;    
                  
            data.allItems[type].forEach(function(cur,index,arr){
                sum += cur.value;
            });
            
            data.totals[type] = sum;
            
            
        
    };
    
    var data = {

        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0

        },
        budget: 0,
        percentage: -1

    }






    return {

        addItem: function (type, desc, val) {
            var newItem, Id;
            if (data.allItems[type].length > 0) {

                Id = data.allItems[type].indexOf(data.allItems[type][data.allItems[type].length - 1]) + 1;
            } else {
                Id = 0;
            }


            if (type === 'exp') {
                newItem = new Expense(Id, desc, val)


            } else if (type === 'inc') {
                newItem = new Income(Id, desc, val)
            }

            data.allItems[type].push(newItem);
            return newItem;
        },

        calculateBudget : function(){
            
            calculateTotal('inc');
            calculateTotal('exp');
            
            data.budget = data.totals.inc - data.totals.exp;
            
            if(data.totals.inc > 0)
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            else
                data.percentage = -1;
        },
        
        getBudget :function(){
            
            return{
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                budget: data.budget,
                percentage: data.percentage
                
                
            }
        },
        
        testing: function () {
            console.log(data)
        }
    }


})();



var UIController = (function () {


    var DOMstrings = {

        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeList: '.income__list',
        expensesList: '.expenses__list',
        budget: '.budget__value',
        budgetIncome: '.budget__income--value',
        budgetExpenses: '.budget__expenses--value',
        percentage: '.budget__expenses--percentage'

    }

    return {

        getInput: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)

            }

        },

        addListItem: function (obj, type) {
            var html, newhtml, element;

            if (type === 'inc') {
                element = DOMstrings.incomeList;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesList;
                html = '  <div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button </div></div>';
            }


            html = html.replace('%id', obj.id);
            newhtml = html.replace('%description%', obj.description);
            newhtml = newhtml.replace('%value%', obj.value);

            document.querySelector(element).insertAdjacentHTML('beforeend', newhtml);


        },

        clearInputFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, arr) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },
        
        displayBudget: function(obj){
            
            document.querySelector(DOMstrings.budgetIncome).textContent = obj.totalInc;
            document.querySelector(DOMstrings.budgetExpenses).textContent = obj.totalExp;
            document.querySelector(DOMstrings.budget).textContent = obj.budget;
            if(obj.percentage>0)
            document.querySelector(DOMstrings.percentage).textContent = obj.percentage+' %';
            else
            document.querySelector(DOMstrings.percentage).textContent = '---';
                
             
        },


        getDOMstrings: function () {
            return DOMstrings;

        }

    }


})();



var controller = (function (budgetCtrl, UICtrl) {


    var setupEventListeners = function () {

        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });


    };

    var updateBudget = function () {

            budgetCtrl.calculateBudget();
            
            var budget = budgetCtrl.getBudget();
            
        
            UICtrl.displayBudget(budget);



    };

    var ctrlAddItem = function () {
        var input, newItem;

        input = UICtrl.getInput();
        console.log('input is ' + input.type + input.description + input.value);

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            UICtrl.addListItem(newItem, input.type);

            UICtrl.clearInputFields();
            
            updateBudget();
            
        }




    };


    return {

        init: function () {
            UICtrl.displayBudget(
            {
                totalInc: 0,
                totalExp: 0,
                budget: 0,
                percentage: -1
                
                
            });
            setupEventListeners();
            
        }
    }



})(budgetController, UIController);


controller.init();
