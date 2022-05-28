"use strict";

describe("greetingList", function () {
  // Load the module that contains the `greetingList` component before each test
  beforeEach(module("greetingList"));

  // Test the controller
  describe("GreetingListController", function () {
    it("should create a `greetings` model with 3 greetings", inject(function (
      $componentController
    ) {
      var ctrl = $componentController("greetingList");

      expect(ctrl.greetings.length).toBe(3);
    }));
  });
});
