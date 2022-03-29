// Quokka Config
({
    plugins: ["jsdom"],
    "jsdom": {
        "file": "/home/dbagle7/Development/Code/Assignments/phase-1/phase-1-js-fetch-on-demand-with-forms/index.html",
    }
});

const init = () => {
    const inputForm = document.querySelector('#search-form');
    const input = document.querySelector('#searchByID');

    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let value = input.value;

        fetch(`http://localhost:3000/movies/${value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const title = document.querySelector('#title');
                const summary = document.querySelector('#summary');

                title.innerHTML = data.title;
                summary.innerHTML = data.summary;
            });
    });
};

document.addEventListener('DOMContentLoaded', init);
