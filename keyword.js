console.log(document);

function keyword(key){
    key = key.replace(" ", "+");
    apikey = '79c76560c3197501d56bf153b6bf5eb1';
    url = 'https://gnews.io/api/v4/search?q='+key+'&lang=en&country=us&max=3&apikey=' + apikey;
    
    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        articles = data.articles;
        for (i = 0; i < articles.length; i++) {
        console.log(i+1 + ". " + articles[i]['title']);
        console.log("Description: " + articles[i]['description']);
    }
  });
}

