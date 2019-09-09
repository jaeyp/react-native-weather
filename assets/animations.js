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
    rotate: {
        //from: { translateX: '100', translateY: '100', rotateX: '180deg', rotate: '180deg' },
        //to: { translateX: '100', translateY: '100', rotateX: '-180deg', rotate: '180deg' },
        from: { rotate: '-180deg' },
        to: { rotate: '180deg' },
    },
    flow: {
        0: {
            scale: 1,
            color: 'rgba(236, 245, 246, 0.6)',   // #F2E96B
            translateX: -30,
            translateY: 0,
        },
        0.5: {
            scale: 1.3,
            color: 'rgba(236, 245, 246, 0.6)',   // #F2E96B
            translateX: 20,
            translateY: 0,
        },
        1: {
            scale: 1,
            color: 'rgba(236, 245, 246, 0.6)',   // #F2E96B
            translateX: -30,
            translateY: 0,
        }
    },
    flashBig: {
        0: {
            scale: 1,
            color: 'rgba(242, 233, 107, 0.4)',   // #F2E96B
            translateX: 0,
            translateY: 2,
        },
        0.5: {
            scale: 1.3,
            color: 'rgba(242, 233, 107, 0.8)',   // #F2E96B
            translateX: 0,
            translateY: 2,
        },
        1: {
            scale: 1,
            color: 'rgba(242, 233, 107, 0.4)',   // #F2E96B
            translateX: 0,
            translateY: 2,
        }
    },
    flashSmallL: {
        0: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',   // #F2E96B
            translateX: -50,
            translateY: 8,
        },
        0.3: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.8)',   // #F2E96B
            translateX: -50,
            translateY: 8,
        },
        1: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',   // #F2E96B
            translateX: -50,
            translateY: 8,
        }
    },
    flashSmallR: {
        0: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',   // #F2E96B
            translateX: 50,
            translateY: 8,
        },
        0.7: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.8)',   // #F2E96B
            translateX: 50,
            translateY: 8,
        },
        1: {
            scale: 0.6,
            color: 'rgba(242, 233, 107, 0.4)',   // #F2E96B
            translateX: 50,
            translateY: 8,
        }
    },
    raindrop: {
        0: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: -10,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: -10,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: -10,
            translateY: 50,
        }
    },
    raindrop2: {
        0: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: 10,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: 10,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: 10,
            translateY: 50,
        }
    },
    raindrop3: {
        0: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: -30,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: -30,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: -30,
            translateY: 50,
        }
    },
    raindrop4: {
        0: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: 30,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: 30,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'rgba(54, 138, 191, 1)',   // ##368ABF
            translateX: 30,
            translateY: 50,
        }
    },
    snowdrop: {
        0: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: -10,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: -10,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: -10,
            translateY: 50,
        }
    },
    snowdrop2: {
        0: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: 10,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: 10,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: 10,
            translateY: 50,
        }
    },
    snowdrop3: {
        0: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: -30,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: -30,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: -30,
            translateY: 50,
        }
    },
    snowdrop4: {
        0: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: 30,
            translateY: 10,
        },
        0.5: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: 30,
            translateY: 30,
        },
        1: {
            scale: 1,
            color: 'white',   // ##368ABF
            translateX: 30,
            translateY: 50,
        }
    }
  }