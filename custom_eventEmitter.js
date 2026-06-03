class EventEmitter {
  constructor() {
    this.event = {};
  }
  on(event, cb) {
    this.event[event] = this.event[event] || [];
    this.event[event].push(cb);
  }
  emit(event, data) {
    this.event[event]?.forEach((cb) => {
      cb(data);
    });
  }
}

const chat = new EventEmitter();

chat.on("message", (data) => {
  console.log("update unread message", data.name);
});

chat.emit("message", { name: "ravi" });
