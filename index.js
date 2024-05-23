const history = {
  event: "Você está em uma floresta escura, o que você faz?",
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
    event: "Voce observa ao redor. O que voce ve?",
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
    final:
      "Você acha a cidade e volta para casa",
  },
  fuga: {
    event: "Você tenta fugir, mas o Ogro é mais rápido. O que você faz?",
    options: [
      {
        text: "Procura uma lugar para se esconder",
        next: "Esconderijo",
      },
      {
        text: "Você desiste e deixa ser pego pelo Ogro",
        next: "desistir",
      },
      {
        text: "Você tenta correr mais rápido",
        next: "corrida",
      }
    ]
  },
  lutar: {
    event: "Você olha ao redor em busca de uma arma improvisada, o que você pega?",
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
        text: "Meias de proxedência duvidosa",
        next: "meias",
      },
    ]
  },
  cabana: {
    event: "Você desce da árvore e vai em direção a cabana, qual seu próximo passo?",
    options: [
      {
        text: "Explorar a cabana",
        next: "explorar"
      },
      {
        text: "Ignorar a cabana e seguir em direção da ponte",
        next: "rio"
      },
    ]
  },
  rio: {
    event: "Você segue em direção ao rio e percebe a ponte quebrada, o que você faz?",
    options: [
      {
        text: "Passar pelo rio nadando, adoro um desafio!",
        next: "nadar"
      },
      {
        text: "Investigar a ponte usando minhas habilidades de detetive",
        next: "investigar",
      },
      {
        text: "Ficar quieto e pensar",
        next: "encontro",
      },
    ]
  }

};

// continuar a historia com mais opções de acontecimentos.

let eventoAtual = history;

while (eventoAtual) {
  if (eventoAtual.event) {
    console.log(eventoAtual.event);
  } else {
    console.log(eventoAtual.final);
  }

  if (eventoAtual.options) {
    for (let contador = 0; contador < eventoAtual.options.length; contador++) {
      console.log(contador + ". " + eventoAtual.options[contador].text);
    }
  } else {
    console.log("Fim da história");
  }

  break;
}
