import Image from "../database/models/Image"
import { bytesToSize } from '../utils/size'

export default {
  render(image: Image) {
    return {
      url: `http://localhost:3333/uploads/${image.path}`,
      size: {
        string: bytesToSize(image.size),
        number: image.size
      }
    }
  },
  renderMany(image: Image[]) {
    return image.map(i => ({
      url: `http://localhost:3333/uploads/${i.path}`,
      size: {
        string: bytesToSize(i.size),
        number: i.size
      }
    }))
  }
}
