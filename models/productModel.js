const { model , Schema} = required("mongoose");

const varientSchema = new Schema({
    size: {
        type:String,
        enum:["S" , "M" , "L" , "XL" , "XXL"],
        required:true,
    },

    color: {
        type:String,
        required:true
    },

    stock: {
        type:Number,
        default:0
    },

});

const productSchema = new Schema ({
    title: {
        type:String,
        required:true
    },

    description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
  
      variants: [varientSchema],

      price: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        default: 0, 
      },
      finalPrice: {
        type: Number,
        required: true, 
      },
  
      images: [
        {
          type: String, 
          required: true,
        },
      ],
  
      tags: [
        {
          type: String, 
        },
      ],
  
      createdAt: {
        type: Date,
        default: Date.now,
      },
  
      updatedAt: {
        type: Date,
        default: Date.now,
      },

},
{
    timestamps: true,
}

);


const productModel = model("Product" ,productSchema);

module.exports = {
    productModel
}