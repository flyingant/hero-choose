var HeroSelectView = Backbone.View.extend({

    events:{
        "click a[data-action=choose-package]": "choosePackage",
        "click a[data-action=choose-master]": "chooseMaster",
        "click a[data-action=choose-hero]": "chooseHero",
        "click a[data-action=search]": "search",
        "click .item.active":"selectHero",
        "dblclick #selectedHeroImage":"hideModal",
        "click .cancelButton":"hideModal",
        "click .backButton":"hideModalAndBack"
    },

    homeTemplate: function(){
        return Handlebars.compile($("#homeTemplate").html());
    },

    chooseMenuTemplate: function(){
        return Handlebars.compile($("#chooseMenuTemplate").html());
    },

    heroChooserTemplate: function(){
        return Handlebars.compile($("#heroChooserTemplate").html());
    },

    heroDetailsTemplate: function(){
        return Handlebars.compile($("#heroDetailsTemplate").html());
    },

    initialize: function(){
        this.model.on("change:mode", this.render, this);
        this.model.on("RenderHeroChooser", this.renderHeroChooser, this);
    },

    render: function(){
        var self = this;
        var mode = self.model.get("mode");
        if(self.model.get("mode") == "HOME"){
            $(this.el).html(
                self.homeTemplate()
            );
        } else {
            $(this.el).html(
                self.chooseMenuTemplate()
            );
        }
    },

    renderHeroChooser: function(){
        $(this.el).html(
            this.heroChooserTemplate()({
                heros: _.shuffle(this.model.currentHeros)
            })
        );
        this.$(".carousel-inner div:first-child").addClass("active");
        $("#heroChooserCarousel").carousel({
            interval: 2000000
        });
    },

    choosePackage: function(event){
        var choosePackage = $(event.currentTarget).data("package");
        console.log("Choose Package",choosePackage);
        Backbone.history.navigate(""+choosePackage.toLowerCase(), {trigger: true, replace: true});
    },

    chooseMaster: function(){
        this.model.randomFindHeros(5, true);
    },

    chooseHero: function(){
        this.model.randomFindHeros(5, false);
    },

    search: function(){
        var searchString = this.$("input[type=text]").val();
        if(!searchString){
            alert("能给点力么？");
            return
        }
        this.model.criteria.queryString = searchString;
        this.model.search();
        this.model.currentHeros = this.model.availableHeros;
        this.model.trigger("RenderHeroChooser");
    },

    selectHero: function(event){
        var self = this;
        var heroURL = $(event.currentTarget).data("url");
        this.$("#selectedHeroPanel").html(
            self.heroDetailsTemplate()({
                heroURL: heroURL
            })
        );
        this.$("#heroDetailsPanel").modal("show");
    },

    hideModal: function(){
        this.$("#heroDetailsPanel").modal("hide");
    },

    hideModalAndBack: function(){
        this.hideModal();
        this.render();
    }

});