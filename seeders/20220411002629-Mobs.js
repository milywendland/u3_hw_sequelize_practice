'use strict'

const mobs = [
  {
    name: 'creeper',
    color: 'green',
    nature: 'hostile',
    height: 1.8
  },

  {
    name: 'slime',
    color: 'green',
    nature: 'hostile',
    height: 2.0
  },

  {
    name: 'zombie',
    color: 'green',
    nature: 'hostile',
    height: 1.95
  },

  {
    name: 'zombie',
    color: 'green and blue',
    nature: 'hostile',
    height: 1.8
  },

  {
    name: 'bee',
    color: 'yellow and brown',
    nature: 'neutral',
    height: 1.8
  },

  {
    name: 'drowned',
    color: 'teal and brown',
    nature: 'hostile',
    height: 0.6
  },

  {
    name: 'ghast',
    color: 'whiten',
    nature: 'hostile',
    height: 4
  },

  {
    name: 'pillager',
    color: 'teal and brown',
    nature: 'hostile',
    height: 1.95
  },

  {
    name: 'drowned',
    color: 'gray and maroon',
    nature: 'hostile',
    height: 1.95
  },

  {
    name: 'enderman',
    color: 'black',
    nature: 'neutral',
    height: 2.9
  },

  {
    name: 'skeleton',
    color: 'gray and white',
    nature: 'hostile',
    height: 1.99
  },

  {
    name: 'dolphin',
    color: 'gray',
    nature: 'neutral',
    height: 0.6
  },

  {
    name: 'panda',
    color: 'black and white',
    nature: 'passive',
    height: 1.25
  },

  {
    name: 'axolotl',
    color: 'pink',
    nature: 'passive',
    height: 0.42
  },

  {
    name: 'pig',
    color: 'pink',
    nature: 'passive',
    height: 0.9
  },

  {
    name: 'glow squid',
    color: 'teal',
    nature: 'passive',
    height: 0.95
  },

  {
    name: 'fox',
    color: 'orange and white',
    nature: 'passive',
    height: 0.7
  },

  {
    name: 'mooshroom',
    color: 'red and white',
    nature: 'passive',
    height: 0.7
  },

  {
    name: 'phantom',
    color: 'blue and gray',
    nature: 'hostile',
    height: 0.5
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('mobs', mobs, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('mobs', null, {})
  }
}
