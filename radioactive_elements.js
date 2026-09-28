// Radioactive & Toxic Elements
// Sandboxels Mod

// ================================
// RADIOACTIVE
// ================================

elements.radium = {
    color: "#39ff14",
    behavior: behaviors.LIQUID,
    category: "radioactive",
    state: "liquid",
    density: 5500
};

elements.thorium = {
    color: "#777777",
    behavior: behaviors.POWDER,
    category: "radioactive",
    state: "solid",
    density: 11700
};

elements.cesium_137 = {
    color: "#168cff",
    behavior: behaviors.POWDER,
    category: "radioactive",
    state: "solid",
    density: 1900
};

elements.plutonium = {
    color: "#4b5cff",
    behavior: behaviors.POWDER,
    category: "radioactive",
    state: "solid",
    density: 19800
};


// ================================
// TOXIC
// ================================

elements.hexavalent_chromium = {
    color: "#ff7a00",
    behavior: behaviors.POWDER,
    category: "toxic",
    state: "solid",
    density: 2700
};

elements.thallium = {
    color: "#777777",
    behavior: behaviors.POWDER,
    category: "toxic",
    state: "solid",
    density: 11800
};

elements.arsenic = {
    color: "#9b9b9b",
    behavior: behaviors.POWDER,
    category: "toxic",
    state: "solid",
    density: 5700
};

console.log("Radioactive & Toxic Elements loaded!");
