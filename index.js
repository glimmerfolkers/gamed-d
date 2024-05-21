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
      text: "Pular da arvore",
      next: "pular",
    },
  ],
  encontro: {
    event: "Voce encontra um Ogro. o que voce faz?",
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
  pular: {
    final:
      "A arvore é bem alta e voce caiu em cima de uma pedra. adeus querido",
  },
};

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

    // pedir para o usuário escolher uma opção e ir pro proximo evento
  } else {
    console.log("Fim da história");
  }

  break;
}
