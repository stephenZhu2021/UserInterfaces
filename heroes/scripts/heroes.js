$(document).ready(function () {
  $.getJSON('json/heroes.json',function (data) {
    // header
    $('header').append($(`<h1>${data.squadName}</h1>`)).append($(`<p>Hometown: ${data.homeTown} // Formed: ${data.formed}</p>`))

    // article
    for (const heros of data.members) {
      let article = $('<article></article>')
      article.append($(`<h2>${heros.name}</h2>`)).append($(`<p>Secret Identity: ${heros.secretIdentity}</p>`)).append($(`<p>Age: ${heros.age}</p>`))
      
      let ulElem = $('<ul></ul>').css('display','none')
      for (const powers of heros.powers) {
        ulElem.append($(`<li>${powers}</li>`))
      }
      article.append($(`<p>Superpowers: </p>`).hover(function () {
        ulElem.slideDown()
      },function () {
        ulElem.slideUp()
      })).append(ulElem)
      $('section').append(article)
    }
  })
})