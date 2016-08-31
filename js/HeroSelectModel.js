var HeroSelectModel = Backbone.Model.extend({

    availableHeros: new Array(),

    currentHeros: new Array(),

    initialize: function(options){
        this.baseURL = options.baseURL;
        this.heros = options.heros;
        this.criteria = {
            types: [],
            queryString: ""
        };
        console.log("Local Heros Size: ",this.heros.size());
    },
    // filter by package
    filter: function(){
        var self = this;
        var searchTypes = this.criteria.types;
        self.availableHeros = new Array();
        var heros = _.shuffle(this.heros.toJSON(), function(item){
            //some constrains to ignore some heros
        });
        if(searchTypes.length != 0){
            _.each(searchTypes, function(type){
                _.each(_.filter(heros, function(hero){
                    return hero.type == type;
                }), function(hero){
                    self.availableHeros.push(hero);
                });
            });
        }
        self.availableHeros = _.map(self.availableHeros, function(hero){
            return _.extend(hero, {
                staticUrl: self.baseURL+ hero.type+"_"+hero.heroId+"."+hero.imageExtension
            });
        });
        console.log("Available Heros Size:", self.availableHeros.length);
        console.log("Available Heros",self.availableHeros);
    },

    filterOne: function(){
        var self = this;
        while(true){
            var hero = _.first(_.shuffle(self.availableHeros));
            if(_.find(self.currentHeros, function(h){
                return h.name === hero.name
            }) === undefined ){
                return hero;
            }
        };
    },

    randomFindHeros: function(count, isMaster){
        var self = this;
        this.currentHeros = new Array();
        if(isMaster){
            _.each(_.filter(self.availableHeros, function(hero){
                return hero.defaultMaster == true
            }), function(hero){
                self.currentHeros.push(hero);
            })
        }
        for(var i=0;i<count;i++){
            self.currentHeros.push(this.filterOne());
        }
        this.trigger("RenderHeroChooser");
    },

    // filter by name
    search: function(){
        var self = this;
        self.availableHeros = new Array();
        var searchString = this.criteria.queryString;
        if(searchString != ""){
            _.each(_.filter(self.heros.toJSON(), function(hero){
                return hero.name.indexOf(searchString) != -1 || hero.type.indexOf(searchString) != -1
            }), function(hero){
                self.availableHeros.push(hero);
            });
        }
        self.availableHeros = _.map(self.availableHeros, function(hero){
            return _.extend(hero, {
                staticUrl: self.baseURL+ hero.type+"_"+hero.heroId+"."+hero.imageExtension
            });
        });
        console.log("Available Heros Size:", self.availableHeros.length);
        console.log("Available Heros",self.availableHeros);
        self.currentHeros = self.availableHeros;
        this.trigger("RenderHeroChooser");
    }

});