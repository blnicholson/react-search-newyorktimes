import axios from "axios";



export default {

    getArticles: function(query, startYear, endYear){
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
        const APIKEY = "75acc9f29c2e4ef09434161361272301";
        return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101");
    },
    //Gets articles with given id 
    getSaved: function(){
        return axios.get("/api/articles/");
    },
    //saves articles to db
    saveArticle: function(articleData){
        console.log(articleData);
        return axios.post("/api/savedArticles", articleData)
    },
    //deletes article with given id from db
    deleteArticle: function(id){
        return axios.delete("/api/articles/" + id)
    }
};