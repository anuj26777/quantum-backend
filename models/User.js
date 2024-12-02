
const { model , Schema} = require('mongoose');
const mongoose  = require('mongoose');

const addressSchema = new Schema ( {
  street:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  state:{
    type:String,
    required:true
  },
  zipCode:{
    type:String,
    required:true
  },
  country:{
    type:String,
    required:true
  }
})

const userSchema  = new Schema ( {

  name : {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true
  },

  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },

  addresses: [addressSchema],

  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],

  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],

  isVerified:{
    type: Boolean,
   default: false
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },

  updatedAt: { 
    type: Date, 
    default: Date.now 
  },

},
{
  timestamps: true
}

);


const userModel = model("User" , userSchema);



module.exports = {
  userModel
}
