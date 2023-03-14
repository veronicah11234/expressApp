const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.json())
app.get('/user', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send('register me!')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// CREATE
app.post('/employees', (req, res) => {
  const { name,salary } = req.body; 
  db.query(`INSERT INTO employees (name,salary) VALUES ('${name}', ${salary})`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating employee');
    } else {
      console.log(result);
      res.status(201).send('Employee created successfully');
    }
  });
});

// READ
app.get('/employees/:id', (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM employees WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving employee');
    } else {
      console.log(result);
      res.status(200).json(result);
    }
  });
});

// UPDATE
app.put('/employees/:id', (req, res) => {
  const id = req.params.id;
  const { name,salary } = req.body;
  db.query(`UPDATE employees SET name = '${name}',salary = ${salary} WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error updating employee');
    } else {
      console.log(result);
      res.status(200).send('Employee updated successfully');
    }
  });
});

// DELETE
app.delete('/employees/:id', (req, res) => {
  const id = req.params.id;
  db.query(`DELETE FROM employees WHERE id = ${id}`, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error deleting employee');
    } else {
      console.log(result);
      res.status(200).send('Employee deleted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})










