import React from "react"

import SEO from "../components/seo"

import "../css/global.css"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="container mx-auto">
      <div className="rounded mt-16">
        <h1 className="font-sans text-red-600 text-lg"><b>404!</b> This is not the page you are looking for</h1>
      </div>
      <div>
        <Link to="/">
          <div className="pt-6">
            <p className="font-sans">← go to the homepage <span role="img" aria-label="home">🏠</span></p>
          </div>
        </Link>
      </div>
    </div>
  </>
)

export default NotFoundPage
