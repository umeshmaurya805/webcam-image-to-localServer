const express =require('express')
const multer =require('multer')
const ejs =require('ejs')
const app=express()
app.use(express.static('./public'))
app.set('view engine','ejs')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
  })

  const upload=multer({storage:storage})
  
  app.post('/products',upload.single('productImage'),(req,res)=>{
    console.log(req.file)
    
  })
  app.get('/',(req,res)=>{
      res.render('index')
  })
  app.listen(3000)