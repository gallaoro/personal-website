import React from "react"
import SEO from "../components/seo"

import "../css/global.css"

import "../css/background.css"
class IndexPage extends React.Component {

  render() {
    return (
      <>
        <SEO title="Home" />
        {/* eslint-disable-next-line no-dupe-keys */}
        <div className="flex h-screen" id="main-section">
          <div className="lg:w-1/3 md:w-1/4 w-0">
          </div>
          <div className="lg:w-2/3 md:w-3/4 w-full flex justify-center items-start sm:items-center pt-10 px-6">
            <div className="bg-white rounded-lg">
              <div className="w-auto inline-block p-6 sm:p-8">
                <div className="flex items-center">
                  <div className="rounded-full w-20 h-20 flex items-center">
                    <img className="rounded-full shadow-inner" alt="me" style={{ filter: "grayscale(20%)" }} src="https://pbs.twimg.com/profile_images/1194354546824400898/l2jMkcO__400x400.jpg" />
                  </div>
                  <div className="pl-6 flex items-center">
                    <h1 className="font-sans text-2xl sm:text-3xl font-bold text-gray-800">Gabriele Pallaoro</h1>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-center">
                    <p className="font-sans text-gray-700 mb-0"><span role="img" aria-label="notebook">💻</span> full stack developer <a href="https://advisoreat.com">@AdvisorEat</a></p>
                  </div>
                  <div className="flex items-center pt-2">
                    <p className="font-sans text-xs text-gray-700 mb-0"><a href="https://twitter.com/lellefood">@lellefood</a>, <a href="https://github.com/lellefood">source</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 p-2">
            <p className="font-sans text-white text-sm mb-0">
              <a href="https://gatsbyjs.org">gatsby</a>, <a href="https://tailwindcss.com/">tailwind</a>, <a href="https://www.heropatterns.com/">heropatterns</a>
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default IndexPage
