import { useEffect, useState } from 'react'
import brandImage from '../assets/image.png'
import { getTransparentBrandLogo } from '../utils/brandLogo'

function BrandLogo({ className }) {
  const [logoSrc, setLogoSrc] = useState(brandImage)

  useEffect(() => {
    let active = true

    getTransparentBrandLogo(brandImage).then((nextSource) => {
      if (active) {
        setLogoSrc(nextSource)
      }
    })

    return () => {
      active = false
    }
  }, [])

  return <img src={logoSrc} alt="QingConnect" className={className} />
}

export default BrandLogo
