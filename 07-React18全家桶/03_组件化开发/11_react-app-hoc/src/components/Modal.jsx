import {PureComponent} from "react"
import {createPortal} from "react-dom";

class Modal extends PureComponent {
  render() {
    return (
      createPortal(
        (<div className="modal">
          {this.props.children}
        </div>)
        , document.querySelector('body'))
    )
  }
}

export default Modal