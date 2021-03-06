var currentId = 3

const Article = require('./model').Article


function addArticle(req, res, callback) {
  //const newArticle = { id: currentId, author: 'Scotty', body: req.body.body };
  var articleObj = {id: Math.random()* 10000, author: req.session.username, body: req.body.text, date: new Date(), comments:""}
  Article.find({}, function (err, docs) {
  // docs is an array
    Article.create(articleObj, function (err, small) {
    if (err)
    {
      console.log("ERROR")
      return handleError(err);
    }
    docs.push(articleObj)
    res.json({articles: docs})
    })

  })

  }

const getArticles = (req, res) => {
  console.log('in get articles')

  array = [req.session.username]


  Article.find({author: {$in :array}}, (err, articles) => {
    if (!articles ){
      res.sendStatus(401)
    }
    console.log("articles is " + articles)
    res.json({articles:articles.map((article)=> ({
      id: article.id,
      author: article.author,
      body: article.body,
      date: article.date,
      comments: article.comments
    }
    ))})

  })
}
const getArticleById = (req, res) => {
  console.log("username case")
  console.log(req.params.id)
  var array;
  //id case
  if (!req.params.id.match(/[a-z]/i))
  {
    array = [req.params.id]
    Article.find({id: {$in :array}}, (err, articles) => {
      if (!articles ){
        res.sendStatus(401)
      }
      res.json({articles:articles.map((article)=> ({
        id: article.id,
        author: article.author,
        body: article.body,
        date: article.date,
        comments: article.comments
      }
      ))})

    })
  }
  //author case
  else {
    array = [req.params.id]
    Article.find({author: {$in :array}}, (err, articles) => {
      if (!articles ){
        res.sendStatus(401)
      }
      res.json({articles:articles.map((article)=> ({
        id: article.id,
        author: article.author,
        body: article.body,
        date: article.date,
        comments: article.comments
      }
      ))})

    })
  }

  console.log("array length is " + array.length)
  console.log("array is " + array)
  }

const getHeadline = (req, res) => {
  console.log(req.params.user)
  console.log('Payload received', req.body)
 var payload;
 if (req.method == 'GET' && req.url == '/headlines')
 {
   payload = defaultHeadline;
 }

 //res.setHeader('Content-Type', 'application/json')
 //res.statusCode = 200
 res.send(JSON.stringify(payload))
 console.log(JSON.stringify(payload))
}

function isLoggedIn(req, res, next){
    if (!req.session.username){
      res.status(403).json({err: "forbidden"})
      return
    }

    next()
}



module.exports = app => {
     app.post('/article', addArticle)
     app.get('/articles', getArticles)
     app.get('/headlines/', getHeadline)
     app.get('/articles/:id*?', getArticleById)
}
