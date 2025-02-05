import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ErrorMessage } from '../../components/status'
import { TransactionViewer } from '../../components/transaction'

const GetTransaction: NextPage = () => {
  const router = useRouter()
  const { hexCBOR } = router.query

  if (typeof hexCBOR !== 'string') return <ErrorMessage>Invalid Transaction CBOR</ErrorMessage>;

  return (
    <TransactionViewer content={Buffer.from(hexCBOR, 'hex')} />
  )
}

export default GetTransaction
