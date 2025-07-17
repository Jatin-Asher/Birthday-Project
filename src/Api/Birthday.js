export default function handler(req, res) {
  const { name = "Buddy" } = req.query;

  const html = `
    <html>
      <head>
        <title>Happy Birthday ${name}!</title>
        <style>
          body {
              margin: 0;
              font-family: Arial, sans-serif;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background: linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%);
              color: white;
          }
          .greet {
              width: 600px;
              padding: 20px;
              border: 2px solid #ffffff;
              background-color: #ad61eb;
              border-radius: 10px;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
              color: #fff;
              margin-top: 20px;
          }
          .text-center p {
              font-size: 24px;
          }
        </style>
      </head>
      <body>
        <h1>Happy Birthday ${name}!</h1>
        <div class="text-center">
            <p>Wishing you a day filled with love, joy, and laughter.</p>
            <p>May all your dreams come true!</p>
        </div>
        <div class="greet">
            <h2>Today isn't just another day</h2>
            <h2>— it's a celebration of a person</h2>
            <h2> who brings light, laughter, and meaning</h2>
            <h2>into the lives of everyone around them.</h2>
            <h2>To ${name},</h2>
            <h2>may your birthday be as wonderful as you are!</h2>
            <h2>Happy Birthday.</h2>

            <audio controls autoplay loop>
              <source src="/Music/Song.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
        </div>
      </body>
    </html>
  `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
