var elements = document.getElementsByClassName("007");
var results = blockspring.runParsed("query-public-google-spreadsheet", { "query": "Select B", "url": "https://docs.google.com/spreadsheets/d/1m0-4Db1n_eCaI4z5CUZDf5e1VMCnxazBIlhPDWH0i8E/edit?usp=sharing" }, { "api_key": "br_87671_5168dae487bab0e75c74679ee72d0221b8d60c82" }, function(res){
    console.log(res.params);
  })
var i;
for(var i = 0; i<elements.length; i++)
{
  elements[i].href=results.data;
}
