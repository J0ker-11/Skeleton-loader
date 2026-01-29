import { useEffect, useState } from "react"
import Card from "./components/Card"
import SkeletonCard from "./components/SkeletonCard"


const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "Learning Skeleton Loading",
        description: "Skeleton loaders make your UI feel fast.",
        image: "https://picsum.photos/300/200"
      })

      setIsLoading(false)
    }, 3000);
  }, [])

  return (
    <div className="p-4">
      {isLoading ? (<SkeletonCard />) : (<Card  title={data.title} description={data.description} image={data.image} />) }
    </div>
  )
}

export default App
