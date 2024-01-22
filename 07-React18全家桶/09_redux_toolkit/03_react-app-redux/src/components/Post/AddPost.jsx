import {memo, useState} from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure
} from "@nextui-org/react"
import {addPost} from "@/store/post"
import {useDispatch, useSelector} from "react-redux"
import {selectAllUsers} from "@/store/user";

function AddPost() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);
  
  const users = useSelector(selectAllUsers)
  const handleSubmit = () => {
    if (title && body && userId) {
      dispatch(addPost(title, body, userId))
    }
    setTitle("")
    setBody("")
    setUserId(0)
  }
  
  const canSave = Boolean(title) && Boolean(body) && Boolean(userId)
  
  return (
    <div>
      <div className="flex items-center justify-center">
        <Button onPress={onOpen} color="primary">
          增加
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        onClose={() => {
          setTitle("")
          setBody("")
          setUserId("")
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader className="flex flex-col gap-2">增加博文</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="文章名称："
                  placeholder="请输入文章名称"
                  isRequired
                  labelPlacement="outside-left"
                  isClearable
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  label="文章内容："
                  isRequired
                  placeholder="请输入文章内容"
                  labelPlacement="outside-left"
                  isClearable
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
                <Select
                  label="文章作者："
                  placeholder="请选择文章作者"
                  isRequired
                  labelPlacement="outside-left"
                  className="max-w-xs"
                  value={userId}
                  onChange={(e) => setUserId(Number(e.target.value))}
                >
                  {
                    users.map((user) => (
                      <SelectItem key={user.id} value={user.id}>
                        {user.name}
                      </SelectItem>
                    ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose} onClick={() => {
                  setTitle("")
                  setBody("")
                  setUserId("")
                }}>
                  取消
                </Button>
                <Button color="primary" onPress={onClose} onClick={() => handleSubmit()} isDisabled={!canSave}>
                  确定
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
  
}

export default memo(AddPost)