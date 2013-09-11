var HeroSelectRouter = Backbone.Router.extend({

    initialize: function(options){
        this.model = options.model;
    },

    routes:{
        "home": "home",
        "biaozhun": "biaozhun",
        "biaofeng": "biaofeng",
        "junzheng":"junzheng",
        "all": "all"
    },

    home: function(){
        this.model.set({
            mode: "HOME"
        });
    },
    //标准
    biaozhun: function(){
        this.model.set({
            mode: "BIAOZHUN"
        });
        this.model.criteria.types = ["BIAOZHUN"];
        this.model.filter();
    },
    //标风
    biaofeng: function(){
        this.model.set({
            mode: "BIAOFENG"
        });
        this.model.criteria.types = ["BIAOZHUN", "FENG"];
        this.model.filter();
    },
    //军争
    junzheng: function(){
        this.model.set({
            mode: "JUNZHENG"
        });
        this.model.criteria.types = ["BIAOZHUN", "FENG", "HUO", "LIN", "SHAN", "2012", "2013", "SP"];
        this.model.filter();
    },

    all: function(){
        this.model.set({
            mode: "ALL"
        });
        this.model.criteria.types = ["BIAOZHUN", "FENG", "HUO", "LIN", "SHAN", "2012", "2013", "SP", "SP_EX"];
        this.model.filter();
    }

});