let ville = 'McMasterville'

// Renseigner dans la variable apiKey votre clé d'API OpenWeatherMap
let apiKey = ''

const temperatureElement = document.querySelector('#temperature_label')
const villeElement = document.querySelector('#ville')
const changerVille = document.querySelector('#changer')


function recupererTemperature(ville) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apiKey}&units=metric`
    let requete = new XMLHttpRequest()
    requete.open('GET', url)
    requete.responseType = 'json'
    requete.send()
    requete.onload = function() {
        if ( requete.readyState === XMLHttpRequest.DONE ) {
            if (requete.status === 200) {
                let reponse = requete.response
                let temperature = reponse.main.temp
                temperatureElement.innerHTML = temperature
                villeElement.innerHTML = ville
            }        
        } else {
            console.log('Une erreur est survenue lors de la communication avec OpenWeatherMap.')
        }
    }
}

recupererTemperature(ville)

changerVille.addEventListener('click', function() {
    let villeChoisie = prompt('Saisissez le nom de la ville :')
    recupererTemperature(villeChoisie)
})