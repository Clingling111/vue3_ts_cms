import type pageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'

type EditFn = (data: any) => void
function usePageModal(editCallback?: EditFn) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  const handelNewClick = () => {
    modalRef.value?.changeDialogVisible()
  }
  const handelEditClick = (itemData: any) => {
    if (editCallback) editCallback(itemData)
    modalRef.value?.changeDialogVisible(false, itemData)
  }

  return { modalRef, handelNewClick, handelEditClick }
}

export default usePageModal
