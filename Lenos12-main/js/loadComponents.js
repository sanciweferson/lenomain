function loadHTML(elementId, url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Erro ao carregar ${url}`)
      return response.text()
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data
      // Aqui você pode rodar alguma inicialização se precisar,
      // como ativar o menu mobile ou alternar tema.
    })
    .catch((error) => console.error(error))
}

loadHTML("nav-placeholder", "nav.html")
loadHTML("footer-placeholder", "footer.html")
