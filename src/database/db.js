//importar a dependencia do sqlite3

const sqlite3 = require ("sqlite3").verbose()

// criar o objeto que irá fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//exportar para os erver
module.exports = db

// utilizar o objeto de banco de dados, para nossas operações
//db.serialize( () => {
    //com comando SQL:

//1 criar uma tabela
//  db.run(`
//      CREATE TABLE IF NOT EXISTS places (
//          id INTEGER PRIMARY KEY AUTOINCREMENT,
//          image TEXT,
//          name TEXT,
//          address TEXT,
//          address2 TEXT,
//          state TEXT,
//          city TEXT,
//          itens TEXT
//      );
//  `)

//2 inserir dados na tabela
//  const query = `
//  INSERT INTO places (
//      image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//      itens
//   ) VALUES (?,?,?,?,?,?,?);    
//`


//    const values = [
//       "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//       "Papersider",
//       "Guilherme Gemballa, Jardim América",
//       "N° 260",
//       "Santa Catarina",
//       "Rio do Sul",
//        "Papéis e Papelão"
//   ]
  
    //call back
//   function afterInsertData(err){
//       if (err){
//           return console.log(err)
//      }
//      console.log("Cadastrado com sucesso")
//       console.log(this)
//   }
  
//   db.run(query, values, afterInsertData)

   

//3 consultar os dados - possivel trocar o * pelo dado especifico
//    db.all(`SELECT * FROM places`, function(err, rows){
//       if (err){
//           return console.log(err)
//       }
//       console.log("Aqui estão seus registros:")
//       console.log(rows)
//   })

//4 deletar os dados (nao esta bem estruturado)

//  db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
//  if (err){
//     return console.log(err)
//   }

//   console.log("Registro deletado com sucesso!")

//})

//})