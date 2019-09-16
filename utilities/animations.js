import * as Animatable from 'react-native-animatable';

// Animations.js
//module.exports = {
export default registerAnimation = () => {
    Animatable.initializeRegistryWithDefinitions({
        rotate: Animations.rotate,
        glow: Animations.glow,
        glowPulse: Animations.glowPulse,
        sun: Animations.sun,
        sunTop: Animations.sunTop,
        sunLeft: Animations.sunLeft,
        sunRight: Animations.sunRight,
        moon: Animations.moon,
        moonTop: Animations.moonTop,
        moonLeft: Animations.moonLeft,
        moonRight: Animations.moonRight,
        stars1: Animations.stars1,
        stars2: Animations.stars2,
        cloudTop: Animations.cloudTop,
        cloudLeft: Animations.cloudLeft,
        cloudRight: Animations.cloudRight,
        cloudLeftTop: Animations.cloudLeftTop,
        cloudRightBottom: Animations.cloudRightBottom,
        thunderBig: Animations.thunderBig,
        thunderSmall: Animations.thunderSmall,
        thunderSmallL: Animations.thunderSmallL,
        thunderSmallR: Animations.thunderSmallR,
        raindropMid: Animations.raindropMid,
        raindropLeft: Animations.raindropLeft,
        raindropRight: Animations.raindropRight,
        raindropMidSmall: Animations.raindropMidSmall,
        raindropLeftSmall: Animations.raindropLeftSmall,
        raindropRightSmall: Animations.raindropRightSmall,
        raindropMidLeft: Animations.raindropMidLeft,
        raindropMidRight: Animations.raindropMidRight,
        snowdropMid: Animations.snowdropMid,
        snowdropLeft: Animations.snowdropLeft,
        snowdropRight: Animations.snowdropRight,
        snowdropMidSmall: Animations.snowdropMidSmall,
        snowdropLeftSmall: Animations.snowdropLeftSmall,
        snowdropRightSmall: Animations.snowdropRightSmall,
        snowdropMidLeft: Animations.snowdropMidLeft,
        snowdropMidRight: Animations.snowdropMidRight,
        haze: Animations.haze,
        tornado: Animations.tornado,
    });
}

Animations = {
    rotate: {
        0: {
            translateX: 0,
            translateY: 0,
            color: 'rgba(0, 0, 0, 1)',
            rotate: '0deg'
        },
        0.5: {
            translateX: 0,
            translateY: 0,
            color: 'rgba(64, 64, 64, 1)',
            rotate: '180deg'
        },
        1: {
            translateX: 0,
            translateY: 0,
            color: 'rgba(0, 0, 0, 1)',
            rotate: '360deg'
        },
    },
    glow: {
        0: {
            scale: 1,
            color: 'rgba(0,0,0,0.6)',
            transform: [{ rotate: '0deg' }]
        },
        0.5: {
            scale: 1,
            color: 'rgba(255, 127, 34, 0.5)',
            transform: [{ rotate: '23deg' }]
        },
        1: {
            scale: 1,
            color: 'rgba(0,0,0,0.6)',
            transform: [{ rotate: '45deg' }]
        }
    },
    glowPulse: { // loading text animation
        0: {
            scale: 1,
            color: 'rgba(0, 0, 0, 1)',
            translateX: 0,
            translateY: 0,
        },
        0.5: {
            scale: 1.03,
            color: 'rgba(0, 0, 0, 1)',
            translateX: 0,
            translateY: 0,
        },
        1: {
            scale: 1,
            color: 'rgba(0, 0, 0, 1)',
            translateX: 0,
            translateY: 0,
        }
    },
    sun: { // sun at center position
        from: {
            translateX: 0,
            translateY: 0,
            rotate: '-180deg'
        },
        to: {
            translateX: 0,
            translateY: 0,
            rotate: '180deg'
        },
    },
    sunTop: { // sun at top position
        from: {
            translateX: 0,
            translateY: -20,
            rotate: '-180deg'
        },
        to: {
            translateX: 0,
            translateY: -20,
            rotate: '180deg'
        },
    },
    sunLeft: { // sun at left position
        from: {
            translateX: -40,
            translateY: 0,
            rotate: '-180deg'
        },
        to: {
            translateX: -40,
            translateY: 0,
            rotate: '180deg'
        },
    },
    sunRight: { // sun at right position
        from: {
            translateX: 40,
            translateY: 0,
            rotate: '-180deg'
        },
        to: {
            translateX: 40,
            translateY: 0,
            rotate: '180deg'
        },
    },
    moon: { // moon at center position
        0: {
            translateX: 0,
            translateY: 0,
            color: 'rgba(204, 204, 204, 1)',
            rotate: '-5deg'
        },
        0.5: {
            translateX: 0,
            translateY: 0,
            color: 'rgba(255, 255, 255, 1)',
            rotate: '5deg'
        },
        1: {
            translateX: 0,
            translateY: 0,
            color: 'rgba(204, 204, 204, 1)',
            rotate: '-5deg'
        },
    },
    moonTop: { // moon at top position
        0: {
            translateX: 0,
            translateY: -20,
            color: 'rgba(242, 242, 242, 0.9)',
            rotate: '-10deg'
        },
        0.5: {
            translateX: 0,
            translateY: -20,
            color: 'rgba(164, 164, 164, 0.8)',
            rotate: '5deg'
        },
        1: {
            translateX: 0,
            translateY: -20,
            color: 'rgba(242, 242, 242, 0.9)',
            rotate: '-10deg'
        },
    },
    moonLeft: { // moon at left position
        0: {
            translateX: -50,
            translateY: 0,
            color: 'rgba(242, 242, 242, 0.9)',
            rotate: '-10deg'
        },
        0.5: {
            translateX: -50,
            translateY: 0,
            color: 'rgba(164, 164, 164, 0.8)',
            rotate: '5deg'
        },
        1: {
            translateX: -50,
            translateY: 0,
            color: 'rgba(242, 242, 242, 0.9)',
            rotate: '-10deg'
        },
    },
    moonRight: { // moon at right position
        0: {
            translateX: 50,
            translateY: 0,
            color: 'rgba(242, 242, 242, 0.9)',
            rotate: '-10deg'
        },
        0.5: {
            translateX: 50,
            translateY: 0,
            color: 'rgba(164, 164, 164, 0.8)',
            rotate: '5deg'
        },
        1: {
            translateX: 50,
            translateY: 0,
            color: 'rgba(242, 242, 242, 0.9)',
            rotate: '-10deg'
        },
    },
    stars1: {
        0: {
            scale: 1,
            color: 'rgba(200, 200, 200, 0.5)',
            translateX: -70,
            translateY: 10,
        },
        0.3: {
            scale: 1.09,
            color: 'rgba(255, 255, 255, 1)',
            translateX: -64,
            translateY: 8,
        },
        0.5: {
            scale: 1.1,
            color: 'rgba(255, 255, 255, 1)',
            translateX: -64,
            translateY: 8,
        },
        1: {
            scale: 1,
            color: 'rgba(200, 200, 200, 0.5)',
            translateX: -70,
            translateY: 10,
        }
    },
    stars2: {
        0: {
            scale: 1,
            color: 'rgba(200, 200, 200, 0.7)',
            translateX: 40,
            translateY: 40,
        },
        0.7: {
            scale: 1.07,
            color: 'rgba(255, 255, 255, 1)',
            translateX: 36,
            translateY: 37,
        },
        1: {
            scale: 1,
            color: 'rgba(200, 200, 200, 0.7)',
            translateX: 40,
            translateY: 40,
        }
    },
    cloudTop: {
        0: {
            scale: 1,
            translateX: -30,
            translateY: 0,
        },
        0.5: {
            scale: 1.3,
            translateX: 20,
            translateY: 0,
        },
        1: {
            scale: 1,
            translateX: -30,
            translateY: 0,
        }
    },
    cloudLeft: {
        0: {
            scale: 1,
            translateX: -60,
            translateY: 30,
        },
        0.5: {
            scale: 1.3,
            translateX: -10,
            translateY: 30,
        },
        1: {
            scale: 1,
            translateX: -60,
            translateY: 30,
        }
    },
    cloudLeftTop: {
        0: {
            scale: 1,
            translateX: -80,
            translateY: 10,
        },
        0.5: {
            scale: 1.3,
            translateX: -30,
            translateY: 15,
        },
        1: {
            scale: 1,
            translateX: -80,
            translateY: 10,
        }
    },
    cloudRight: {
        0: {
            scale: 1,
            translateX: -10,
            translateY: 10,
        },
        0.5: {
            scale: 1.3,
            translateX: 50,
            translateY: 10,
        },
        1: {
            scale: 1,
            translateX: -10,
            translateY: 10,
        }
    },
    cloudRightBottom: {
        0: {
            scale: 1.3,
            translateX: 30,
            translateY: 40,
        },
        0.5: {
            scale: 1,
            translateX: 70,
            translateY: 35,
        },
        1: {
            scale: 1.3,
            translateX: 30,
            translateY: 40,
        }
    },
    thunderBig: {
        0: {
            scale: 1,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 2,
            translateY: 2,
        },
        0.1: {
            scale: 1,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 0,
            translateY: 2,
        },
        0.2: {
            scale: 1,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 4,
            translateY: 2,
        },
        0.3: {
            scale: 1,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 2,
            translateY: 2,
        },
        0.7: {
            scale: 1,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: -2,
            translateY: 20,
        },
        0.8: {
            scale: 1,
            color: 'rgba(255, 255, 255, 1)',
            translateX: -2,
            translateY: 20,
        },
        1: {
            scale: 1,
            color: 'rgba(255, 255, 255, 0.2)',
            translateX: -2,
            translateY: 20,
        }
    },
    thunderSmall: {
        0: {
            scale: 0.8,
            color: 'rgba(255, 255, 255, 1)',
            translateX: 0,
            translateY: 16,
        },
        1: {
            scale: 0.8,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 0,
            translateY: 16,
        }
    },
    thunderSmallL: {
        0: {
            scale: 0.6,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: -50,
            translateY: 24,
        },
        0.3: {
            scale: 0.6,
            color: 'rgba(255, 255, 255, 1)',
            translateX: -50,
            translateY: 24,
        },
        1: {
            scale: 0.6,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: -50,
            translateY: 24,
        }
    },
    thunderSmallR: {
        0: {
            scale: 0.6,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 50,
            translateY: 24,
        },
        0.7: {
            scale: 0.6,
            color: 'rgba(255, 255, 255, 1)',
            translateX: 50,
            translateY: 24,
        },
        1: {
            scale: 0.6,
            color: 'rgba(242, 196, 64, 0.8)',
            translateX: 50,
            translateY: 24,
        }
    },
    raindropMid: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: 0,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: -6,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: -12,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropLeft: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: 20,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: 14,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: 8,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropRight: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: -20,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: -26,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.8)',
            translateX: -32,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropMidSmall: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: 0,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -6,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -12,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropLeftSmall: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: 20,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: 14,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: 8,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropRightSmall: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -20,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -26,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -32,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropMidLeft: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: 10,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: 4,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -2,
            translateY: 50,
            rotate: '110deg',
        }
    },
    raindropMidRight: {
        0: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -10,
            translateY: 10,
            rotate: '110deg',
        },
        0.5: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -16,
            translateY: 30,
            rotate: '110deg',
        },
        1: {
            scale: 1,
            color: 'rgba(64, 164, 224, 0.4)',
            translateX: -22,
            translateY: 50,
            rotate: '110deg',
        }
    },
    snowdropMid: {
        0: {
            scale: 1,
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 0,
            translateY: 10,
        },
        0.25: {
            scale: 1,
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: -4,
            translateY: 20,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 0,
            translateY: 30,
        },
        0.75: {
            scale: 1,
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 4,
            translateY: 40,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 0,
            translateY: 50,
        }
    },
    snowdropLeft: {
        0: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: -25,
            translateY: 10,
        },
        0.25: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: -21,
            translateY: 20,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: -25,
            translateY: 30,
        },
        0.75: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: -29,
            translateY: 40,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: -25,
            translateY: 50,
        }
    },
    snowdropRight: {
        0: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 25,
            translateY: 10,
        },
        0.25: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 21,
            translateY: 20,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 25,
            translateY: 30,
        },
        0.75: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 29,
            translateY: 40,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.9)',
            translateX: 25,
            translateY: 50,
        }
    },
    snowdropMidSmall: {
        0: {
            scale: 1,
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 0,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 0,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 0,
            translateY: 50,
        }
    },
    snowdropLeftSmall: {
        0: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: -25,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: -25,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: -25,
            translateY: 50,
        }
    },
    snowdropRightSmall: {
        0: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 25,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 25,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 25,
            translateY: 50,
        }
    },
    snowdropMidLeft: {
        0: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: -12,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: -12,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: -12,
            translateY: 50,
        }
    },
    snowdropMidRight: {
        0: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 12,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 12,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            color: 'rgba(255, 255, 255, 0.5)',
            translateX: 12,
            translateY: 50,
        }
    },
    haze: {
        0: {
            scale: 1,
            translateX: 0,
            translateY: 10,
        },
        0.25: {
            scale: 1,
            translateX: -6,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            translateX: 0,
            translateY: 10,
        },
        0.75: {
            scale: 1,
            translateX: 6,
            translateY: 10,
        },
        1: {
            scale: 1,
            translateX: 0,
            translateY: 10,
        }
    },
    tornado: {
        from: {
            translateX: 0,
            translateY: 10,
            rotate: '180deg'
        },
        to: {
            translateX: 0,
            translateY: 10,
            rotate: '-180deg'
        },
    }
}