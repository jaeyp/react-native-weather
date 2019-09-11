// Animations.js
module.exports = {
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
            color: 'rgba(200, 200, 200, 0.7)',
            translateX: -70,
            translateY: 10,
        },
        0.5: {
            scale: 1.07,
            color: 'rgba(255, 255, 255, 1)',
            translateX: -70,
            translateY: 10,
        },
        1: {
            scale: 1,
            color: 'rgba(200, 200, 200, 0.7)',
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
        0.5: {
            scale: 1.06,
            color: 'rgba(255, 255, 255, 1)',
            translateX: 40,
            translateY: 40,
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
    flashBig: {
        0: {
            scale: 1,
            color: 'rgba(242, 233, 107, 0.4)',
            translateX: 0,
            translateY: 2,
        },
        0.5: {
            scale: 1.3,
            color: 'rgba(242, 233, 107, 0.8)',
            translateX: 0,
            translateY: 2,
        },
        1: {
            scale: 1,
            color: 'rgba(242, 233, 107, 0.4)',
            translateX: 0,
            translateY: 2,
        }
    },
    flashSmallL: {
        0: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',
            translateX: -50,
            translateY: 8,
        },
        0.3: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.8)',
            translateX: -50,
            translateY: 8,
        },
        1: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',
            translateX: -50,
            translateY: 8,
        }
    },
    flashSmallR: {
        0: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',
            translateX: 50,
            translateY: 8,
        },
        0.7: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.8)',
            translateX: 50,
            translateY: 8,
        },
        1: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',
            translateX: 50,
            translateY: 8,
        }
    },
    raindrop: {
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
    raindrop2: {
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
    raindrop3: {
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
    raindrop4: {
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
    raindrop5: {
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
    raindrop6: {
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
    snowdrop: {
        0: {
            scale: 1,
            color: 'white',
            translateX: 0,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            translateX: 0,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            translateX: 0,
            translateY: 50,
        }
    },
    snowdrop2: {
        0: {
            scale: 1,
            color: 'white',
            translateX: -25,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            translateX: -25,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            translateX: -25,
            translateY: 50,
        }
    },
    snowdrop3: {
        0: {
            scale: 1,
            color: 'white',
            translateX: 25,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',
            translateX: 25,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',
            translateX: 25,
            translateY: 50,
        }
    }
}