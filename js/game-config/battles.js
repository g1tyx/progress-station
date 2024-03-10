'use strict';

/**
 * @type {Object<FactionDefinition>}
 */
const factions = {
    NovaFlies: {
        title: 'Nova Flies', maxXp: 50,
        description: 'Similar to earth\'s long lost fireflies, these bugs are glowing on their own. Experiencing their gigantic numbers and blinding brightness quickly explains the name.',
    },
    Astrogoblins: {
        title: 'Astrogoblins', maxXp: 100,
        description: 'Mischievous beings that can be found in every corner of the galaxy, Astrogoblins zip around in makeshift spacecrafts, armed with primitive weapons and a liking for interstellar chaos.'
    },
    CometCrawlers: {
        title: 'Comet Crawlers', maxXp: 300,
        description: 'These beagle-sized beetles travel on the surface of comets as they are attracted by metal alloys that are unfortunately also commonly found in space stations. They will attack in large numbers if they sense one of their own being harmed.'
    },
    Scavengers: {
        title: 'Scavengers', maxXp: 900,
        description: 'Outcasts from civilizations across the galaxy, Scavengers form nomadic crews, dressed in distinctive leather attire. Masters of illicit trade and makeshift tech, they roam, seeking quick profits through heists and elusive alliances.'
    },
    MeteorMaws: {
        title: 'Meteor Maws', maxXp: 2_500,
        description: 'Gigantic, worm-like beings that burrow through meteors and small moons, leaving characteristic holes. They are attracted to the vibrations of engines and can engulf smaller vessels whole.'
    },
    SpacePirates: {
        title: 'Space Pirates', maxXp: 8_000,
        description: 'Buccaneers sailing the astral seas, Space Pirates are notorious for their flashy ships, over-the-top personalities, and the relentless pursuit of rare space booty.'
    },
    StarMantas: {
        title: 'Star Mantas', maxXp: 25_000,
        description: 'Majestic creatures that glide through the vacuum of space, their vast wingspans absorb cosmic radiation. Often mistaken for celestial phenomena, they can be fiercely territorial.'
    },
    VoidVikings: {
        title: 'Void Vikings', maxXp: 75_000,
        description: 'Clad in dark matter armor, Void Vikings raid across the galaxy in search of glory and cosmic runes. Their battle cries resonate through the vacuum, freezing the hearts of their foes.'
    },
    ThunderDragon: {
        title: 'Thunder Dragon', maxXp: 200_000,
        description: 'Roaming the storm nebula, Thunder Dragons are colossal beings of electric energy. Lightning crackles across their scales as they soar through the interstellar space.'
    },
    AstralSharks: {
        title: 'Astral Sharks', maxXp: 500_000,
        description: 'Legends of the cosmic deep, Astral Sharks glide through space with celestial fins and stardust-infused teeth. They\'re the titans of the galactic oceans.'
    },

    Destroyer: {
        title: 'Destroyer', maxXp: 5_000_000,
        description: 'An immense, dark mass of writhing tentacles, teeth and a thousand eyes. The vacuum of space around the station suppresses all noise, ' +
            'but you can feel the hatred of the alien beast and see it\'s determination to destroy everything you have built up.'
    },
};

/**
 * @type {Object<Battle>}
 */
const battles = {
    NovaFlies10: new Battle({
        title: 'Stray',
        targetLevel: 10,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 0}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 1},
        ],
    }),
    NovaFlies20: new Battle({
        title: 'Harmless',
        targetLevel: 20,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 5}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 1},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins10: new Battle({
        title: 'Wimpy',
        targetLevel: 10,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 10}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 2},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies30: new Battle({
        title: 'Glowing',
        targetLevel: 30,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 15}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 2},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins20: new Battle({
        title: 'Courageous',
        targetLevel: 20,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 20}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 3},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies50: new Battle({
        title: 'Dazzling',
        targetLevel: 50,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 25}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 3},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins30: new Battle({
        title: 'Trained',
        targetLevel: 30,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 30}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 4},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers10: new Battle({
        title: 'Handful of',
        targetLevel: 10,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 40}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 3},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies75: new Battle({
        title: 'Numerous',
        targetLevel: 75,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 50}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 4},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies100: new Battle({
        title: 'Blinding',
        targetLevel: 100,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 60}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 6},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins50: new Battle({
        title: 'Fearless',
        targetLevel: 50,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 75}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 6},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers20: new Battle({
        title: 'Small swarm of',
        targetLevel: 20,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 90}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 4},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies150: new Battle({
        title: 'Magnificent',
        targetLevel: 150,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 100}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 9},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins75: new Battle({
        title: 'Bold',
        targetLevel: 75,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 125}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 9},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers30: new Battle({
        title: 'Starving',
        targetLevel: 30,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 150}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 6},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers10: new Battle({
        title: 'Lost',
        targetLevel: 10,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 175}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 4},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies200: new Battle({
        title: 'Countless',
        targetLevel: 200,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 200}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 14},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins100: new Battle({
        title: 'Feral',
        targetLevel: 100,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 250}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 13},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies300: new Battle({
        title: 'Second Sun',
        targetLevel: 300,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 300}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 20},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins150: new Battle({
        title: 'Rogue',
        targetLevel: 150,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 300}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 19},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers50: new Battle({
        title: 'Aggressive',
        targetLevel: 50,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 330}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 9},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers20: new Battle({
        title: 'Violent',
        targetLevel: 20,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 360}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 6},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins200: new Battle({
        title: 'Savage',
        targetLevel: 200,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 400}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 27},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers75: new Battle({
        title: 'Swarming',
        targetLevel: 75,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 450}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 13},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies500: new Battle({
        title: 'Super',
        targetLevel: 500,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 500}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 29},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws10: new Battle({
        title: 'Two',
        targetLevel: 10,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 520}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 5},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers30: new Battle({
        title: 'Lunatic',
        targetLevel: 30,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 540}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 8},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins300: new Battle({
        title: 'Merciless',
        targetLevel: 300,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 600}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 39},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers100: new Battle({
        title: 'Nozzling',
        targetLevel: 100,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 675}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 19},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies750: new Battle({
        title: 'Mega',
        targetLevel: 750,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 750}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 41},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers150: new Battle({
        title: 'Glitz eating',
        targetLevel: 150,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 900}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 28},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers50: new Battle({
        title: 'Reckless',
        targetLevel: 50,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 950}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 12},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    NovaFlies1000: new Battle({
        title: 'Ultra',
        targetLevel: 1000,
        faction: factions.NovaFlies,
        effects: [{effectType: EffectType.Danger, baseValue: 1000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 60},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins500: new Battle({
        title: 'Horde of',
        targetLevel: 500,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 1000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 57},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws20: new Battle({
        title: 'Hungry',
        targetLevel: 20,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 1100}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 7},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers200: new Battle({
        title: 'Endless',
        targetLevel: 200,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 1200}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 41},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers75: new Battle({
        title: 'Insatiable',
        targetLevel: 75,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 1350}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 18},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins750: new Battle({
        title: 'Legendary',
        targetLevel: 750,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 1500}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 83},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws30: new Battle({
        title: 'Gobbling',
        targetLevel: 30,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 1550}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 11},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates10: new Battle({
        title: 'Roaming',
        targetLevel: 10,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 1600}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 6},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers300: new Battle({
        title: 'Infestation of',
        targetLevel: 300,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 1800}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 59},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers100: new Battle({
        title: 'Ruthless',
        targetLevel: 100,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 1900}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 26},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Astrogoblins1000: new Battle({
        title: 'Apocalyptic',
        targetLevel: 1000,
        faction: factions.Astrogoblins,
        effects: [{effectType: EffectType.Danger, baseValue: 2000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 120},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws50: new Battle({
        title: 'Clew of',
        targetLevel: 50,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 2500}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 15},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers150: new Battle({
        title: 'Marauding',
        targetLevel: 150,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 2700}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 37},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers500: new Battle({
        title: 'Ravaging',
        targetLevel: 500,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 3000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 86},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates20: new Battle({
        title: 'Organized',
        targetLevel: 20,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 3200}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 9},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers200: new Battle({
        title: 'Void-Bound',
        targetLevel: 200,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 3600}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 54},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws75: new Battle({
        title: 'Devouring',
        targetLevel: 75,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 3750}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 22},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers750: new Battle({
        title: 'All-munching',
        targetLevel: 750,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 4500}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 124},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates30: new Battle({
        title: 'Cruising',
        targetLevel: 30,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 4800}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 13},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws100: new Battle({
        title: 'Radiant',
        targetLevel: 100,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 5000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 32},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas10: new Battle({
        title: 'Peaceful',
        targetLevel: 10,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 5200}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 7},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers300: new Battle({
        title: 'Army of',
        targetLevel: 300,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 5400}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 79},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    CometCrawlers1000: new Battle({
        title: 'Eclipsing',
        targetLevel: 1000,
        faction: factions.CometCrawlers,
        effects: [{effectType: EffectType.Danger, baseValue: 6000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 180},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws150: new Battle({
        title: 'Glitz hardened',
        targetLevel: 150,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 7500}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 47},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates50: new Battle({
        title: 'Dominating',
        targetLevel: 50,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 8000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 18},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers500: new Battle({
        title: 'Unbeatable',
        targetLevel: 500,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 9000}],
        rewards: [
            {effectType: EffectType.Research, baseValue: 114},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws200: new Battle({
        title: 'Way too many',
        targetLevel: 200,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 10000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 68},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas20: new Battle({
        title: 'Curious',
        targetLevel: 20,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 11000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 10},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates75: new Battle({
        title: 'Overwhelming',
        targetLevel: 75,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 12000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 27},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers750: new Battle({
        title: 'Eternally Cursed',
        targetLevel: 750,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 13500}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 165},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws300: new Battle({
        title: 'Space swallowing',
        targetLevel: 300,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 15000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 98},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas30: new Battle({
        title: 'Gliding',
        targetLevel: 30,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 15000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 15},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings10: new Battle({
        title: 'Scouting',
        targetLevel: 10,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 15500}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 8},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates100: new Battle({
        title: 'Indomitable',
        targetLevel: 100,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 16000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 39},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    Scavengers1000: new Battle({
        title: 'Dark Galaxy',
        targetLevel: 1000,
        faction: factions.Scavengers,
        effects: [{effectType: EffectType.Danger, baseValue: 18000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 240},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates150: new Battle({
        title: 'Star-Stealing',
        targetLevel: 150,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 24000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 56},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws500: new Battle({
        title: 'A Million',
        targetLevel: 500,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 25000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 143},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas50: new Battle({
        title: 'Soaring',
        targetLevel: 50,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 27500}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 21},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings20: new Battle({
        title: 'Looting',
        targetLevel: 20,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 30000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 12},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates200: new Battle({
        title: 'Cosmos\' Dread',
        targetLevel: 200,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 32000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 81},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws750: new Battle({
        title: 'Two more',
        targetLevel: 750,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 37500}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 207},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas75: new Battle({
        title: 'Traced',
        targetLevel: 75,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 38750}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 31},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon10: new Battle({
        title: 'Decrepit',
        targetLevel: 10,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 40000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 9},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings30: new Battle({
        title: 'Reveling',
        targetLevel: 30,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 45000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 17},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates300: new Battle({
        title: 'King of all',
        targetLevel: 300,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 48000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 118},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    MeteorMaws1000: new Battle({
        title: 'Overlord of',
        targetLevel: 1000,
        faction: factions.MeteorMaws,
        effects: [{effectType: EffectType.Danger, baseValue: 50000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 300},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas100: new Battle({
        title: 'Straitened',
        targetLevel: 100,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 62500}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 45},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas150: new Battle({
        title: 'Neon Red',
        targetLevel: 150,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 75000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 65},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings50: new Battle({
        title: 'Raiding',
        targetLevel: 50,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 77500}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 24},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates500: new Battle({
        title: 'Cosmic\'s Edge',
        targetLevel: 500,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 80000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 171},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon20: new Battle({
        title: 'Venerable',
        targetLevel: 20,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 90000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 13},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas200: new Battle({
        title: 'Furious',
        targetLevel: 200,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 100000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 95},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks10: new Battle({
        title: 'Lone',
        targetLevel: 10,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 106250}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 10},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings75: new Battle({
        title: 'Rampaging',
        targetLevel: 75,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 112500}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 35},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates750: new Battle({
        title: 'Twilight Sailing',
        targetLevel: 750,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 120000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 248},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon30: new Battle({
        title: 'Ancient',
        targetLevel: 30,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 135000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 19},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas300: new Battle({
        title: 'Vengeful',
        targetLevel: 300,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 150000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 138},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings100: new Battle({
        title: 'Space-Borne',
        targetLevel: 100,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 155000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 51},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    SpacePirates1000: new Battle({
        title: 'Black Hole',
        targetLevel: 1000,
        faction: factions.SpacePirates,
        effects: [{effectType: EffectType.Danger, baseValue: 160000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 360},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon50: new Battle({
        title: 'Majestic',
        targetLevel: 50,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 200000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 27},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks20: new Battle({
        title: 'Pack of',
        targetLevel: 20,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 212500}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 15},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings150: new Battle({
        title: 'Super',
        targetLevel: 150,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 225000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 75},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas500: new Battle({
        title: 'Squadron of',
        targetLevel: 500,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 250000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 200},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings200: new Battle({
        title: 'Duper',
        targetLevel: 200,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 300000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 108},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon75: new Battle({
        title: 'Sublime',
        targetLevel: 75,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 300000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 40},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks30: new Battle({
        title: 'Hunting',
        targetLevel: 30,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 337500}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 21},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas750: new Battle({
        title: 'Transcended',
        targetLevel: 750,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 375000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 290},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon100: new Battle({
        title: 'Maelstrom',
        targetLevel: 100,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 400000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 58},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings300: new Battle({
        title: 'War waging',
        targetLevel: 300,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 450000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 157},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    StarMantas1000: new Battle({
        title: 'Ethereal',
        targetLevel: 1000,
        faction: factions.StarMantas,
        effects: [{effectType: EffectType.Danger, baseValue: 500000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 420},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks50: new Battle({
        title: 'Star-Prowling',
        targetLevel: 50,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 550000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 31},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon150: new Battle({
        title: 'Gigawatt',
        targetLevel: 150,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 600000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 84},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings500: new Battle({
        title: 'Ultra heavy',
        targetLevel: 500,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 750000}],
        rewards: [
            {effectType: EffectType.Industry, baseValue: 228},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks75: new Battle({
        title: 'Murderous',
        targetLevel: 75,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 775000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 44},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon200: new Battle({
        title: 'Celestial',
        targetLevel: 200,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 800000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 122},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks100: new Battle({
        title: 'Invisible',
        targetLevel: 100,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 1000000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 64},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings750: new Battle({
        title: 'Universe-Raiding',
        targetLevel: 750,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 1125000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 331},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon300: new Battle({
        title: 'Nuclear',
        targetLevel: 300,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 1200000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 177},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    VoidVikings1000: new Battle({
        title: 'Ragnarök bringing',
        targetLevel: 1000,
        faction: factions.VoidVikings,
        effects: [{effectType: EffectType.Danger, baseValue: 1500000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 480},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks150: new Battle({
        title: 'Diamond Scaled',
        targetLevel: 150,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 1750000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 93},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon500: new Battle({
        title: 'Hyper',
        targetLevel: 500,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 2000000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 257},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks200: new Battle({
        title: 'Kamikaze',
        targetLevel: 200,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 2500000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 135},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon750: new Battle({
        title: 'Fusion Powered',
        targetLevel: 750,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 3000000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 372},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks300: new Battle({
        title: 'Faster than Light',
        targetLevel: 300,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 3500000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 196},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    ThunderDragon1000: new Battle({
        title: 'Anti-Matter',
        targetLevel: 1000,
        faction: factions.ThunderDragon,
        effects: [{effectType: EffectType.Danger, baseValue: 4000000}],
        rewards: [
            {effectType: EffectType.Energy, baseValue: 540},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks500: new Battle({
        title: 'The Last',
        targetLevel: 500,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 5000000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 285},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks750: new Battle({
        title: 'Apex',
        targetLevel: 750,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 7500000}],
        rewards: [
            {effectType: EffectType.Military, baseValue: 414},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),
    AstralSharks1000: new Battle({
        title: 'End of Times',
        targetLevel: 1000,
        faction: factions.AstralSharks,
        effects: [{effectType: EffectType.Danger, baseValue: 10000000}],
        rewards: [
            {effectType: EffectType.Growth, baseValue: 600},
            {effectType: EffectType.MilitaryFactor, baseValue: 0.1},
        ],
    }),

    Destroyer: new BossBattle({
        titleGenerator: new NameGenerator()
            .add([
                'Glorgomax',
                'Munchulor',
                'Snorgolan',
                'Tentakulon',
                'Snafflogon',
                'Gobblethrox',
                'Snorplaxion',
                'Chompulor',
            ])
            .skipSeparator()
            .add(', the')
            .add([
                'Destroyer',
                'Shadow of Cosmos',
                'Essence Harvester',
                'Decimator',
                'Jester of Annihilation'
            ]),
        targetLevel: 10,
        faction: factions.Destroyer,
        effects: [{effectType: EffectType.Heat, baseValue: 5}, {effectType: EffectType.GrowthFactor, baseValue: -1.00}],
        rewards: [],
    }),
};

/**
 * How many battles lie between the boss appearance and the boss battle.
 * @type {number}
 */
const bossBattleDefaultDistance = 4;
const bossBattleApproachInterval = 200; // Cycles
/** @type {BossBattle} */
const bossBattle = battles.Destroyer;

const battleRequirements = [
    new AttributeRequirement('playthrough', [{attribute: attributes.research, requirement: 10}]),
    new AttributeRequirement('playthrough', [{attribute: attributes.research, requirement: 20}]),
    new AttributeRequirement('playthrough', [{attribute: attributes.research, requirement: 50}]),
    new AttributeRequirement('playthrough', [{attribute: attributes.research, requirement: 100}]),
];

/**
 *
 * @return {{limit: number, requirement: AttributeRequirement|null}}
 */
function maximumAvailableBattles() {
    const research = attributes.research.getValue();
    if (research >= 100) return {limit: 5, requirement: null};
    if (research >= 50) return {limit: 4, requirement: battleRequirements[3]};
    if (research >= 20) return {limit: 3, requirement: battleRequirements[2]};
    if (research >= 10) return {limit: 2, requirement: battleRequirements[1]};
    return {limit: 1, requirement: battleRequirements[0]};
}

const layerData = [
    new LayerData('#ffe119'),
    new LayerData('#f58231'),
    new LayerData('#e6194B'),
    new LayerData('#911eb4'),
    new LayerData('#4363d8'),
    new LayerData('#47ff00'),
];

const lastLayerData = new LayerData('#000000');
