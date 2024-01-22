import {useNavigate} from "react-router-dom";

export function withRouter(WrapperComponent) {
  return (props) => {
    const navigate = useNavigate()
    return (
      <WrapperComponent {...props} router={{navigate}}></WrapperComponent>
    )
  }
}