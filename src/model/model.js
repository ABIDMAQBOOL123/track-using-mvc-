class ActivityModel {
    constructor() {
      this.lastActiveTime = Date.now();
      this.idleTime = 0;
    }
  
    updateLastActiveTime() {
      this.lastActiveTime = Date.now();
    }
  
    updateIdleTime(diff) {
      this.idleTime += diff;
    }
  
    getIdleTimeInSeconds() {
      return this.idleTime / 1000;
    }
  }
  