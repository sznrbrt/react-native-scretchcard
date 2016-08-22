var content = (script, prizeImg) =>
  ` <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8" />
      <title>
        Document
      </title>
      <style>
        body {
          padding: 20px 0;
        }

        .container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
          user-select: none;
        }

        .canvas {
          position: absolute;
          top: 0;
        }

        .hiddenImg {
          padding: 20px;
        }

        #tv {
          width: 250px;
        }
        .centeredPrompt {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          padding: 10px;
        }
      </style>
      </head>
      <body>
        <div class="container" id="js-container">
          <canvas class="canvas" id="js-canvas" width="300" height="300"></canvas>
          <div class="hiddenImg" style="visibility:hidden">
            <div class="centerPrompt">
              <img id="tv" src="${prizeImg}" alt="">
            </div>
          </div>
        </div>
      </body>

      ${script}
    </html>`;

export default content;
