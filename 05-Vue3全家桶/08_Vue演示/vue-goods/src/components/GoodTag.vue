<template>
  <div class="tag">
    <input
      v-if="isEdit"
      class="input"
      type="text"
      placeholder="输入标签"
      v-focus
      ref="inputRef"
      :value="tagName"
      @blur="handleBlur()"
      @keyup.enter="handleKeyUp"
    />
    <div v-else class="text" @dblclick="handleDbClick">
      {{ tagName }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isEdit = ref(false)

defineProps({
  tagName: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:tagName'])

// 处理双击事件
const handleDbClick = () => {
  isEdit.value = true
}

// 处理失去焦点事件
const handleBlur = () => {
  isEdit.value = false
}

// 处理回车事件
const handleKeyUp = (e) => {
  const { value } = e.target
  if (!value) {
    return alert('输入的内容不能为空~')
  }
  // 将输入框的内容提交到父组件
  emits('update:tagName', e.target.value)
  // 失去焦点
  handleBlur()
}
</script>

<style scoped lang="less">
.tag {
  cursor: pointer;

  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;

    &::placeholder {
      color: #666;
    }
  }
}
</style>
