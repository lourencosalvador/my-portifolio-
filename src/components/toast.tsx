"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Mail } from "lucide-react";

interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  type?: "success" | "error" | "info";
}

export function Toast({ 
  isVisible, 
  onClose, 
  title = "Success!", 
  message = "Message sent successfully!",
  type = "success" 
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // Auto close após 5 segundos

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="size-5 text-green-400" />;
      case "error":
        return <X className="size-5 text-red-400" />;
      case "info":
        return <Mail className="size-5 text-blue-400" />;
      default:
        return <CheckCircle className="size-5 text-green-400" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case "success":
        return "border-green-500/50";
      case "error":
        return "border-red-500/50";
      case "info":
        return "border-blue-500/50";
      default:
        return "border-green-500/50";
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.3
          }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div className={`
            glass-effect backdrop-blur-sm border-2 ${getBorderColor()} 
            rounded-lg p-4 shadow-2xl
          `}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                {getIcon()}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {title}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {message}
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="flex-shrink-0 ml-4 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <X className="size-4" />
              </button>
            </div>
            
            {/* Barra de progresso */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className={`
                mt-3 h-1 rounded-full
                ${type === "success" ? "bg-green-500/30" : 
                  type === "error" ? "bg-red-500/30" : 
                  "bg-blue-500/30"}
              `}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 