'use strict'

let persons

const render = (data) => {
    persons = data

    sendData({
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: persons
    })
        .then(data => {
            console.log(data);
        })
}

const getData = (url) => {
    return fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => render(data))
        .catch(error => {
            console.log(error);
        })
};

const sendData = ({ url, data = {} }) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })
};

getData('db.json')