let form = document.forms.myForm;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => {
        return obj[key] = value
    });
    console.log(obj);
    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(data => console.log(data));
});