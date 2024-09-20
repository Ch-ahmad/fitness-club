import { useFetch } from '../hooks/useFetch'
import { IUser } from '@/lib/types'
interface ITraineeProps { 
      trainees:IUser[]

}
const useTrainerUser = () => {
      const { response,isLoading} = useFetch<ITraineeProps>({
            path: "trainer/customers",
            queryKey:["trainer/customers"]
      })
  return (
        {response,isLoading}
  )
}

export default useTrainerUser