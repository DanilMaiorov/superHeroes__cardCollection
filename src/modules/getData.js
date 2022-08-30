const getData = (url) => {
    return fetch(url)
    .then((response) => {
        return response.json(); 
    });
};

export default getData;