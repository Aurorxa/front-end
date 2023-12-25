import ThemeContext from "@/context/themeContext"

export function withTheme(WrappedComponent) {
  const HocComponent = (props) => {
    return (
      <ThemeContext.Consumer >
        {value => <WrappedComponent {...props} {...value}/>}
      </ThemeContext.Consumer>
    )
  }
  
  HocComponent.displayName = `Hoc(${WrappedComponent.displayName || WrappedComponent.name})`
  
  return HocComponent
  
}

