/**
 * Game Portal - Navigation Controller
 * Handles screen navigation, loading states, and game flow
 */

// Navigation State
let navigationStack = ['portal-home'];
let currentGame = '';
let currentRoomLevel = '';
let currentSubGame = null;

/**
 * Show loading overlay
 * @param {string} text - Loading message
 * @param {string} icon - Emoji icon to display
 */
function showLoading(text = 'Đang tải...', icon = '🎮') {
  document.getElementById('loading-text').textContent = text;
  document.getElementById('loading-logo').textContent = icon;
  document.getElementById('loading').classList.add('active');
}

/**
 * Hide loading overlay
 */
function hideLoading() {
  document.getElementById('loading').classList.remove('active');
}

/**
 * Navigate to a specific screen
 * @param {string} screenId - ID of the screen to navigate to
 */
function navigateToScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });

  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

/**
 * Navigate to game lobby
 * @param {string} gameId - Game identifier
 */
function navigateToLobby(gameId) {
  const game = gameData[gameId];
  if (!game) return;

  currentGame = gameId;
  showLoading('Đang vào ' + game.title + '...', game.icon);

  setTimeout(() => {
    // Check if game has sub-games (Slots, Games)
    if (game.hasSubGames) {
      navigateToSubGameSelection();
      return;
    }

    // Update lobby UI
    const lobbyScreen = document.getElementById('game-lobby');
    lobbyScreen.className = 'screen active ' + game.theme;

    // Update title
    const titleText = document.querySelector('#game-lobby .title-text');
    if (titleText) {
      titleText.textContent = game.title;
    }

    // Update sidebar
    const sidebar = document.getElementById('lobby-sidebar');
    if (sidebar) {
      const sidebarItem = sidebar.querySelector('.sidebar-item');
      if (sidebarItem) {
        sidebarItem.innerHTML = `
          <span class="sidebar-icon">${game.icon}</span>
          <span class="sidebar-text">${game.title.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}</span>
        `;
      }
    }

    // Populate rooms
    populateRoomList(game.rooms);

    navigationStack.push('game-lobby');
    navigateToScreen('game-lobby');
    hideLoading();
  }, 800);
}

/**
 * Navigate to sub-game selection (for Slots and Games)
 */
function navigateToSubGameSelection() {
  const game = gameData[currentGame];

  // Update sub-game selection screen
  const subgameScreen = document.getElementById('subgame-selection');
  subgameScreen.className = 'screen active ' + game.theme;

  // Update title
  document.getElementById('subgame-title').textContent = game.title;

  // Populate sub-games grid
  const subgameGrid = document.getElementById('subgame-grid');
  subgameGrid.innerHTML = '';

  game.subGames.forEach(subgame => {
    const card = document.createElement('div');
    card.className = 'subgame-card ' + subgame.color;
    card.onclick = () => selectSubGame(subgame);
    card.innerHTML = `
      <div class="subgame-card-icon">${subgame.icon}</div>
      <div class="subgame-card-name">${subgame.name}</div>
    `;
    subgameGrid.appendChild(card);
  });

  navigationStack.push('subgame-selection');
  navigateToScreen('subgame-selection');
  hideLoading();
}

/**
 * Select a sub-game and go to room lobby
 * @param {Object} subgame - Sub-game object
 */
function selectSubGame(subgame) {
  const game = gameData[currentGame];
  currentSubGame = subgame;

  showLoading('Đang vào ' + subgame.name + '...', subgame.icon);

  setTimeout(() => {
    // Update lobby UI for sub-game
    const lobbyScreen = document.getElementById('game-lobby');
    lobbyScreen.className = 'screen active ' + game.theme;

    // Update title with sub-game name
    const titleText = document.querySelector('#game-lobby .title-text');
    if (titleText) {
      titleText.textContent = subgame.name.toUpperCase();
    }

    // Update sidebar
    const sidebar = document.getElementById('lobby-sidebar');
    if (sidebar) {
      const sidebarItem = sidebar.querySelector('.sidebar-item');
      if (sidebarItem) {
        sidebarItem.innerHTML = `
          <span class="sidebar-icon">${subgame.icon}</span>
          <span class="sidebar-text">${subgame.name}</span>
        `;
      }
    }

    // Populate rooms
    populateRoomList(game.rooms);

    navigationStack.push('game-lobby');
    navigateToScreen('game-lobby');
    hideLoading();
  }, 600);
}

/**
 * Populate room list with room cards
 * @param {Array} rooms - Array of room objects
 */
function populateRoomList(rooms) {
  const roomList = document.getElementById('room-list');
  roomList.innerHTML = '';

  rooms.forEach((room, index) => {
    const roomCard = document.createElement('div');
    roomCard.className = 'room-card ' + room.color;
    roomCard.onclick = () => joinGameDirectly(room.level);
    roomCard.innerHTML = `
      <div class="room-card-header">${room.level}</div>
      <div class="room-card-body">
        <div class="room-bet">${room.bet}</div>
        <div class="room-players">
          <span class="room-players-icon">👥</span>
          <span>${room.players}</span>
        </div>
      </div>
    `;
    roomList.appendChild(roomCard);
  });
}

/**
 * Navigate to room selection screen
 * @param {string} level - Room level
 */
function navigateToRoomSelection(level) {
  currentRoomLevel = level;
  const game = gameData[currentGame];

  showLoading('Đang tải danh sách phòng...', game.icon);

  setTimeout(() => {
    document.getElementById('room-title').textContent = 'SELECT YOUR TABLE - ' + level;

    // Populate tables
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    const tables = game.tables || [
      { name: 'Room 1', stakes: '', amount: level, buyin: '100K/500K', players: 4, hands: 1 },
      { name: 'Room 2', stakes: '', amount: level, buyin: '100K/500K', players: 6, hands: 1 },
      { name: 'Room 3', stakes: '', amount: level, buyin: '100K/500K', players: 3, hands: 1 }
    ];

    tables.forEach(table => {
      const row = document.createElement('div');
      row.className = 'table-row';
      row.innerHTML = `
        <div class="name">${table.name}</div>
        <div class="stakes">${table.stakes}</div>
        <div class="amount">${table.amount}</div>
        <div class="buyin">${table.buyin}</div>
        <div class="players">👥 ${table.players}</div>
        <div>${table.hands}</div>
        <div>
          <button class="join-btn" onclick="joinGame('${table.name}')">
            JOIN 👆
          </button>
        </div>
      `;
      tableBody.appendChild(row);
    });

    navigationStack.push('room-selection');
    navigateToScreen('room-selection');
    hideLoading();
  }, 600);
}

/**
 * Join game directly from lobby (skip room selection)
 * @param {string} roomLevel - Room level to join
 */
function joinGameDirectly(roomLevel) {
  const game = gameData[currentGame];
  showLoading('Đang vào phòng ' + roomLevel + '...', game.icon);

  setTimeout(() => {
    setupGameplayScreen(game);
    navigationStack.push('gameplay');
    navigateToScreen('gameplay');
    hideLoading();
  }, 800);
}

/**
 * Join a specific game table
 * @param {string} tableName - Name of the table to join
 */
function joinGame(tableName) {
  const game = gameData[currentGame];
  showLoading('Đang vào bàn ' + tableName + '...', game.icon);

  setTimeout(() => {
    setupGameplayScreen(game);
    navigationStack.push('gameplay');
    navigateToScreen('gameplay');
    hideLoading();
  }, 1000);
}

/**
 * Setup gameplay screen based on game type
 * @param {Object} game - Game object
 */
function setupGameplayScreen(game) {
  const gameplayScreen = document.getElementById('gameplay');

  // Check if this game requires portrait mode
  const needsPortrait = forcePortraitGames.includes(currentGame);

  // Set classes - add force-portrait for poker/ludo
  if (needsPortrait) {
    gameplayScreen.className = 'screen active ' + game.theme + ' force-portrait';
  } else {
    gameplayScreen.className = 'screen active ' + game.theme;
  }

  const gameBoard = document.getElementById('game-board');

  if (currentGame === 'ludo') {
    gameBoard.innerHTML = `
      <div class="ludo-board">
        <div class="ludo-cell red"></div>
        <div class="ludo-cell"></div>
        <div class="ludo-cell blue"></div>
        <div class="ludo-cell"></div>
        <div class="ludo-cell"></div>
        <div class="ludo-cell"></div>
        <div class="ludo-cell yellow"></div>
        <div class="ludo-cell"></div>
        <div class="ludo-cell green"></div>
      </div>
    `;
  } else if (currentGame === 'poker' || currentGame === 'qiuqiu') {
    gameBoard.innerHTML = `
      <div class="poker-table">
        <div class="poker-table-inner">${game.title} TABLE</div>
      </div>
    `;
  } else {
    gameBoard.innerHTML = `
      <div class="board-placeholder">
        <div class="board-text">${game.title}<br>GAME AREA</div>
      </div>
    `;
  }
}

/**
 * Enable simulated portrait mode in landscape
 */
function enableSimulatePortrait() {
  const gameplayScreen = document.getElementById('gameplay');
  gameplayScreen.classList.add('simulate-portrait');
}

/**
 * Navigate back to previous screen
 */
function navigateBack() {
  if (navigationStack.length > 1) {
    navigationStack.pop();
    const previousScreen = navigationStack[navigationStack.length - 1];
    navigateToScreen(previousScreen);
  }
}

/**
 * Exit gameplay and return to lobby
 */
function exitToLobby() {
  closeAllModals();
  // Reset force-portrait and simulate-portrait classes
  const gameplayScreen = document.getElementById('gameplay');
  gameplayScreen.classList.remove('force-portrait', 'simulate-portrait');

  navigationStack.pop(); // Remove gameplay
  navigateToScreen('game-lobby');
}
