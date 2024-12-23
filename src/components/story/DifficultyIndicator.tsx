import { motion } from "framer-motion";
import { DifficultySettings } from "@/utils/difficultyAdjustment";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface DifficultyIndicatorProps {
  settings: DifficultySettings;
  label: string;
}

export const DifficultyIndicator = ({ settings, label }: DifficultyIndicatorProps) => {
  const getColor = () => {
    switch (label) {
      case "Beginner": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Advanced": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 right-4 z-50"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Badge variant="outline" className={`${getColor()} text-white`}>
              {label}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Current difficulty level based on your performance</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};