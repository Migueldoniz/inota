//  export default users = [
//     {
//         id: 1,
//         name: 'José Santos',
//         email: 'jose@gmail.com',
//         avatarUrl: 
//             'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
//     },
//     {
//         id: 2,
//         name: 'Maria Santos',
//         email: 'marias11@gmail.com',
//         avatarUrl: 
//             'https://cdn.pixabay.com/photo/2017/03/01/22/18/avatar-2109804_1280.png'
//     },
//     {
//         id: 3,
//         name: 'João Silva',
//         email: 'j113@gmail.com',
//         avatarUrl: 
//             'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png'
//     },
// ]

function generateRandomUser(id) {
    const nome_evento = ['Abertura da copa de 2004', 
                          'Show do Detonautas', 
                          "Concurso Anual de Barbas de Três Cores em Miniatura",
                          "Campeonato Internacional de Malabarismo com Frutas Exóticas",
                          "Festival de Música para Robôs Domésticos",
                          "Competição de Esculturas de Gelo em Forma de Utensílios de Cozinha",
                          "Desfile de Moda Subaquático para Sereias Mecânicas",
                          "Olimpíadas de Corrida de Carros de Controle Remoto em Pistas de Borracha",
                          "Exposição de Arte Abstrata Feita por Macacos Treinados",
                          "Festival de Dança das Árvores Falantes"];
    const data = ["2024-06-15",
                  "2024-09-28",
                  "2024-11-03",
                  "2024-07-12",
                  "2024-10-05",
                  "2024-08-21",
                  "2024-12-09",
                  "2024-07-30",
                  "2024-11-16",
                  "2024-09-02"];
    
    const lugares = ["Paris, França",
                     "Tóquio, Japão",
                     "Rio de Janeiro, Brasil",
                     "Sydney, Austrália",
                     "Nova York, Estados Unidos",
                     "Cairo, Egito",
                     "Roma, Itália",
                     "Cidade do Cabo, África do Sul",
                     "Moscou, Rússia",
                     "Bangkok, Tailândia"]
    const avatars = [
        'https://conectanuvem.com.br/wp-content/uploads/2022/11/Capas-Blog-Imagem-destacadas-2022-44-865x576.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHicDFrDAZZsD1eDcWCrIzfpf_EgJYeHcGrCHm70ylGQ&s',
        'https://www.nuvent.com.br/wp-content/uploads/2020/01/espacoparaeventoscorporativos.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCTWfVyhOLfVW1P8W36RoHBhR4ex6K2xHGrozzDildA&s',
        'https://www.fabrikadeeventos.com.br/wp-content/uploads/2024/04/Cabine-Capa-de-Revista-1-640x640.jpg',
        'https://gilsonazevedo.com.br/wp-content/uploads/2023/05/11-Flyer-Para-Eventos-Profissional-11.png',
        'https://img.clasf.com.br/2020/04/09/Arte-Flyer-Para-Divulgao-De-Eventos-Nas-Redes-Sociais-20200409063614.4592240015.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GFdg4rg7CTd4Xsqro4qc0hRziML2FGMJPIOAIPhXMw&s',
        'https://escolaepocaserrana.com.br/wp-content/uploads/2023/02/semana-da-arte-moderna-1024x576.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DcM7P8TcHA11IlkfNMWDwdC4gjrqydcf2_pcUINQxw&s',
      ];
      
      
    const randomIndex = Math.floor(Math.random() * nome_evento.length);
    const randomAvatarIndex = Math.floor(Math.random() * avatars.length);
    const randomQtdIngressos = Math.floor(Math.random() * 1000);
    
    return {
      id,
      nome_evento: nome_evento[randomIndex],
      data: data[randomIndex],
      lugares: lugares[randomIndex],
      qtdingressos: randomQtdIngressos,
      avatarUrl: avatars[randomAvatarIndex],
    };
  }
  
  const numberOfUsers = 30
  const usersRandom = Array.from({ length: numberOfUsers }, (_, i) => generateRandomUser(i + 1));
  
  export default usersRandom;