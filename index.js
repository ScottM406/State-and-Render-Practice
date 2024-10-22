const state = {
  players: [
    {name: `Sam Darnold`,
    positon: `Quarterback`,
    imgPath: `./images/sammyd.jpeg`,
    imgAlt: `Darnold Schwarzenegger himself`,
    statsUrl: `https://www.espn.com/nfl/player/_/id/3912547/sam-darnold`
  },
  {
    name: `Justin Jefferson`,
    postion: `Wide Receiver`,
    imgPath: `./images/jjets.jpg`,
    statsUrl: `https://www.espn.com/nfl/player/_/id/4262921/justin-jefferson`
  },
  {
    name: `Aaron Jones`,
    postion: `Running Back`,
    imgPath: `./images/jonesy.jpg`,
    statsUrl: `https://www.espn.com/nfl/player/_/id/3042519/aaron-jones`
  },
  {
    name: `Jordan Addison`,
    postion: `Wide Receiver`,
    imgPath: `./images/addison.jpeg`,
    statsUrl: `https://www.espn.com/nfl/player/_/id/4429205/jordan-addison`
  }
  ]
}


const renderState = () => {
  const allPlayers = state.players;
  const allPlayerSections = allPlayers.map((player) => {
    return `<section>
      <h1>${player.name}</h1>
      <img src="${player.imgPath}"/>
      <button>Stats and Info</button>
      </section>`
  });
  const mainElement = document.querySelector(`main`);
  mainElement.innerHTML = allPlayerSections.join('');
}
  // allPlayers.forEach((player) => {
  // mainElement = document.querySelector(`main`);
  // mainElement.innerHTML = `
  // <section>
  // <h1>${player.name}</h1>
  // <img src="${player.imgPath}"/>
  // </section>`
 // });
 // }


renderState();
