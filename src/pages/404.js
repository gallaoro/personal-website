import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import "../css/global.css"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div>
      <div class="container mx-auto px-6">
        <div class="pt-16">
          <h1 class="font-sans text-red-600 text-lg">
            <b>404!</b> This is not the page you are looking for
          </h1>
        </div>
        <div class="mt-6 border rounded inline-block bg-white">
          <Link title="homepage" to="/">
            <div class="py-2 px-4">
              <p class="font-sans">← go to the homepage <span role="img" aria-label="home">🏠</span></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default NotFoundPage
