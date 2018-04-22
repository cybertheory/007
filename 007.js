$(document).ready(function() {
    f1();
});
function f1() 
{
    var elements = document.getElementsByClassName("007");
    var results = 0;
    blockspring.runParsed("query-public-google-spreadsheet", { "query": "Select B", "url": "https://docs.google.com/spreadsheets/d/1m0-4Db1n_eCaI4z5CUZDf5e1VMCnxazBIlhPDWH0i8E/edit?usp=sharing" }, { "api_key": "br_87671_5168dae487bab0e75c74679ee72d0221b8d60c82" }, function(res){
        results=res.params;
      })
    var i;
    for(i = 0; i<elements.length; i++)
    {
      var j = Math.floor(Math.random()) * results["data"].length;
      elements[i].setAttribute("href", results["data"][j]["Submit Your Backlink [http:// or https://(your_website_here)]"]);
    }
}
