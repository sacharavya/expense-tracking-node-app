import mongoose from 'mongoose'
const typeSchema = mongoose.Schema({
  name: { type: String, Required: true },
})
const accountSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: { type: String, required: true },
  number: { type: Number, required: true, default: 0 },
  type: { typeSchema },
  currentBalance: { type: Number, required: true, default: 0 },
  openingBalance: { type: Number, required: true, default: 0 },
  closingBalance: { type: Number, required: true, default: 0 },
  actualBalance: { type: Number, required: true, default: 0 },
  holdingBalance: { type: Number, required: true, default: 0 },
})

const Account = mongoose.model('Account', accountSchema)
export default Account
