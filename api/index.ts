import dotenv from "dotenv"
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser"
import cors from 'cors'
import morgan from "morgan";
import router from "../src/routes/karyawan.js"
import userRoutes from "../src/routes/user.js"
import absensiRoutes from "../src/routes/absensi.js";


dotenv.config()


const app = express();

// Cors header
const corsOptions = {
  origin: "*", // Allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Enable cookies or other credentials
};


//Middleware wesbervices
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(bodyParser.json())
app.use(morgan('combined'))


app.use("/api/karyawan",router)
app.use("/api/users",userRoutes)
app.use("/api/absensi",absensiRoutes)

app.listen(3000, () => console.log('Server ready on port 3000.'));

// // Create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static('public'));

// app.get('/', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '..', 'components', 'home.htm'));
// });

// app.get('/about', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'));
// });

// app.get('/uploadUser', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '..', 'components', 'user_upload_form.htm'));
// });

// app.post('/uploadSuccessful', urlencodedParser, async (req: Request, res: Response) => {
//     try {
//         await sql`INSERT INTO Users (Id, Name, Email) VALUES (${req.body.user_id}, ${req.body.name}, ${req.body.email});`;
//         res.status(200).send('<h1>User added successfully</h1>');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error adding user');
//     }
// });

// app.get('/allUsers', async (req: Request, res: Response) => {
//     try {
//         const users = await sql`SELECT * FROM Users;`;
//         if (users && users.rows.length > 0) {
//             let tableContent = users.rows
//                 .map(
//                     (user: any) =>
//                         `<tr>
//                         <td>${user.id}</td>
//                         <td>${user.name}</td>
//                         <td>${user.email}</td>
//                     </tr>`
//                 )
//                 .join('');

//             res.status(200).send(`
//                 <html>
//                     <head>
//                         <title>Users</title>
//                         <style>
//                             body {
//                                 font-family: Arial, sans-serif;
//                             }
//                             table {
//                                 width: 100%;
//                                 border-collapse: collapse;
//                                 margin-bottom: 15px;
//                             }
//                             th, td {
//                                 border: 1px solid #ddd;
//                                 padding: 8px;
//                                 text-align: left;
//                             }
//                             th {
//                                 background-color: #f2f2f2;
//                             }
//                             a {
//                                 text-decoration: none;
//                                 color: #0a16f7;
//                                 margin: 15px;
//                             }
//                         </style>
//                     </head>
//                     <body>
//                         <h1>Users</h1>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>User ID</th>
//                                     <th>Name</th>
//                                     <th>Email</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 ${tableContent}
//                             </tbody>
//                         </table>
//                         <div>
//                             <a href="/">Home</a>
//                             <a href="/uploadUser">Add User</a>
//                         </div>
//                     </body>
//                 </html>
//             `);
//         } else {
//             res.status(404).send('Users not found');
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error retrieving users');
//     }
// });


export default app;
