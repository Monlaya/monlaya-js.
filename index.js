const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/getname', (req,res) => {
    res.send('Monlaya Kunpratum')
})

app.get('/getprofile', (req,res) => {
    let data = {
        name: 'Monlaya Kunpratum',
        age: 19,
    }
    res.send(data)
})

app.get('/getabout', (req,res) => {
    let data = {
        name: 'Monlaya Kunpratum',
        age: 19,
        email: 'Monlaya.kunp@bumail.net',
        address: 'Lam Luk Ka, Pathumthani 12150'
    }
    res.send(data)
})

app.get('/getproject', (req,res) => {
    let data = {
       project_name:'Bright sea',
       project_descriotion: 'โครงการเพื่อช่วยกันเก็บขยะบนชายหาดและนำขยะประเภทพลาสติกมาแยกโพลิเมอร์เพื่อนำมาทำเป็นเครื่องประดับสวยงามเพื่อเอากำไรและเงินทุนมาเป็นต้นทุนกับโครงการเก็บขยะอีกรอบ รวมไปถึงการให้ความรู้เกี่ยวกับการลดขยะที่สามารถเริ่มได้ที่ตัวเรา',
       project_link: 'https://www.canva.com/design/DAFMRZm6z7c/epcKWagc2gDRjkqwPpKt-g/view?utm_content=DAFMRZm6z7c&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu'
    }
    res.send(data)
})

app.get('/getcontact', (req,res) => {
    let data = {
        address: 'Lam Luk Ka, Pathumthani 12150',
        email: 'Monlaya.kunp@bumail.net',
        phone_number: '0949630410'
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})