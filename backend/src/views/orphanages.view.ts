import Orphanage from "../database/models/Orphanage"
import imagesView from "./images.view"

export default {
  render(orphanage: Orphanage) {
    return {
      ...orphanage,
      images: imagesView.renderMany(orphanage.images)
    }
  },
  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(o => ({
      ...o,
      images: imagesView.renderMany(o.images)
    }))
  }
}
