import express from "express"

const app = express()
const port = 3000

const user = {
    name:"om prakash sahu",
    age:20,
    branch:"CSE"
}
app.get("/user",(req,res)=>{
    res.json(user)
})

app.listen(port,()=>{
   console.log( `app is listining on port ${port}`)
})