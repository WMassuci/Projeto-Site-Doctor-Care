window.addEventListener('scroll', onScroll) // não preciso mais chamar a função dentro do body, so executar a função-> adicionar evento 'scroll' quando estiver onScroll
// no body era = onScroll = onScroll() class=""

onScroll()

//nessa função executa todas que tem haver com scroll quando rola a pag
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

//função para quando a rolagem atingir 500 ele coloca a classe 'show' menor que isso retira o botao top
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//enquanto a rolagem "scroll for mais que 0 ele troca de cor se menor ele retira  a cor"
//classList: lista de classes
//boolean: true / false

/************ABRINDO O MENU HAMBURGUER DO NAV */

function openMenu() {
  document.body.classList.add(
    'menu-expanded'
  ) /** pegando o Body para adicionar a class 'menu expanded' quando clicar */
}

function closeMenu() {
  document.body.classList.remove(
    'menu-expanded'
  ) /** removendo o menu quando clicar nele */
}

/** Conforme vai rolando a pagina ele vai revelando os elementos para mim */

ScrollReveal({
  /** Configuração */ origin: 'top' /** vai do topo para baixo */,
  distance: '30px',
  duration: 700
}).reveal(`#home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about, #about header,
  #about .content`) /** lugar que vai ser aplicado */
/** ordem de aparecer */
