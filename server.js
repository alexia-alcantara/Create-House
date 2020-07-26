const express = require('express')
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Cursos de Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios em Casa",
        category: "Saúde",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729077.svg",
        title: "Receitas",
        category: "Saúde",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },{
        img: "https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title: "Videogames",
        category: "Diversão",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },
]

//configurar arquivos estáticos

server.use(express.static("public"))

//configuração nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, 
})



server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for(idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideias", function(req, res) {
    const reversedIdeas = [...ideas].reverse()


    return res.render("ideias.html", { ideas: reversedIdeas})
})

server.listen(3000)