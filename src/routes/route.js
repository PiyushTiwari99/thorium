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


// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
router.get("/sol1", function (req, res) {

    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit + 1) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});


// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

router.get("/sol2", function (req, res) {

    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecutiveSum - total

    res.send({ data: missingNumber });
});




module.exports = router;
