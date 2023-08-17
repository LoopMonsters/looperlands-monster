
var Types = require("../../shared/js/gametypes");

var Properties = {
    rat: {
        drops: {
            flask: 40,
            burger: 10,
            firepotion: 5
        },
        hp: 25,
        armor: 1,
        weapon: 1
    },
    
    skeleton: {
        drops: {
            flask: 40,
            axe: 20,
            firepotion: 5
        },
        hp: 110,
        armor: 2,
        weapon: 2
    },
    
    goblin: {
        drops: {
            flask: 50,
            axe: 10,
            firepotion: 5
        },
        hp: 90,
        armor: 2,
        weapon: 1
    },
    
    ogre: {
        drops: {
            burger: 10,
            flask: 50,
            morningstar: 20,
            firepotion: 5
        },
        hp: 200,
        armor: 3,
        weapon: 2
    },
    
    spectre: {
        drops: {
            flask: 30,
            redsword: 30,
            firepotion: 5
        },
        hp: 250,
        armor: 2,
        weapon: 4
    },
    
    deathknight: {
        drops: {
            burger: 95,
            firepotion: 5
        },
        hp: 250,
        armor: 3,
        weapon: 3
    },
    
    crab: {
        drops: {
            flask: 50,
            axe: 20,
            firepotion: 5
        },
        hp: 60,
        armor: 2,
        weapon: 1
    },
    
    snake: {
        drops: {
            flask: 50,
            morningstar: 10,
            firepotion: 5
        },
        hp: 150,
        armor: 3,
        weapon: 2
    },
    
    skeleton2: {
        drops: {
            flask: 60,
            bluesword: 15,
            firepotion: 5
        },
        hp: 200,
        armor: 3,
        weapon: 3
    },
    
    eye: {
        drops: {
            flask: 50,
            redsword: 10,
            firepotion: 5
        },
        hp: 200,
        armor: 3,
        weapon: 3
    },
    
    bat: {
        drops: {
            flask: 50,
            axe: 10,
            firepotion: 5
        },
        hp: 80,
        armor: 2,
        weapon: 1
    },
    
    wizard: {
        drops: {
            flask: 50,
            firepotion: 5
        },
        hp: 100,
        armor: 2,
        weapon: 6
    },
    
    boss: {
        drops: {
            goldensword: 10,
            flask: 50
        },
        hp: 5000,
        armor: 5,
        weapon: 8,
        redpacket: true
    },

    slime: {
        hp: 100,
        armor: 2,
        weapon: 2,
        xp: 10
    },
    
    kingslime: {
        hp: 50,
        armor: 2,
        weapon: 1,
        xp: 10
    },

    silkshade: {
        hp: 1000,
        armor: 2,
        weapon: 1,
        xp: 10
    },

    

    redslime: {
        hp: 50,
        armor: 2,
        weapon: 1,
        xp: 10
    },    

    spider: {
        drops: {
            flask: 65,
        },
        hp: 2,
        armor: 11,
        weapon: 1
    },

    minimag: {
        drops: {
            flask: 50
        },
        hp: 500,
        armor: 25,
        weapon: 4,
        aoe: {
            damage: 60,
            ondeath: true
        }
    },

    megamag: {
        drops: {
            burger: 100
        },
        hp: 15000,
        armor: 40,
        weapon: 8,
        aoe: {
            damage: 100,
            range: 2
        },
        redpacket: true,
        xp: 50000,  
        expMultiplier: {
            duration: 1800
        },
        messages: ['Perish!', 'Be gone!', 'Burn!', 'Wither!', 'Suffer!']
    }
};

Properties.getArmorLevel = function(kind) {
    try {
        if(Types.isMob(kind)) {
            return Properties[Types.getKindAsString(kind)].armor;
        } else {
            return 1;
        }
    } catch(e) {
        console.error("No level found for armor: "+Types.getKindAsString(kind));
    }
    return 1;
};

Properties.getWeaponLevel = function(kind) {
    try {
        if(Types.isMob(kind)) {
            return Properties[Types.getKindAsString(kind)].weapon;
        } else {
            return Types.getWeaponRank(kind) + 1;
        }
    } catch(e) {
        console.error("No level found for weapon: "+Types.getKindAsString(kind));
    }
};

Properties.getHitPoints = function(kind) {
    return Properties[Types.getKindAsString(kind)].hp;
};

module.exports = Properties;