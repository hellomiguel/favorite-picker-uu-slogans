"use strict";

var items = [
  // Define your items here
  {
    id: 1,
    name: "Good Theology is INCLUUSIVE",
  },
  {
    id: 2,
    name: "Diversity is Beauutiful",
  },
  {
    id: 3,
    name: "Kindness is Contagious",
  },
  {
    id: 4,
    name: "Be the Change",
  },
  {
    id: 5,
    name: "Radiate Positivity",
  },
  {
    id: 6,
    name: "Embrace Your Weirdness",
  },
  {
    id: 7,
    name: "Love Knows No Labels",
  },
  {
    id: 8,
    name: "In UUnity, Strength",
  },
  {
    id: 9,
    name: "Respect Everyone's Journey",
  },
  {
    id: 10,
    name: "Believe in Love & Justice",
  },
  {
    id: 11,
    name: "Live Boldly, Love Fiercely",
  },
  {
    id: 12,
    name: "Come As You Are",
  },
  {
    id: 13,
    name: "Love Lives Here",
  },
  {
    id: 14,
    name: "Side with Love",
  },
  {
    id: 15,
    name: "Weeds Are A Social Construct",
  },
  {
    id: 16,
    name: "The UUniverse is Good",
  },
  { id: 17, name: "Celebrating Diversity, Embracing UUnity" },
  { id: 18, name: "Faith in Action: Love Without Borders" },
  { id: 19, name: "Incluusivity is our Faith; Compassion our Practice" },
  { id: 20, name: "Building Bridges, Breaking Barriers" },
  { id: 21, name: "Honoring Every Journey, Embracing Every Soul" },
  {
    id: 22,
    name: "Justice, Compassion, and Diversity: Our UU Values",
  },
  { id: 23, name: "Welcoming All Paths, Walking Together" },
  { id: 24, name: "Together in Faith, UUnited in Love" },
  { id: 25, name: "Diverse Voices, Shared VALUUES" },
  { id: 26, name: "Unitarian Universalism: Where EVERYONE Belongs" },
  { id: 27, name: "Embrace Diversity, UUnite in Love" },
  { id: 28, name: "Faith in Action, Love as our Guide" },
  { id: 29, name: "UUnity in Diversity, Harmony in Belief" },
  { id: 30, name: "Love Beyond Belief, UUnity Beyond Words" },
  { id: 31, name: "Incluusive Faith, UUniversal Love" },
  { id: 32, name: "Together in Spirit, UUnited in Purpose" },
  { id: 33, name: "All Souls Welcome, Every Journey Honored" },
  { id: 34, name: "Compassion is Our Creed, Incluusion Our Deed" },
  { id: 35, name: "Building Bridges, Not Walls in Faith" },
  { id: 36, name: "One World, Many Beliefs, UUnited Hearts" },
];

var myPicker = new picker.Picker({
  items: items,
  localStorageKey: "picker-state",
});

var pickerUI = new PickerUI(myPicker, {
  elements: {
    pick: "#pick",
    pass: "#pass",
    undo: "#undo",
    redo: "#redo",
    evaluating: "#evaluating",
    favorites: "#favorites",
  },
});

pickerUI.initialize();

/* Sortable favorites - you can safely remove this, and the Sortable.min.js script, if you don't want to be able to sort your favorite list. */
var sortable = new Sortable(pickerUI.elem.favorites.get(0), {
  draggable: ".item",
  animation: 100,
  onStart: function () {
    pickerUI.elem.favorites.addClass("sorting");
  },
  onEnd: function () {
    pickerUI.elem.favorites.removeClass("sorting");
  },
  onUpdate: function () {
    myPicker.setFavorites(
      pickerUI.elem.favorites
        .children()
        .map(function () {
          return pickerUI.getItem(this);
        })
        .get()
    );
    pickerUI.update(true);
  },
});
/* End sortable favorites */

// Show/Hide Instructions
const toggleInstructions = () => {
  const instructionsText = document.getElementById("instructions");
  const helpToggle = document.getElementById("helpToggle");
  if (instructionsText.style.display === "block") {
    instructionsText.style.display = "none";
    helpToggle.innerHTML = "Show";
  } else {
    instructionsText.style.display = "block";
    helpToggle.innerHTML = "Hide";
  }
};
