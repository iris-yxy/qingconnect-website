let transparentLogoPromise

export function getTransparentBrandLogo(source) {
  if (!transparentLogoPromise) {
    transparentLogoPromise = new Promise((resolve) => {
      const image = new Image()
      image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = image.naturalWidth
        canvas.height = image.naturalHeight

        const context = canvas.getContext('2d')
        if (!context) {
          resolve(source)
          return
        }

        context.drawImage(image, 0, 0)

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const { data } = imageData

        for (let index = 0; index < data.length; index += 4) {
          const red = data[index]
          const green = data[index + 1]
          const blue = data[index + 2]

          if (red > 244 && green > 244 && blue > 244) {
            data[index + 3] = 0
          }
        }

        context.putImageData(imageData, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      }

      image.onerror = () => resolve(source)
      image.src = source
    })
  }

  return transparentLogoPromise
}
