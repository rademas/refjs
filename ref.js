/**
 * Created with JetBrains WebStorm.
 * User: Pavilion DV6
 * Date: 5/26/13
 * Time: 2:54 AM
 * To change this template use File | Settings | File Templates.
 */

//<span class="tyy" style="display: inline-block">tt</span>
//var jsons = [{"id":"id1","authors":[{"author":"auth1"},{"author":"auth2"}],"title":"title1","conference":"conf1","journal":"jour1","publisher":"publisher1","p":"2","pp":"4-45","year":"year1"}];
(function (){

    var currentRef={};
    var allRefs =[];

    function initialize_(){

    }

    function addJSONReference_(pubJson){

    }

    function addReferenceToCollection_(){
        allRefs.push(currentRef);
    }

    function createNewReference_(){
        currentRef ={};
    }

    function addIdToReference_(id){
        currentRef["id"]=id;
    }

    function addAuthorsToReference_(authors){
        currentRef["authors"]=[];

        for(var i=0; i<authors.length; i++){
            var authorObj = {};
            authorObj["author"] = authors[i];
            currentRef["authors"].push(authorObj);
        }
    }

    function getCurrentReference_(){
        return currentRef;
    }

    function getAllReferences_(){
        return allRefs;
    }

    function addTitleToReference_(title){
        currentRef["title"]=title;
    }

    function addTConferenceToReference_(conference){
        currentRef["conference"]=conference;
    }

    function addJournalToReference_(journal){
        currentRef["journal"]=journal;
    }

    function addPublisherToReference_(publisher){
        currentRef["publisher"]=publisher;

    }
    function addPageToReference_(page){
        currentRef["p"]=page;
    }

    function addPageRangeToReference_(pageRange){
        currentRef["pp"]=pageRange;
    }

    function addYearToReference_(year){
        currentRef["year"]=year;
    }

    function getIEEEFormattedReferences_(refs){

    }

    function getAuthorNameWithInitials_(authorName){

    }

    ref = {
        addRefJson: function(pubJson){
            addJSONReference_(pubJson);
        },

        addRef: function(){
            addReferenceToCollection_();
        },

        createRef: function(){
            createNewReference_();
        },

        getRef: function(){
            return getCurrentReference_();
        },

        getAllRefs: function(){
            return getAllReferences_();
        },

        addId: function(id){
            addIdToReference_(id);
        },

        addAuthors: function(authors){
            addAuthorsToReference_(authors);
        },

        addTitle: function(title){
            addTitleToReference_(title);
        },

        addConference: function(conference){
            addTConferenceToReference_(conference);
        },

        addJournal: function(journal){
            addJournalToReference_(journal);
        },

        addPublisher: function(Publisher){
            addPublisherToReference_(publisher)
        },

        addPage: function(page){
            addPageToReference_(page);
        },

        addPageRange: function(pageRange){
            addPageRangeToReference_(pageRange);
        },

        addYear: function(year){
            addYearToReference_(year);
        },

        getAllIEEE: function(refs){

        },

        getCitedIEEE: function(refs){

        },

        formatIEEE: function(refs){

        }
    };

})();
