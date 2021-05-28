const express = require('express')

const app = express();

app.get('/',(req,res) => {
    const blog = {

        id:1,
        title:"Blog title",
        description:"Blog description"
    
    }
    res.send(`Blog Id : ${blog.id} <br />
     Blog title : ${blog.title}  <br />
     Blog description  : ${blog.description}`);
})



const port = 3000;

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});