import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const Teaser = (props) => (
  <li className="nav-item active">
    <Link className="nav-link" to={'/' + (props.blok.link.cached_url === 'home' ? '' : props.blok.link.cached_url)}>
      {props.blok.name}
    </Link>
  </li>
)

export default Teaser
