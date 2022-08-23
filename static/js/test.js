fetch('https://api.github.com/repos/atom/atom')  // set the path; the method is GET by default, but can be modified with a second parameter
.then((response) => response.json())  // parse JSON format into JS object
.then((data) => {
    console.log(data.stargazers_count);
})