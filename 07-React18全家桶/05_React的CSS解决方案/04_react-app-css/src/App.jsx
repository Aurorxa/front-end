import React, {PureComponent} from 'react'
import classNames from "classnames";


class App extends PureComponent {
  
  state = {}
  
  render() {
    return (
      <div>
        <div className={classNames('foo', 'bar')}>'foo bar'</div>
        <div className={classNames('foo', {bar: true})}>'foo bar'</div>
        <div className={classNames({'foo-bar': true})}>'foo-bar'</div>
        <div className={classNames({'foo-bar': false})}>''</div>
        <div className={classNames({foo: true}, {bar: true})}>'foo bar'</div>
        <div className={classNames({foo: true, bar: true})}>'foo bar'</div>
        <div className={classNames('foo', {bar: true, duck: false}, 'baz', {qux: true})}>'foo bar baz qux'</div>
        <div className={classNames(null, false, 'bar', undefined, 0, 1, {baz: null}, '')}>'bar 1'</div>
        <div className={classNames('a', ['b', {c: true, d: false}])}>'a b c'</div>
      </div>
    )
  }
}

export default App