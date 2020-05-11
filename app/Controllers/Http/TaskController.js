"use strict";

class TaskController {
  index({ view }) {
    return view.render("task", {
      title: "Your",
    });
  }
}

module.exports = TaskController;
