"use strict";

// Register `greetingList` component, along with its associated controller and template
angular.module("greetingList").component("greetingList", {
  templateUrl: "greeting-list/greeting-list.template.html",
  controller: function GreetingListController() {
    this.greetings = [
      {
        name: "Jane",
        message: "Nice to meet you.",
      },
      {
        name: "Lisa",
        message: "Great to see you again.",
      },
      {
        name: "Michael",
        message: "Long time no see.",
      },
    ];
  },
});
