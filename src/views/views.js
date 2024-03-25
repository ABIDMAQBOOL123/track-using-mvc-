class ActivityView {
    displayIdleTime(idleTimeInSeconds) {
        const idleTimeSpan = document.getElementById("display");
     
    if (idleTimeSpan) {
        idleTimeSpan.textContent = `Idle for ${idleTimeInSeconds} seconds`;
        console.log("Idle for", idleTimeInSeconds, "seconds");
      }
    }
  }
  