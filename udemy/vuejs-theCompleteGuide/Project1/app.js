const app = Vue.createApp({
  data() {
    return {
        monsterHealth: 100,
        playerHealth: 100,
        specialAttackCooldown: false,
        isGameOver: false,
        winner: null,
        battleLog: []
    };
  },
  computed: {
    gameOverMessage() {
        if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
            return 'Both you and the monster have been defeated!';
        } else if (this.playerHealth <= 0) {
            return 'You have been defeated!';
        } else if (this.monsterHealth <= 0) {
            return 'The monster has been defeated!';
        }
        return '';
    },
    monsterHealthStyles() {
        return {width: `${this.monsterHealth}%`};
    },
    playerHealthStyles() {
        return {width: `${this.playerHealth}%`};
    }
  },
  watch: {
    monsterHealth(newValue) {
        if (newValue <= 0 && this.playerHealth <= 0) {
            this.isGameOver = true;
            this.winner = 'draw';
        } else if (newValue <= 0) {
            this.isGameOver = true;
            this.winner = 'player';
        }
    },
    playerHealth(newValue) {
        if (newValue <= 0 && this.monsterHealth <= 0) {
            this.isGameOver = true;
            this.winner = 'draw';
        } else if (newValue <= 0) {
            this.isGameOver = true;
            this.winner = 'monster';
        }
    }
  },
  methods: {
    attackMonster() {
        if (this.monsterHealth <= 0) {
            console.log('Cannot attack, monster is already defeated.');
            return;
        }

        const damage = Math.floor(Math.random() * 10) + 1;
        const verifiedDamage = this.monsterHealth - damage < 0 ? this.monsterHealth : damage; // Ensure damage is not negative
        this.monsterHealth -= verifiedDamage;
        console.log(`Monster attacked for ${verifiedDamage} damage. Monster health: ${this.monsterHealth}`);
        this.battleLog.push(`Monster attacked for ${verifiedDamage} damage. Monster health: ${this.monsterHealth}`);

        if (this.monsterHealth <= 0) {
            this.battleLog.push('Monster has been defeated!');
        }

        this.attackPlayer();
    },
    attackPlayer() {
        const damage = Math.floor(Math.random() * 7) + 5;
        const verifiedDamage = this.playerHealth - damage < 0 ? this.playerHealth : damage; // Ensure damage is not negative
        this.playerHealth -= verifiedDamage;
        console.log(`Player attacked for ${verifiedDamage} damage. Player health: ${this.playerHealth}`);
        this.battleLog.push(`Player attacked for ${verifiedDamage} damage. Player health: ${this.playerHealth}`);

        if (this.playerHealth <= 0) {
            this.battleLog.push('Player has been defeated!');
        }
    },
    specialAttack() {
        if (this.monsterHealth <= 0) {
            console.log('Cannot perform special attack, monster is already defeated.');
            return;
        }

        if (this.specialAttackCooldown) {
            console.log('Special attack is on cooldown.');
            return;
        }

        const specialDamage = Math.floor(Math.random() * 30) + 1;
        const verifiedDamage = this.monsterHealth - specialDamage < 0 ? this.monsterHealth : specialDamage; // Ensure damage is not negative
        this.monsterHealth -= verifiedDamage;
        console.log(`Monster hit with special attack for ${verifiedDamage} damage. Monster health: ${this.monsterHealth}`);
        this.battleLog.push(`Monster hit with special attack for ${verifiedDamage} damage. Monster health: ${this.monsterHealth}`);

        if (this.monsterHealth <= 0) {
            this.isGameOver = true;
            console.log('Monster has been defeated by special attack!');
            this.battleLog.push('Monster has been defeated by special attack!');
        }

        setTimeout(() => {
            this.specialAttackCooldown = false;
            console.log('Special attack is ready again.');
        }, 5000); // Cooldown of 5 seconds

        this.specialAttackCooldown = true;
    },
    heal() {
        if (this.playerHealth >= 100) {
            console.log('Player health is already at maximum.');
            return;
        }

        if (this.playerHealth <= 0) {
            console.log('Cannot heal, player is already defeated.');
            return;
        }

        const healAmount = Math.floor(Math.random() * 10) + 1;
        const verifiedHealAmount = this.playerHealth + healAmount > 100 ? 100 - this.playerHealth : healAmount; // Ensure healing does not exceed max health
        this.playerHealth += verifiedHealAmount;
        console.log(`Player healed for ${verifiedHealAmount}. Player health: ${this.playerHealth}`);
        this.battleLog.push(`Player healed for ${verifiedHealAmount}. Player health: ${this.playerHealth}`);
    },
    surrender() {
        this.isGameOver = true;
        this.winner = 'monster';
        this.battleLog.push('Player surrendered. Monster wins!');
    },
    startNewGame() {
        this.monsterHealth = 100;
        this.playerHealth = 100;
        this.specialAttackCooldown = false;
        this.isGameOver = false;
        this.winner = null;
        this.battleLog = [];
        console.log('New game started!');
    }
  }
});

app.mount('#game');