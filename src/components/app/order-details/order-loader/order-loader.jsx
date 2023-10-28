import React from "react"
import ContentLoader from "react-content-loader"

const OrderLoader = (props) => (
  <ContentLoader 
    speed={2}

    viewBox="0 0 720 718"
    backgroundColor="#010115"
    foregroundColor="#ecebeb"

    {...props}
  >

    <rect x="0" y="0" rx="40" ry="40" width="720" height="718" />
  </ContentLoader>
)

export default OrderLoader