var HeroSelectView = Backbone.View.extend({

    events:{
        "click a[data-action=list]": "_listAll",
        "click a[data-action=selectMaster]": "_filterWithMaster",
        "click a[data-action=select]": "_filter",
        "click .item.active":"_select",
        "click a[data-action=search]": "_search",
        "click a[data-action=back]": "_back"
    },

    template: function(){
        return Handlebars.compile($("#heroItemsTemplate").html())
    },

    initialize: function(){
        console.log("Initialize ... Hero size",this.collection.size());
        this.on("render", this.render, this);
    },

    render: function(){
        var self = this;
        this.$(".carousel-inner").html(self.template()({
            heros: self.filterHeros
        }));
        this.$(".carousel-inner div:first-child").addClass("active");
        $("#viewHerosPanle").carousel({
            interval: 2000000
        });
        this._hideOperations();
        this._showHeroZone();
    },

    _hideOperations: function(){
        this.$(".operations").hide();
    },

    displayOperations: function(){
        this.$(".operations").show();
    },

    _filter: function(){
        this.filterHeros = new Array();
        for(var i=0;i<5;i++){
            this.filterHeros.push(this.filterOne());
        }
        this.trigger("render");
    },

    _listAll: function(){
        this.filterHeros = new Array();
        this.filterHeros = _.shuffle(
            _.find(this.collection.toJSON(), function(item){
                return item.available == true    
            }));
        this.trigger("render");
    },

    _search: function(){
        var self = this;
        var searchString = this.$("input[type=text]").val();
        if(!searchString){
            alert("点你妹啊！");
            return
        }
        this.filterHeros = new Array();
        var hero = _.find(self.collection.toJSON(),function(h){
            return h.name === searchString
        });
        if(hero){
            this.filterHeros.push(hero);
            this.trigger("render");
        } else {
            alert("你确定有这货！");
            return
        }
    },

    _filterWithMaster: function(){
        var self = this;
        this.filterHeros = new Array();
        this.filterHeros = this.collection.filterMasterHeros();
        for(var i=0;i<5;i++){
            this.filterHeros.push(self.filterOne());
        }
        this.trigger("render");
    },

    filterOne: function(){
        var self = this;
        while(true){
            var hero = _.first(self.collection.shuffle()).toJSON();
            if(_.find(self.filterHeros, function(h){
                return h.name === hero.name
            }) === undefined ){
                return hero;
            }
        };
    },

    _hideHeroZone: function(){
        this.$(".heroZone").hide();
    },

    _showHeroZone: function(){
        this.$(".heroZone").show();
    },

    _hideViewHero: function(){
        this.$(".viewHero").hide();
    },

    _showViewHero: function(){
        this.$(".viewHero").show();
    },

    _select: function(event){
        var heroUrl = $(event.currentTarget).data("url");
        this.$(".viewHero").html("<img class='selectedHero' src='"+heroUrl+"'></img><a class='btn btn-danger' data-action='back'>BBBBBBBBBBBACK</a>");
        this._hideOperations();
        this._hideHeroZone();
        this._showViewHero();
    },

    _back: function(){
        this._hideViewHero();
        this.displayOperations();
    }
})