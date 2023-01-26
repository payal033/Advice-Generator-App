const randomButton = document.getElementById('random')

function getRandomAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        let adviceText = document.getElementById('advice-text')
        let adviceId = document.getElementById('advice-id')
        adviceText.innerText = '"' + data['slip']['advice'] + '"'
        adviceId.innerText = 'ADVICE #' + data['slip']['id']
    }).catch(function (err) {
        console.error('Something went wrong.', err);
    });
}

getRandomAdvice()