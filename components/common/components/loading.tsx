import { Loader2 } from "lucide-react";

const Loading = () => {
    return (  
        <div className="flex flex-col items-center justify-center gap-2">
            <Loader2 className="size-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading...</p>
        </div>
    );
}
 
export default Loading;