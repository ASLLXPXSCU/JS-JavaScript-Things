<html>
  <head>
    <title>Timer</title>
  </head>
  <body>
    <h1>Timer</h1>
    <p id="timer"></p>
    <button id="start-button">Start</button>
    <button id="stop-button" disabled>Stop</button>
    <script>
      const timer = document.getElementById("timer");
      const startButton = document.getElementById("start-button");
      const stopButton = document.getElementById("stop-button");

      let interval;
      let elapsedTime = 0;

      function updateTimer() {
        timer.textContent = elapsedTime;
        elapsedTime += 1;
      }

      startButton.addEventListener("click", event => {
        interval = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
      });

      stopButton.addEventListener("click", event => {
        clearInterval(interval);
        startButton.disabled = false;
        stopButton.disabled = true;
      });
    </script>
  </body>
</html>

