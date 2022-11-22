import ColorThief from "colorthief"

class Color {
  getPredominant(img) {
    var colorThief = new ColorThief()
    var palette = colorThief.getColor(img)
    return palette
  }
}

export default new Color()
