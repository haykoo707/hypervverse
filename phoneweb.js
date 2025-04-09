if (Telegram.WebApp.platform !== 'android' && Telegram.WebApp.platform !== 'ios') {
    document.body.innerHTML = `
      <style>
        body {
          margin: ;
          padding: 10px;
          font-family: Arial, sans-serif;
          background:rgb(0, 0, 0);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }
  
        .message {
          max-width: 400px;
        }
  
        img {
          margin-top: 25px;
          width: 200px;
          height: 200px;
        }
          po{
              font-weight: bold;}

       
      </style>
  
      <div class="message">
        <h2>Please open the game on your phone.</h2>
        <p class = po >Open this QR code with your phone to start the game.</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/hyperrverse_bot" alt="QR Code">
      </div>
    `;
  }
  window.addEventListener("load", () => {
    if (typeof Telegram === 'undefined' || typeof Telegram.WebApp === 'undefined') {
      document.body.innerHTML = `
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            background-color: black;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          img {
            margin-top: 20px;
            width: 200px;
            height: 200px;
          }
            p{
                          font-weight: bold;}

            }
        </style>
        <h2>The game can only be opened from within Telegram.</h2>
        <p>Use the Telegram bot to play</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t.me/hyperrverse_bot" alt="QR Code">
      `;
    } else {
      // Telegram WebApp միջավայրն է՝ այստեղից թող գործի քո խաղը
      console.log("Բացվել է Telegram-ի միջով ✅");
    }
  });
