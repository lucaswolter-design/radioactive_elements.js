# radioactive_elements.py
# Experimental Python version of the Sandboxels radioactive/toxic elements

class Element:
    def __init__(self, name, color, state, category):
        self.name = name
        self.color = color
        self.state = state
        self.category = category

    def __repr__(self):
        return f"{self.name} ({self.state})"


# ================================
# ☢️ RADIOACTIVE ELEMENTS
# ================================

radium = Element(
    "Radium",
    "#39ff14",
    "liquid",
    "radioactive"
)

thorium = Element(
    "Thorium",
    "#777777",
    "solid",
    "radioactive"
)

cesium_137 = Element(
    "Cesium-137",
    "#168cff",
    "powder",
    "radioactive"
)

plutonium = Element(
    "Plutonium",
    "#4b5cff",
    "solid",
    "radioactive"
)


# ================================
# ☣️ TOXIC ELEMENTS
# ================================

hexavalent_chromium = Element(
    "Hexavalent Chromium",
    "#ff7a00",
    "solid",
    "toxic"
)

thallium = Element(
    "Thallium",
    "#777777",
    "solid",
    "toxic"
)

arsenic = Element(
    "Arsenic",
    "#9b9b9b",
    "solid",
    "toxic"
)


# ================================
# ☢️ RADIATION
# ================================

radiation = Element(
    "Radiation",
    "#66ccff",
    "gas",
    "radioactive"
)


# ================================
# ELEMENT LIST
# ================================

elements = [
    radium,
    thorium,
    cesium_137,
    plutonium,
    hexavalent_chromium,
    thallium,
    arsenic,
    radiation
]


# ================================
# DISPLAY
# ================================

print("☢️ Radioactive & Toxic Elements")
print("--------------------------------")

for element in elements:
    print(
        f"{element.name} | "
        f"State: {element.state} | "
        f"Category: {element.category} | "
        f"Color: {element.color}"
    )
