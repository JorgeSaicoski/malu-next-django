import React, {useState, useEffect} from 'react'
import Image from "next/image"
import Link from 'next/link'

function ProjectList({category}) {
  const [projects, setProjects] = useState([])
  useEffect(() => {
      getProjects()
  }, [])


  let getProjects = async () => {
      let response = await fetch(`http://127.0.0.1:8000/api/projects/category/${category}`)
      let data = await response.json()
      await setProjects(data)
  }


  return (
    <div className="sm:h-[40vh] flex flex-row ml-3 mr-3 overflow-x-scroll snap-x snap-mandatory">
      {projects.map(proj=>
          <div className="w-screen sm:w-auto group rounded-lg overflow-hidden relative m-10 min-w-[500px] sm:w-[600px]" key={`${proj.name}`}>
            <img ></img>
              <Image
                src={proj.image} alt={proj.name} className="group-hover:scale-125 ease-in duration-200 h-full w-auto sm:min-w-[600px] rounded-lg"
                width={600}
                height={450}
                loading="eager"
                layout="fixed"
              />

            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <p className="opacity-0 group-hover:opacity-100 text-2xl">{proj.name}</p>
                <Link href={`/projetos/${proj.id}`} className=""><p className="opacity-0 group-hover:opacity-100 bg-textColor p-4 m-10 z-10 rounded-3xl text-base cursor-pointer">Veja Mais</p></Link>
              </div>
              <div className="absolute bg-headerColor opacity-0 group-hover:opacity-50 ease-out duration-30 w-full h-full"></div>
            </div>
          </div>
        )}
    </div>
  )
}

export default ProjectList
