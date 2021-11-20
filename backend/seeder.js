import dotenv from 'dotenv'
import users from './data/users.js'
import accounts from './data/accounts.js'
import User from './models/userModel.js'
import Account from './models/accountModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Account.deleteMany()

    await User.insertMany(users)
    await Account.insertMany(accounts)

    console.log('Data Imported')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data Destroyed')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
