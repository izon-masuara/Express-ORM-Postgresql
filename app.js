const express = require('express')
const app = express()
const port = 8000
const { User } = require('./models')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Get all users
app.get('/', async (req, res) => {
    try {
        const data = await User.findAll()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error` })
    }
})

// Create User
app.post('/', async (req, res) => {
    const {
        name,
        age,
        address,
        phone_number
    } = req.body
    try {
        await User.create({name,age,address,phone_number})
        res.status(201).json({message:`Success Created`})
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error` })
    }
})

// Edit address and phone number
app.patch('/:id', async(req,res) => {
    const {id} = req.params
    const {address,phone_number} = req.body
    try {
        const found = await User.findByPk(id)
        if(!found){
            res.status(404).json({message:`Data Not Found`})
        }else{
            await User.update(
                {address,phone_number},
                {where : {id:found.id}}
            )
            res.status(204)
        }
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error` })
    }
})

// Edit all fields
app.put('/:id', async(req,res) => {
    const {id} = req.params
    const {
        name,
        age,
        address,
        phone_number
    } = req.body
    try {
        const found = await User.findByPk(id)
        if(!found){
            res.status(404).json({message:`Data Not Found`})
        }else{
            await User.update(
                {name,age,address,phone_number},
                {where : {id:found.id}}
            )
            res.status(204)
        }
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error` })
    }
})

// Delete User
app.delete('/:id',async(req,res) => {
    const {id} = req.params
    try {
        const found = await User.findByPk(id)
        if(!found){
            res.status(404).json({message:`Data not found`})
        }else{
            await User.destroy({where : {id:found.id}})
            res.status(204)
        }
    } catch (err) {
        res.status(500).json({ message: `Internal Server Error` })
    }
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})