import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import UploadForm from "./UploadForm";

const UploadDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Upload</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Report</DialogTitle>
          <DialogDescription>
            Upload report in PDF or Image formats only
          </DialogDescription>
        </DialogHeader>
        <div>
          <UploadForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
