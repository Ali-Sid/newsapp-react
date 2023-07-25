import { useEffect, useState } from "react"
import axios from "axios"

export default function BackgroundImage() {
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    "https://api.unsplash.com/photos/random",
                    {
                        headers: {
                          Authorization: "Client-ID -F5-L6wF_aUoBWgIfNdg_xAa2cnz9Zqj03hOR65HppU",
                        },
                        params: {
                          orientation: "landscape", // To get landscape images
                        },
                      }
                )
                setImageUrl(response.data.urls.regular)
            } catch(error) {
                console.log('Failed to fetch image', error)
            }
        }
        fetchImage()
    }, [])
  return (
    <div style={{
        position: "fixed", // Use "fixed" position to make it cover the entire viewport
        top: 0,
        left: 0,
        zIndex: -1, // Set a lower z-index to place it behind other content
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }}>
    </div>
  )
}
