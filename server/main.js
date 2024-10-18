const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const path = require('path')
const multer= require('multer')


const jwt = require('jsonwebtoken')
const pModel = require('./modules/PModel')
const userModel = require('./modules/userModel')

// const router = require('./Route/Auth')




const app = express()
app.use(cors())
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const port = 3000

app.listen( `${port}` , ()=>{
    console.log(`Server running on port ${port}`)

} )

const Dburl = 'mongodb://localhost:27017/electric'

mongoose.connect(Dburl)

mongoose.connection.on('connected' , ()=>{
    console.log('connected to database')
})
mongoose.connection.on('error' , (err)=>{
    console.log(`error connecting to database ${err}`)
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage })



app.get('/hello' , (req , res)=>{
        res.send('hello world')
    })


app.post('/api/signup' , async(req , res)=>{
    try {
        /* Take all information from the form */
        const { userName, email, password } = req.body;
  
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ message: "User already exists!" });
        }
    
        /* Hass the password */
        const salt = await bcrypt.genSalt();

        const hashedPassword = await bcrypt.hash(password, salt);
    
        /* Create a new User */
        const newUser = new userModel({
          userName,
          email,
          password: hashedPassword,
          
        });
    
        /* Save the new User */
        await newUser.save();
    
        /* Send a successful message */
        res
          .status(200)
          .json({ message: "User registered successfully!", user: newUser  , status : 'ok'});
          console.log("User registered successfully!")
      } catch (err) {
        console.log(err);
        res
          .status(500)
          .json({ message: "Registration failed!", error: err.message , status : 'false' });
      };
})


app.post("/api/login", async (req, res) => {
    try {
      /* Take the infomation from the form */
      const { email, password } = req.body
  
      /* Check if user exists */
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(409).json({ message: "User doesn't exist!"  });
      }
  
      /* Compare the password with the hashed password */
      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Password!"})
      }
  
      /* Generate JWT token */
      // const token = jwt.sign({ id: user._id }, 'shah123')
      const token =  user._id 
  
      res.status(200).json({ token, token, status : 'ok' })
  
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: err.message , status : 'false' })
    }
  })


  app.post('/api/addproduct',  upload.single("image") , async (req, res) => {
    try {
      let products = await pModel.find({});
      let Id;
      const imagePath = `/uploads/${req.file.filename}`
      const realpath = `http://localhost:3000${imagePath}`
      
      if (products.length > 0) {
        // Get the last product
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        
        // Increment the last product's ID
        Id = last_product.id + 1;
      } else {
        // If no products exist, start with ID 1
        Id = 1 ;
        // res.json('id start from 1')
      }
  
      const product = new pModel({
        id: Id,
        name: req.body.name,
        image: realpath,
        category: req.body.category,
        new_price: req.body.new_price,
        des: req.body.des
      });
  
      console.log(product);
      await product.save();
  
      console.log("saved");
      res.json({
        success: true,
        name: req.body.name
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
      console.log(error)
    }
  });






  app.post('/api/remove' , async(req, res)=>{
    const { productId } = req.body;
      const product = await pModel.findOneAndDelete(productId)
      console.log(product)
      if(!product){
      return   res.json({
          status : false,
          meassage : "product Not Found"
        })
      }
      console.log("Removed")
      res.json({
        success : true,
        name : req.body.name,
      })
  })



  app.post('/api/allproducts' , async(req , res)=>{
    let products = await pModel.find({
      
    })
    console.log("all products are fetched")
    res.json(products)
  })

  app.get('/api/products/:id', async (req, res) => {
    const productId = req.params.id; // Extract the ID from the request parameters

    try {
        // Find the product by its ID in the database
        const product = await pModel.findById(productId);

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error("Error fetching product by ID: ", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/api/relatedProducts/:id', async (req, res) => {
  try {
      const { id } = req.params; // Get the product ID from the URL
      

      const product = await pModel.findById(id)
      const productId = product._id;

      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }

      let relatedProducts = [];
      if (product.category) {
          relatedProducts = await pModel.find({
              category: product.category,
              _id: { $ne: productId } // Exclude the current product
          });
      }

      res.status(200).json({ product, relatedProducts });
  } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ message: "Error fetching product", error: error.message });
  }
});


  app.post('/api/users' , async(req , res)=>{
    let users = await userModel.find({
      
    })
    console.log("all users data are fetched")
    res.json(users)
  })



  app.post('/api/removeUser' , async(req, res)=>{
    const { userEmail } = req.body;
      const user = await userModel.findOneAndDelete(userEmail)
      console.log(user)
      if(!user){
      return   res.json({
          status : false,
          meassage : "product Not Found"
        })
      }
      console.log("Removed")
      res.json({
        success : true,
        name : req.body.name,
      })
  })