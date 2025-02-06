import { ref } from 'vue'
import type pageContent from '@/components/page-content/page-content.vue'

function usePageContent() {
  const contentRef = ref<InstanceType<typeof pageContent>>()
  const handelQueryClick = (queryInfo: any) => {
    contentRef.value?.fetchPageListData(queryInfo)
  }
  const handelResetClick = () => {
    contentRef.value?.fetchPageListData()
  }

  return {
    contentRef,
    handelQueryClick,
    handelResetClick
  }
}

export default usePageContent
