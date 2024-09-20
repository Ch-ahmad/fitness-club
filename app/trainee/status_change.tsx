import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
 
} from "@/components/ui/dialog";
import { SquarePen } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import useApiRequest from "@/utils/hooks/useApiRequest";
import { useParams } from "next/navigation";
type IStatus = "pending" | "completed" | "skipped" | "missed"
const ExerciseStatusModal = ({status,exerciseId,dayId}:{status:IStatus,exerciseId:string,dayId:string}) => {
      const [open,setOpen] = useState<boolean>(false)
      const [selectValue,setSelectValue] = useState<IStatus>(status);
      const {programId} = useParams();
      const {mutationFunction} = useApiRequest({
            method:"put"
      })
      const onSubmitStatus = () => {
            mutationFunction({
                  path:"trainee/update-status",
                  data:{
                  programId,
                  status:selectValue,
                  dayId,
                  exerciseId:exerciseId,
                  },
                  callback:()=>{
                        setOpen(false);
                  }
            })
      }
      useEffect(()=>{
            setSelectValue(status)
      },[status])
  return (
      <>
      <button type="button" onClick={()=>{
            setOpen(true)
      }}>

      <SquarePen className="size-5" />
      </button>
      
    <Dialog open={open} onOpenChange={()=>{
      setOpen(false)
    }}>
      <DialogTrigger asChild>
        
      </DialogTrigger>
      <DialogContent className="sm:max-w-[495px]">
        <DialogHeader>
          <DialogTitle>Exercise Details</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-6 w-full">
          <div className="">
            <h1 className="font-semibold text-sm leading-0">Change Status</h1>
          </div>
        </div>
        <>  
      <Select value={selectValue} onValueChange={(value) => {
            setSelectValue(value as IStatus)
      }}
      disabled={status !== "pending"}
      > 
      <SelectTrigger >
      <SelectValue placeholder="Select Status" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="pending">Pending</SelectItem>
      <SelectItem value="completed">Completed</SelectItem>
      <SelectItem value="missed">Missed</SelectItem>
      <SelectItem value="skipped">Skipped</SelectItem>
      </SelectContent>
      </Select>
      {status === "pending" &&<Button
      onClick={onSubmitStatus}
      >Update Status</Button>}
</>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default ExerciseStatusModal;
