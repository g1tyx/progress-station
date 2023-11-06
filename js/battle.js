class LayerData {
    constructor(color) {
        this.color = color;
    }
}

class LayeredTask extends Task {
    constructor(baseData) {
        super(baseData);
        this.maxLevel = this.baseData.maxLevel;
    }

    do() {
        if (this.isDone()) return;

        super.do();
        if (this.isDone()) {
            this.onDone();
        }
    }

    isDone() {
        return this.level >= this.maxLevel;
    }

    onDone() {
        // Default no-op
    }

    /**
     * @return {number}
     */
    getDisplayedLevel() {
        return this.maxLevel - this.level;
    }
}

class Battle extends LayeredTask {
    constructor(baseData) {
        baseData.maxXp = baseData.faction.maxXp;
        super(baseData);

        this.faction = baseData.faction;
        this.title = prepareTitle(this.title + ' ' + this.faction.title);
        this.description = this.faction.description;
        /** @var {EffectDefinition[]} */
        this.rewards = baseData.rewards;
    }

    isActive(){
        return gameData.currentBattles.hasOwnProperty(this.name);
    }

    toggle(){
        if (this.isActive()) {
            this.stop();
        } else {
            this.start();
        }
    }

    start(){
        if (this.isDone()) {
            // Can't activate completed battles
            return;
        }

        gameData.currentBattles[this.name] = this;
    }

    stop(){
        delete gameData.currentBattles[this.name];
    }

    /**
     * @param {EffectType} effectType
     * @returns {number}
     */
    getEffect(effectType) {
        return Effect.getValue(this, effectType, this.baseData.effects, 1);
    }

    getRewardsDescription(){
        return Effect.getDescription(this, this.rewards, 1);
    }
}

class BossBattle extends Battle {
    increaseXp(ignoreDeath = true) {
        super.increaseXp(ignoreDeath);
    }

    onDone() {
        super.onDone();
        GameEvents.GameOver.trigger({
            bossDefeated: true,
        });
    }

    getRewardsDescription(){
        return 'Essence of Unknown';
    }
}
