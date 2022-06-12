import {useRouter} from "next/router"
import {useEffect, useState} from 'react'
import Navbar from "../components/Navbar"
import Image from "next/image"


function Projeto() {

  const router = useRouter()
  const detailId = router.query.id
  const [detail, setDetail] = useState([])
  const [images, setImages] = useState([])
  const [ready, setReady] = useState(false)



  function thisIsReady(){
    setTimeout(()=>{
      setReady(true)
    },1500)
  }

  useEffect(() => {
    getProject()
    getImages()
    thisIsReady()
  },[])


  let getProject = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/projects/name/${detailId}`)
      let data = await response.json()
      await setDetail(data)
  }
  let getImages = async() =>{
    let response = await fetch(`http://127.0.0.1:8000/api/images/${detailId}`)
    let data = await response.json()
    await setImages(data)
  }

  return (
    <div className="bg-bodyColor">
      <Navbar/>
      {ready===(true)?
        <div className="w-full flex flex-col min-h-screen justify-around p-28">
          <h2 className="text-center w-full text-5xl">
            {detail.name}
          </h2>
          <div className="w-full text-center">
            <p className="text-2xl">Detalhes:</p>
            <p className="w-full text-center text-base">{detail.description}</p>
          </div>
          <div className="sm:h-[40vh] flex flex-row ml-3 mr-3 overflow-x-scroll snap-x snap-mandatory">
            <Image
              src={detail.image} alt={detail.name} className="group-hover:scale-125 ease-in duration-200 h-auto w-1/3 rounded-lg" width={600}
              height={450}
              quality="90"
              loading="eager"
              layout="fixed"

            />
            {images.map(proj=>
                <div className="w-screen sm:w-auto group rounded-lg overflow-hidden relative m-10 min-w-[500px] sm:w-[600px]" key={`${proj.name}`}>
                  <img ></img>
                    <Image
                      src={proj.url} alt={proj.name} className="group-hover:scale-125 ease-in duration-200 h-full w-auto sm:min-w-[600px] rounded-lg"
                      width={600}
                      height={450}
                      loading="eager"
                      layout="fixed"
                    />
                </div>
              )}
            </div>
        </div>

        :
        <div className='flex justify-evenly h-screen'>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce200'></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full animate-bounce400' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce600' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce800'></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full animate-bounce400' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce600' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full animate-bounce400' ></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce200'></div>
            <div className='h-[5vw] w-[5vw] bg-headerColor  rounded-full mr-1 animate-bounce' ></div>
        </div>

      }


    </div>
  )
}

export default Projeto
