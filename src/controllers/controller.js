class ActivityController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      document.addEventListener("mousemove", this.handleActivity.bind(this));
      document.addEventListener("mousedown", this.handleActivity.bind(this));
      document.addEventListener("keydown", this.handleActivity.bind(this));
      document.addEventListener("keypress", this.handleActivity.bind(this));
  
      setInterval(this.checkIdleTime.bind(this), 1000);
    }
  
    handleActivity() {
      this.model.updateLastActiveTime();
    }
  
    checkIdleTime() {
      const now = Date.now();
      const diff = now - this.model.lastActiveTime;
      if (diff > 60000) { // 5 minutes in milliseconds
        this.model.updateIdleTime(diff);
        this.view.displayIdleTime(this.model.getIdleTimeInSeconds());
      }
    }
  }
  