const { Mobs, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

function stringify(data) {
  console.log(JSON.stringify(data, null, 2))
}

const findMobs = async () => {
  const result = await Mobs.findAll()
  stringify(result)
}

const createNewMob = async () => {
  const result = await Mobs.create({
    name: 'vex',
    color: 'gray blue',
    nature: 'hostile',
    height: 0.8
  })
  stringify(result)
}

const updateMob = async () => {
  const result = await Mobs.update(
    {
      color: 'gold'
    },
    {
      where: { name: 'axolotl' }
    }
  )
  stringify(result)
}

const deleteMob = async () => {
  const result = await Mobs.destroy({ where: { name: 'vex' } })
  stringify(result)
}

const run = async () => {
  try {
    // await deleteMob()
    await findMobs()
  } catch (error) {
  } finally {
    await sequelize.close()
  }
}

run()
