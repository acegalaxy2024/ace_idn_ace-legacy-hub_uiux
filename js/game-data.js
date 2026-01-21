/**
 * Game Portal - Game Data Configuration
 * Contains all game definitions, rooms, and sub-games
 */

const gameData = {
  'poker': {
    title: 'POKER',
    icon: '🃏',
    theme: 'poker',
    rooms: [
      { name: 'Rookie', level: '50K', bet: '500,000', players: 5, color: 'purple' },
      { name: 'Amateur', level: '100K', bet: '1,000,000', players: 8, color: 'red' },
      { name: 'Pro', level: '400K', bet: '4,000,000', players: 3, color: 'cyan' },
      { name: 'Master', level: '1M', bet: '10,000,000', players: 2, color: 'gold' },
      { name: 'Legend', level: '5M', bet: '50,000,000', players: 1, color: 'teal' }
    ],
    tables: [
      { name: 'smaller 1', stakes: '', amount: '50000', buyin: '100000/200000', players: 6, hands: 1 },
      { name: 'smaller 2', stakes: '', amount: '50000', buyin: '1000000/2000000', players: 4, hands: 1 },
      { name: 'smaller 3', stakes: '', amount: '50000', buyin: '1000000/2000000', players: 9, hands: 1 },
      { name: 'smaller 5', stakes: '', amount: '50000', buyin: '10000000/2000000', players: 6, hands: 1 }
    ]
  },
  'kamar-biasa': {
    title: 'KAMAR BIASA',
    icon: '🏝️',
    theme: 'kamar-biasa',
    rooms: [
      { name: '', level: '50000', bet: '500,000', players: 0, color: 'purple' },
      { name: '', level: '100000', bet: '1,000,000', players: 0, color: 'red' },
      { name: '', level: '400000', bet: '4,000,000', players: 0, color: 'cyan' },
      { name: '', level: '1000000', bet: '10,000,000', players: 0, color: 'gold' }
    ]
  },
  'ludo': {
    title: 'LUDO',
    icon: '🎲',
    theme: 'ludo',
    rooms: [
      { name: 'Single Player', level: 'FREE', bet: '0', players: 1, color: 'cyan' },
      { name: 'Online', level: '10K', bet: '10,000', players: 4, color: 'green' }
    ]
  },
  'slots': {
    title: 'SLOTS',
    icon: '🎰',
    theme: 'slots',
    hasSubGames: true,
    subGames: [
      { id: 'lucky7', name: 'Lucky 7', icon: '🍀', color: 'gold' },
      { id: 'megaspin', name: 'Mega Spin', icon: '🌀', color: 'red' },
      { id: 'jackpot', name: 'Jackpot Party', icon: '💎', color: 'purple' },
      { id: 'fruits', name: 'Fruit Mania', icon: '🍒', color: 'cyan' },
      { id: 'treasure', name: 'Treasure Hunt', icon: '🏴‍☠️', color: 'teal' }
    ],
    rooms: [
      { name: '', level: '1K', bet: '1,000', players: 0, color: 'gold' },
      { name: '', level: '10K', bet: '10,000', players: 0, color: 'red' },
      { name: '', level: '100K', bet: '100,000', players: 0, color: 'purple' }
    ]
  },
  'qiuqiu': {
    title: 'QIUQIU',
    icon: '🀄',
    theme: 'qiuqiu',
    rooms: [
      { name: 'Beginner', level: '10K', bet: '10,000', players: 6, color: 'purple' },
      { name: 'Standard', level: '50K', bet: '50,000', players: 4, color: 'red' },
      { name: 'VIP', level: '200K', bet: '200,000', players: 2, color: 'gold' }
    ]
  },
  'sports': {
    title: 'SPORTS',
    icon: '⚽',
    theme: 'sports',
    rooms: [
      { name: 'Football', level: '10K', bet: '10,000', players: 0, color: 'cyan' },
      { name: 'Basketball', level: '10K', bet: '10,000', players: 0, color: 'red' }
    ]
  },
  'games': {
    title: 'GAMES',
    icon: '🎮',
    theme: 'games',
    hasSubGames: true,
    subGames: [
      { id: 'catur', name: 'Catur', icon: '♟️', color: 'purple' },
      { id: 'gaple', name: 'Gaple', icon: '🁣', color: 'cyan' },
      { id: 'remi', name: 'Remi', icon: '🃏', color: 'red' },
      { id: 'solitaire', name: 'Solitaire', icon: '🂡', color: 'gold' },
      { id: 'puzzle', name: 'Puzzle', icon: '🧩', color: 'teal' },
      { id: 'snake', name: 'Snake', icon: '🐍', color: 'green' }
    ],
    rooms: [
      { name: '', level: 'FREE', bet: '0', players: 0, color: 'cyan' },
      { name: '', level: '5K', bet: '5,000', players: 0, color: 'purple' }
    ]
  }
};

// Games that require portrait mode
const forcePortraitGames = ['poker', 'ludo'];

// Modal content data
const modalData = {
  'shop': {
    title: 'SHOP',
    content: '<div style="color:white;text-align:center;"><p>Mua Coins và Diamonds</p><br><p>💰 1,000,000 - VND 26,000</p><p>💰 3,300,000 - VND 79,000</p><p>💰 6,000,000 - VND 132,000</p></div>'
  },
  'settings': {
    title: 'SETTING',
    content: '<div style="color:white;"><p>🌐 Language: English</p><br><p>🔊 Sound: ON</p><p>🎵 Music: ON</p><br><p>Version: 1.0.57</p></div>'
  },
  'leaderboard': {
    title: 'LEADERBOARD',
    content: '<div style="color:white;text-align:center;"><p>🏆 TOP PLAYERS</p><br><p>1. guest-Q9... - 111,110G</p><p>2. guest-tx... - 123,192M</p><p>3. guest-9H... - 105,724M</p></div>'
  },
  'spin': {
    title: 'LUCKY SPIN',
    content: '<div style="color:white;text-align:center;"><p>🎡 SPIN TO WIN!</p><br><p>Remaining Spin: 1</p><p>Next Refresh: 00:24:06</p></div>'
  },
  'referral': {
    title: 'REFERRAL',
    content: '<div style="color:white;text-align:center;"><p>Invite friends and get rewards!</p><br><p>Today\'s Invitations: 0</p><p>Total Rewards: 0</p></div>'
  },
  'event': {
    title: 'EVENT',
    content: '<div style="color:white;text-align:center;"><p>🎉 Current Events</p><br><p>No active events</p></div>'
  },
  'rebate': {
    title: 'REBATE',
    content: '<div style="color:white;text-align:center;"><p>💰 Rebate System</p><br><p>Prizes available: 0</p></div>'
  },
  'follow': {
    title: 'FOLLOW US',
    content: '<div style="color:white;text-align:center;"><p>📱 Social Media</p><br><p>Facebook | Telegram | X</p></div>'
  },
  'inventory': {
    title: 'INVENTORY',
    content: '<div style="color:white;text-align:center;"><p>🎒 Your Items</p><br><p>No items yet</p></div>'
  },
  'vip': {
    title: 'VIP',
    content: '<div style="color:white;text-align:center;"><p>👑 VIP Benefits</p><br><p>Current Level: 0</p></div>'
  },
  'safebox': {
    title: 'SAFE BOX',
    content: '<div style="color:white;text-align:center;"><p>🔐 Secure Storage</p><br><p>Stored: 0</p></div>'
  },
  'friends': {
    title: 'FRIENDS',
    content: '<div style="color:white;text-align:center;"><p>👥 Friend List</p><br><p>No friends yet</p></div>'
  },
  'mail': {
    title: 'MAIL BOX',
    content: '<div style="color:white;text-align:center;"><p>📧 Messages</p><br><p>No new messages</p></div>'
  }
};
