import React, {PureComponent} from 'react'
import '@/App.css'

class App extends PureComponent {
  
  state = {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
      {
        id: 5,
        name: '《你不知道的JavaScript》',
        date: '2014-8',
        price: 88.00,
        count: 1
      },
    ]
  }
  
  // 改变购物车中书籍的数量，如果不传递 num ，就是新增；否则，传递 -1 就是减少
  changeCount(id, num = 1) {
    const {books} = this.state
    
    if (id) {
      const newBooks = books.map(book => {
        if (book.id === id) {
          book.count += num
        }
        return book
      })
      
      console.log('changeCount', newBooks === books) // false
      this.setState({
        books: newBooks
      })
    }
  }
  
  // 删除购物车中的书籍
  delete(id) {
      const {books} = this.state

      if (id) {
        const newBooks = books.filter(book => book.id !== id)

        console.log('delete', newBooks === books) // false
        this.setState({
          books: newBooks
        })
      }
    
  }
  
  // 当购物车中的书籍数据不为空的时候的渲染函数
  renderBookList() {
    const {books} = this.state
    const totalPrice = books.map(item => item.price * item.count).reduce((prev, next) => prev + next, 0)
    return (<div>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            books && books.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{book.name}</td>
                  <td>{book.date}</td>
                  <td>{"¥" + book.price.toFixed(2)}</td>
                  <td>
                    <button disabled={book.count <= 1} onClick={() => this.changeCount(book.id, -1)}>-</button>
                    {book.count}
                    <button onClick={() => this.changeCount(book.id)}>+</button>
                  </td>
                  <td>
                    <button onClick={() => this.delete(book.id)}>移除</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">总价格：{"¥" + totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>)
  }
  
  // 当购物车中的书籍数据为空的时候的渲染函数
  renderBookEmpty() {
    return (<div>暂无数据</div>)
  }
  
  render() {
    const {books} = this.state
    return books.length ? this.renderBookList() : this.renderBookEmpty()
  }
}

export default App