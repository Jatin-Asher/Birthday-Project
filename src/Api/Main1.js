// import express from 'express';
// import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const app = express();
// const PORT = 3999;
// console.log('Current working directory:', process.cwd());
// console.log('Serving static files from:', path.join(__dirname, '../../public'));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, '../../public')));
// app.get('/birthday/:name', (req, res) => {
//     const name = req.params.name || 'Buddy';
//    const html = `
//         <html>
//             <head>
//                 <title>Happy Birthday ${name}!</title>
//                 <style>
//                     body {
//                         margin: 0;
//                         font-family: Arial, sans-serif;
//                         display: flex;
//                         flex-direction: column;
//                         align-items: center;
//                         justify-content: center;
//                         min-height: 100vh;
//                         background: linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%);
//                         color: white;
//                     }
//                     h1 {
//                         font-size: 3rem;
//                         margin-bottom: 1rem;
//                     }
//                     .text-center p{
//                         font-size: 24px;
//                     }
//                     .greet {
//                              width: 600px;
//                              padding: 20px;
//                              border: 2px solid #ffffff;
//                              background-color: #ad61eb;
//                              border-radius: 10px;
//                              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* depth */
//                              position: relative;
//                              z-index: 10; /* stays on top of others if needed */
//                              transition: transform 0.3s, box-shadow 0.3s;
//                             color: #6893oa;
//                          }
//                     .greet:hover {
//                              transform: rotateX(3deg) translateY(-10px);
// }
//                 </style>    
//             </head>
//             <body>
//             <h1 class="text-3xl font-bold" color="purple">Happy Birthday ${name}!</h1>
//             <div class="text-center">
//                 <p>Wishing you a day filled with love, joy, and laughter.</p>
//                 <p>May all your dreams come true!</p>
//             </div>
//             <div class="greet">
//                     <h2>Today isn't just another day </h2>
//                     <h2>— it's a celebration of a person</h2>
//                     <h2> who brings light, laughter, and meaning </h2>
//                     <h2>into the lives of everyone around them.</h2>
//                     <h2>To ${name},</h2>
//                     <h2>may your birthday be as wonderful as you are!</h2>
//                     <h2>Happy Birthday.</h2> 
                    
//                      <audio controls autoplay loop>
//                     <source src="/Music/Song.mp3" type="audio/mpeg">
//                 </audio>
//                 </div>
               

//             </body>
//         </html>
//     `;
//     res.setHeader('Content-Type', 'text/html');
//     res.send(html);
// });
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}/birthday/Buddys`);
// });