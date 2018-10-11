let divShowNews = document.getElementById("divShowNews")
let itemInfoTemplate = ""


for (let i = 0; i < news.articles.length; i++) {

    let author = news.articles[i].author;
    let title = news.articles[i].title;
    let description = news.articles[i].description;
    let url = news.articles[i].url;
    let publishedAt = news.articles[i].publishedAt;
    let urlToImage = news.articles[i].urlToImage;

    itemInfoTemplate = `
    <div class="divArticleContainer">
        <div class="divArticleInfo"
            <p><span class="divArticleInfoTitle">${title}</span><p>
            <p>${author}</p>
            <p>${description}</p>
            <p>Published (${publishedAt}) <a href="${url}" target="_blank">article</a></p>
        </div>
        <div class="divArticleImage">
            <img src="${urlToImage}" class="urlImage">
        </div>
    </div>
    `

    divShowNews.insertAdjacentHTML('beforeend',itemInfoTemplate)
}

