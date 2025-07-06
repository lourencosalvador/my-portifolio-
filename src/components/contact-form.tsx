"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send, User, Mail, MessageSquare, Building } from "lucide-react";

interface ContactFormProps {
  onSuccess: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simular envio de email (aqui você pode integrar com EmailJS, Resend, etc.)
      const emailContent = `
        New contact message from portfolio:
        
        Name: ${formData.name}
        Email: ${formData.email}
        ${formData.company ? `Company: ${formData.company}` : ''}
        Subject: ${formData.subject}
        
        Message:
        ${formData.message}
        
        ---
        Sent through portfolio contact form
        Date: ${new Date().toLocaleString('en-US')}
      `;

      // Aqui você implementaria a integração real com seu serviço de email
      console.log("Email content:", emailContent);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
      
      onSuccess();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-effect p-6 rounded-lg backdrop-blur-sm border border-white/20 space-y-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="size-4" />
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("name", e.target.value)}
            className="glass-effect border-white/30 focus:border-purple-500/50"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="size-4" />
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
            className="glass-effect border-white/30 focus:border-purple-500/50"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="flex items-center gap-2">
          <Building className="size-4" />
          Company (optional)
        </Label>
        <Input
          id="company"
          type="text"
          placeholder="Your company name"
          value={formData.company}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("company", e.target.value)}
          className="glass-effect border-white/30 focus:border-purple-500/50"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="flex items-center gap-2">
          <MessageSquare className="size-4" />
          Subject *
        </Label>
        <Input
          id="subject"
          type="text"
          placeholder="What's this about?"
          value={formData.subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("subject", e.target.value)}
          className="glass-effect border-white/30 focus:border-purple-500/50"
          disabled={isLoading}
        />
        {errors.subject && (
          <p className="text-red-400 text-sm">{errors.subject}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message *
        </Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project, idea, or just say hello..."
          value={formData.message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange("message", e.target.value)}
          className="glass-effect border-white/30 focus:border-purple-500/50 min-h-[120px]"
          disabled={isLoading}
        />
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-6 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </motion.form>
  );
} 