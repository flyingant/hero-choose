var HeroSelectView = Backbone.View.extend({

    events:{
        "click a[data-action=list]": "_listAll",
        "click a[data-action=selectMaster]": "_filterWithMaster",
        "click a[data-action=select]": "_filter",
        "click .item.active":"_select",
        "click a[data-action=lock]":"_lock",
        "click a[data-action=search]": "_search",
        "click a[data-action=back]": "_back"
    },

    template: function(){
        return Handlebars.compile($("#heroItemsTemplate").html())
    },

    initialize: function(){
        console.log("Initialize ... Hero size",this.collection.size());
        this.availableHeros = _.shuffle(
            _.filter(this.collection.toJSON(), function(item){
                return item.available == true
            }));
        // encode the chinese words to special ...   
        this.availableHeros = _.map(this.availableHeros, function(hero){
            return _.extend(hero, {extraUrl: escape(hero.url).toLowerCase().split('%u').join('%23U')});
        });
        console.log("Available Hero Size", this.availableHeros.length);
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

    _lock: function(){

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
        this.filterHeros = _.shuffle(this.availableHeros);
        this.trigger("render");
    },

    _search: function(){
        var self = this;
        var searchString = this.$("input[type=text]").val();
        if(!searchString){
            alert("哥们，能给点力么？");
            return
        }
        this.filterHeros = new Array();
        var heros = _.filter(this.availableHeros, function(h){
            return h.name.indexOf(searchString) != -1
        });
        if(heros.length != 0){
            _.each(heros, function(hero){
                self.filterHeros.push(hero);
            });
            this.trigger("render");
        } else {
            alert("哥啊！我真的找不到这哥们！");
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
            var hero = _.first(_.shuffle(this.availableHeros));
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
        this.$(".viewHero").html("<img class='selectedHero' src='"+heroUrl+"'></img><a class='btn btn-danger' style='margin: 10px' data-action='back'>重选</a>");
        this._hideOperations();
        this._hideHeroZone();
        this._showViewHero();
    },

    _back: function(){
        this._hideViewHero();
        this.displayOperations();
    }
})