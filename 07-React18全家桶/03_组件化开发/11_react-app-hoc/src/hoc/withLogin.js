import Login from "@/components/Login"

export function withLogin(WrappedComponent){
  const HocComponent = (props) => {
    // 从 localStorage 中获取 token
    const token = localStorage.getItem("token")
    if(token){
      return <WrappedComponent {...props}/>
    }else{
      return <Login/>
    }
  }
  
  HocComponent.displayName = `Hoc(${WrappedComponent.displayName || WrappedComponent.name})`
  
  return HocComponent
  
}

