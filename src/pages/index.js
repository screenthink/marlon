import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"

const Hero = styled.div`
  position: relative;
  margin-bottom: 48px;

  @media (min-width: 1200px) {}
`;

const H2 = styled.h2`
  position: relative;
  color: #663399;

  @media (min-width: 1200px) {}

  ${(props) => props.red && css`
    color: #994733;
  `}
`;






// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Marlon
        <span style={headingAccentStyles}>Works</span>
      </h1>

      <H2 red>A blob</H2>

      <Hero>
        <StaticImage
          src="../images/blob.jpg"
          alt="A blob"
          placeholder="blurred"
          transformOptions={{ grayscale: false }}
          width={1600}
        />
      </Hero>

      <p style={paragraphStyles}>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.</p>

      <p style={paragraphStyles}>Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

    </main>
  )
}

export default IndexPage