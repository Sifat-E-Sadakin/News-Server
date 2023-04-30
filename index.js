let express = require('express');
let app = express();
let port = process.env.Port || 5000;

let cors = require('cors')

let categories = require('./data/categories.json');

let news = require('./data/news.json');

app.use(cors())


app.get('/', (req, res)=>{
    res.send('server running')
});

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/news', (req, res)=>{
    res.send(news);
})

app.get('/news/:id', (req, res)=>{
    let id = req.params.id;
    // console.log(id);
    let specificNews = news.find(n=> n._id==id)
    res.send(specificNews)
})

app.get('/category/:id', (req, res)=>{
    let id = req.params.id;
    // console.log(id);

    if(id == '0'){
        res.send(news)
    }
    else{
        let categoryNews = news.filter(n=> n.category_id==id)
    res.send(categoryNews)

    }
    
})



app.listen(port,()=>{
    console.log(`server running in ${port}`);
})
