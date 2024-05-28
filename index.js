const history = {
  event: "Você está em uma floresta escura, o que você faz?",
  image: "assets/animations/dark-forest.jpeg",
  options: [
    {
      text: "Explorar a floresta",
      next: "encontro",
    },
    {
      text: "Subir em uma arvore",
      next: "copaDaArvore",
    },
    {
      text: "Procurar um chaminho para casa",
      next: "cidade",
    },
  ],
  encontro: {
    event: "De repente um Ogro aparece atras de você, o que voce faz?",
    image: "assets/animations/ogro.gif",
    options: [
      {
        text: "Correr, gritando de medo",
        next: "fuga",
      },
      {
        text: "Lutar contra o Ogro maldito",
        next: "lutar",
      },
    ],
  },
  copaDaArvore: {
    event: "Voce sobe na árvore e observa ao redor. O que voce ve?",
    options: [
      {
        text: "Uma cabana abandonada",
        next: "cabana",
      },
      {
        text: "Uma ponte sobre um rio",
        next: "rio",
      },
    ],
  },
  cidade: {
    final: "Você acha a cidade e volta para casa",
  },
  fuga: {
    event: "Você tenta fugir, mas o Ogro é mais rápido. O que você faz?",
    options: [
      {
        text: "Procura uma lugar para se esconder",
        next: "esconderijo",
      },
      {
        text: "Você desiste e deixa ser pego pelo Ogro",
        next: "desistir",
      },
      {
        text: "Você tenta correr mais rápido",
        next: "corrida",
      },
    ],
  },
  lutar: {
    event:
      "Você olha ao redor em busca de uma arma improvisada, o que você pega?",
    options: [
      {
        text: "Pedaço de madeira podre",
        next: "madeira",
      },
      {
        text: "Pedra muito rígida de tamanho médio",
        next: "pedra",
      },
      {
        text: "Um espelho mediano",
        next: "espelho",
      },
    ],
  },
  cabana: {
    event:
      "Você desce da árvore e vai em direção a cabana, qual seu próximo passo?",
    options: [
      {
        text: "Explorar a cabana",
        next: "explorar",
      },
      {
        text: "Ignorar a cabana e seguir em direção da ponte",
        next: "rio",
      },
    ],
  },
  rio: {
    event:
      "Você segue em direção ao rio e percebe a ponte quebrada, o que você faz?",
    image: "assets/animations/river.jpeg",
    options: [
      {
        text: "Passar pelo rio nadando, adoro um desafio!",
        next: "nadar",
      },
      {
        text: "Investigar a ponte usando minhas habilidades de detetive",
        next: "investigar",
      },
      {
        text: "Ficar quieto e pensar",
        next: "encontro",
      },
    ],
  },
  esconderijo: {
    event: "Você busca ao seu redor um lugar para se esconder, qual é?",
    options: [
      {
        text: "Atrás de uma árvore grande",
        next: "arvoreGrande",
      },
      {
        text: "No topo de uma árvore",
        next: "copaDaArvore",
      },
    ],
  },
  desistir: {
    final: "Você é pego, e vira o jantar do Ogro",
  },
  corrida: {
    final: "Você foge do Ogro e consegue achar o caminho para a casa",
  },
  madeira: {
    final:
      "Você bate no Ogro com a madeira, mas isso só o deixa mais furioso. Você morreu.",
  },
  pedra: {
    event: "Você joga a pedra e derrota o Ogro. Qual seu próximo passo?",
    options: [
      {
        text: "Continuar explorando a floresta",
        next: "continuar",
      },
      {
        text: "Tentar achar um caminho para casa",
        next: "cidade",
      },
    ],
  },
  espelho: {
    event:
      "Você aponta o espelho para o Ogro e ele se assusta com a própria aparência. Qual seu próximo passo?",
    options: [
      {
        text: "Continuar explorando a floresta",
        next: "continuar",
      },
      {
        text: "Tentar achar um caminho para casa",
        next: "cidade",
      },
    ],
  },
  explorar: {
    final:
      "Dentro da cabana você encontra uma bruxa. Ela joga veneno e você morre",
  },
  nadar: {
    final: "No rio há jacarés, você morreu",
  },
  investigar: {
    event:
      "Você percebe que o que destruiu a ponte foi uma criatura gigante não humana, o que você faz?",
    image: "assets/animations/bridge.jpeg",
    options: [
      {
        text: "Continuar explorando a floresta",
        next: "continuar",
      },
      {
        text: "Ficar quieto e pensar",
        next: "encontro",
      },
      {
        text: "Tentar achar um caminho para casa",
        next: "cidade",
      },
    ],
  },
  continuar: {
    final:
      "Você acaba adentrando demais na floresta e perceb que é um laberinto. Você está preso para sempre",
  },
};

let eventoAtual = history;

const eventElement = document.getElementById("event");
const actionsElement = document.getElementById("actions");
const imageElement = document.getElementById("image");

function showEvent() {
  imageElement.src = eventoAtual.image;

  if (eventoAtual.event) {
    eventElement.innerHTML = eventoAtual.event;
  } else {
    eventElement.innerHTML = eventoAtual.final;
  }
}

function showActions() {
  actionsElement.innerHTML = "";

  for (let contador = 0; contador < eventoAtual.options.length; contador++) {
    const option = eventoAtual.options[contador];

    const optionElement = document.createElement("button");
    optionElement.classList.add("btn");
    optionElement.innerHTML = option.text;

    optionElement.addEventListener("click", () => {
      eventoAtual = history[option.next];
      showEvent();
      showActions();
    });

    actionsElement.appendChild(optionElement);
  }
}

showEvent();
showActions();
