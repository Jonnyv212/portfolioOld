// const { Client } = require("pg");

// const client = new Client({
//   connectionString:
//     "postgres://nzpvibtgpvssnb:d0aeac309f8fa241efbbe22a7d0a30f775f48d6a63a645e50edab1cff608c090@ec2-107-21-216-112.compute-1.amazonaws.com:5432/ddffacv30ur2f6",
//   ssl: true
// });

// let QueryExecute = () => {
//   client
//     .connect()
//     .then(() => client.query("SELECT * FROM public.skills"))
//     .then(results => results)
//     .catch(e => console.log(e))
//     .finally(() => client.end());
// };

// if (err) throw err;
// for (let row of res.rows) {
//   console.log(JSON.stringify(row));
// }
//     client.end();
//   });
// };
// oracledb.outFormat = oracledb.OBJECT;

// let QueryExecute = query => {
//   return new Promise((resolve, reject) => {
//     oracledb.getConnection(
//       {
//         user: con.user,
//         // password: con.password
//         connectionString: con.connectionString
//       },
//       (err, connection) => {
//         if (err) {
//           console.error(err.message);
//           reject(err);
//         }
//         connection.execute(
//           // The statement to execute
//           query,

//           // The callback function handles the SQL execution results
//           (err, result) => {
//             if (err) {
//               console.error(err.message);
//               doRelease(connection);
//               reject(err);
//             }
//             //console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
//             doRelease(connection);
//             return resolve(result.rows); // [ [ 180, 'Construction' ] ]
//           }
//         );
//       }
//     );
//   });
// };

// let doRelease = connection =>
//   connection.close(err => {
//     if (err) console.error(err.message);
//   });

module.exports = QueryExecute;
