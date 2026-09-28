/*
    Radioactive & Toxic Elements
    Sandboxels Mod
*/

// ================================
// ☢️ RADIUM
// ================================

elements.radium = {
    name: "Radium",
    color: "#39ff14",
    behavior: behaviors.LIQUID,
    category: "radioactive",
    state: "liquid",
    density: 5500,

    tick: function(pixel) {
        if (Math.random() < 0.08) {
            createPixel("radiation", pixel.x, pixel.y - 1);
        }
    }
};


// ================================
// ☢️ THORIUM
// ================================

elements.thorium = {
    name: "Thorium",
    color: "#777777",
    behavior: behaviors.POWDER,
    category: "radioactive",
    state: "solid",
    density: 11700,

    tick: function(pixel) {
        if (Math.random() < 0.06) {
            createPixel("radiation", pixel.x, pixel.y - 1);
        }
    }
};


// ================================
// ☢️ CESIUM-137
// ================================

elements.cesium_137 = {
    name: "Cesium-137",
    color: "#168cff",
    behavior: behaviors.POWDER,
    category: "radioactive",
    state: "solid",
    density: 1900,

    tick: function(pixel) {

        // Release radiation
        if (Math.random() < 0.07) {
            createPixel("radiation", pixel.x, pixel.y - 1);
        }

        // Irradiate nearby materials
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {

                let x = pixel.x + dx;
                let y = pixel.y + dy;

                if (
                    x >= 0 &&
                    x < width &&
                    y >= 0 &&
                    y < height &&
                    pixelMap[x][y]
                ) {
                    let other = pixelMap[x][y];

                    if (other !== pixel) {
                        other.radioactive = true;
                    }
                }
            }
        }
    }
};


// ================================
// ☢️ PLUTONIUM
// ================================

elements.plutonium = {
    name: "Plutonium",
    color: "#4b5cff",
    behavior: behaviors.POWDER,
    category: "radioactive",
    state: "solid",
    density: 19800,

    tick: function(pixel) {

        // Continuous radiation
        if (Math.random() < 0.08) {
            createPixel("radiation", pixel.x, pixel.y - 1);
        }

        // Blue radiation flash
        if (Math.random() < 0.015) {

            for (let dx = -5; dx <= 5; dx++) {
                for (let dy = -5; dy <= 5; dy++) {

                    let x = pixel.x + dx;
                    let y = pixel.y + dy;

                    if (
                        x >= 0 &&
                        x < width &&
                        y >= 0 &&
                        y < height &&
                        pixelMap[x][y]
                    ) {
                        pixelMap[x][y].radioactive = true;
                    }
                }
            }
        }
    }
};


// ================================
// ☣️ HEXAVALENT CHROMIUM
// ================================

elements.hexavalent_chromium = {
    name: "Hexavalent Chromium",
    color: "#ff7a00",
    behavior: behaviors.POWDER,
    category: "toxic",
    state: "solid",
    density: 2700,

    reactions: {
        "human": {
            elem2: "cancer",
            chance: 0.15
        }
    }
};


// ================================
// ☣️ THALLIUM
// ================================

elements.thallium = {
    name: "Thallium",
    color: "#777777",
    behavior: behaviors.POWDER,
    category: "toxic",
    state: "solid",
    density: 11800
};


// ================================
// ☣️ ARSENIC
// ================================

elements.arsenic = {
    name: "Arsenic",
    color: "#9b9b9b",
    behavior: behaviors.POWDER,
    category: "toxic",
    state: "solid",
    density: 5700
};


// ================================
// ☢️ RADIATION
// ================================

elements.radiation = {
    name: "Radiation",
    color: [
        "#66ccff",
        "#00aaff",
        "#ffffff"
    ],

    behavior: behaviors.GAS,
    category: "radioactive",
    state: "gas",
    density: 0.1,

    tick: function(pixel) {

        // Radiation disappears
        if (Math.random() < 0.08) {
            deletePixel(pixel.x, pixel.y);
            return;
        }

        // Spread radiation
        if (Math.random() < 0.03) {

            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {

                    let x = pixel.x + dx;
                    let y = pixel.y + dy;

                    if (
                        x >= 0 &&
                        x < width &&
                        y >= 0 &&
                        y < height &&
                        pixelMap[x][y]
                    ) {
                        pixelMap[x][y].radioactive = true;
                    }
                }
            }
        }
    }
};
