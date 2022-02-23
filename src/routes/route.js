const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
//1 create api and return in array

router.get('/movies', function (req, res) {
    const movie = ['Shutter Island', 'Titanic', 'Django Unchained', 'Revenant']
    // console.log(movie)
    res.send(movie);
})

// 2. Api fetching all movie index
router.get('/movies/:index', function (req, res) {
    const movies = ['Shutter Island', 'Titanic', 'Django Unchained', 'Revenant']
    let value = req.params.index;
    if (value > movies.length - 1) {
        res.send('" invalid movie"')
    } else {
        res.send(movies[value])
    }
})

//3.Api fetch all movies from array

router.get('/films', function (req, res) {
    res.send([{
        id: 1,
        name: 'The Shining'
    }, {
        id: 2,
        name: 'Incendies'
    }, {
        id: 3,
        name: 'Rang de Basanti'
    }, {
        id: 4,
        name: 'Finding Demo'
    }]
    )
})

4


router.get('/films/:filmsid', function (req, res) {


    let fi = req.params.filmsid;
    const film = [

        {
            "id": 1, "name": "Shutter Island"
        },

        {
            "id": 2, "name": "Titanic"
        },

        {
            "id": 3, "name": "Django Unchained"


        },

        {

            "id": 4, "name": "revenant"

        }


    ]

    if (fi > film.length) {

        res.send("invalid id")
    }
    else {

        for (let i = 0; i < film.length; i++) {
            if (film[i].id == fi) {

                res.send(film[i])
            }

        }
    }
    res.send(film)

})


module.exports = router;
