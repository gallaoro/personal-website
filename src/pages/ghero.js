import React, { useState } from "react"
import SEO from "../components/seo"

const GheroPage = () => {
  const [input, setInput] = useState("")
  const [open, setOpen] = useState(false)
  return (
    <div style={{ height: "100vh", maxHeight: "-webkit-fill-available" }}>
      <SEO title="Garollo" />
      <div className="flex" style={{ height: "100%", maxHeight: "-webkit-fill-available" }} id="main-section">
        <div className="lg:w-1/3 md:w-1/4 w-0">
        </div>
        <div className="lg:w-2/3 md:w-3/4 w-full flex justify-center items-start sm:items-center pt-10 px-6">
          <div className="bg-white rounded-lg max-w-xl">
            <div className="w-auto inline-block p-6 sm:p-8">
              <h2 className="text-lg">Input your height</h2>
              <input className="border border-gray-400" type="number" value={input} onChange={e => setInput(e.target.value)} />
              <button className="border block border-gray-400 px-4 mt-2" onClick={_ => setOpen(true)} >
                Next
              </button>
            </div>
          </div>
        </div>
        {!!open &&
          <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
            <div className="bg-white w-10/12 pt-2 pl-1">
              <p>Result</p>
              <p className="pt-8 pl-4">Your height is {input}cm!</p>
              <button className="mr-2 mb-2 float-right border block border-gray-400 px-4 mt-2" onClick={_ => setOpen(false)} >
                OK
              </button>
            </div>
          </div>
        }
        <div className="absolute bottom-0 right-0 p-2">
          <p className="font-sans text-white text-sm mb-0">
            <a href="https://gatsbyjs.org" title="gatsby">gatsby</a>, <a href="https://tailwindcss.com/" title="tailwind">tailwind</a>, <a href="https://www.heropatterns.com/" title="heropatterns">heropatterns</a>, favicon by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GheroPage
