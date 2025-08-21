import { Modal } from '@mantine/core'

export const BillingSection = () => {
  return (
    <div>
      <BillingModal />
    </div>
  )
}

const BillingModal = () => {
  return <Modal opened={true} centered onClose={close} title='Authentication'></Modal>
}
