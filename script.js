const characters = [
    {
      name: "Marvin",
      level: 1,
      xpPercent: 40,
      image: "images/marvin.png",
    },
    {
      name: "Hotori",
      level: 3,
      xpPercent: 75,
      image: "images/hotori.png",
    },
    {
      name: "Baby Peg-Leg",
      level: 2,
      xpPercent: 50,
      image: "images/Babypegleg.png",
    },
  ];
  
  let current = 0;
  
  const img = document.getElementById("char-img");
  const nameEl = document.getElementById("char-name");
  const levelEl = document.getElementById("char-level");
  const xpBar = document.getElementById("char-xp");
  
  function showCharacter(index) {
    const char = characters[index];
    img.src = char.image;
    nameEl.textContent = char.name;
    levelEl.textContent = char.level;
    xpBar.style.width = char.xpPercent + "%";
  }
  
  document.getElementById("prev").onclick = () => {
    current = (current - 1 + characters.length) % characters.length;
    showCharacter(current);
  };
  
  document.getElementById("next").onclick = () => {
    current = (current + 1) % characters.length;
    showCharacter(current);
  };
  
  showCharacter(current);



  function startMusic() {
    let music = document.getElementById('bg-music');
    music.volume = 0.7
    music.play();
  }


  

  function playClickSound() {
    let clickSound = document.getElementById("click-sound");
    clickSound.volume= 0.3
    clickSound.currentTime = 0; // rewind to start
    clickSound.play();
  }