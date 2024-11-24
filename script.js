const facts = [
    "The ocean covers more than 70% of the Earth's surface and contains about 97% of the planet's water.",
    "The Mariana Trench is the deepest part of the ocean, reaching a depth of about 36,000 feet (nearly 11,000 meters).",
    "Ocean currents act like a global conveyor belt, transporting warm water from the equator towards the poles and cold water from the poles back to the tropics.",
    "The ocean is home to an estimated 2.2 million species, but more than 80% of the ocean is still unexplored and unmapped.",
    "Located off the coast of Australia, the Great Barrier Reef is the largest coral reef system in the world and can be seen from space.",
    "The ocean floor is home to more than a million underwater volcanoes, many of which are still active.",
    "Ocean tides are caused by the gravitational pull of the moon and the sun, creating high and low tides.",
    "Phytoplankton, tiny ocean plants, produce at least 50% of the Earth's oxygen through photosynthesis.",
    "Sound travels faster in water than in air, which is why marine animals like whales use sound to communicate over long distances.",
    "Some of the oldest known life forms, such as certain species of jellyfish, have been around for more than 500 million years."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
