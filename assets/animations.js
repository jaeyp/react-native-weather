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
        //from: { rotateX: '180deg', rotate: '180deg' },
        //to: { rotateX: '-180deg', rotate: '-180deg' },
        from: { rotate: '-180deg' },
        to: { rotate: '180deg' },
    }
  }