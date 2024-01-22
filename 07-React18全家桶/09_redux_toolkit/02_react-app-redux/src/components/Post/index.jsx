import {Fragment, memo} from "react"
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from "@nextui-org/react"
import {useSelector} from "react-redux"
import {selectAllPost} from "@/store/post"
import AddPost from "@/components/Post/AddPost"
import {selectAllUsers} from "@/store/user";

function Post() {
  const posts = useSelector(selectAllPost)
  const users = useSelector(selectAllUsers)
  
  return (
    <Fragment>
      <Card>
        <CardHeader className="flex justify-center">
          <div className="text-center">
            博客管理
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          <AddPost/>
        </CardBody>
        <Divider/>
        <CardFooter>
          <Table aria-label="Example table with dynamic content">
            <TableHeader>
              <TableColumn key={"id"}>编号</TableColumn>
              <TableColumn key={"title"}>文章名称</TableColumn>
              <TableColumn key={"body"}>文章内容</TableColumn>
              <TableColumn key={"author"}>作者</TableColumn>
            </TableHeader>
            <TableBody items={posts}>
              {
                (item) => (
                  <TableRow key={item.key}>
                    {
                      (columnKey) => {
                        if (columnKey === "author") {
                          const user = users.find((u) => u.id === item.userId)
                          return <TableCell>{user ? user.name : "未知用户"}</TableCell>
                        }
                        return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      }
                    }
                  </TableRow>
                )}
            </TableBody>
          </Table>
        </CardFooter>
      </Card>
    
    </Fragment>
  )
}

export default memo(Post)