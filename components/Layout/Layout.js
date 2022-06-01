import Naigation from "./Navigation"

function Layout(props) {
  return (
    <>
      <Naigation />
      <div>{props.children}</div>
    </>
  )
}

export default Layout