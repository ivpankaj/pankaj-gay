"use client";

import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  Share2,
} from "lucide-react";
import {
  WhatsAppIcon,
  XIcon,
  TelegramIcon,
  LinkedInIcon,
} from "./Icons";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

export function ShareModal({
  isOpen,
  onClose,
  url = "https://pankaj.gay",
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: 240,
      margin: 1,
      color: {
        dark: "#ffffff",
        light: "#000000",
      },
    })
      .then((dataUrl) => setQrDataUrl(dataUrl))
      .catch((err) => console.error("QR Code error:", err));
  }, [url]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ url });
      } catch {
        // user cancelled
      }
    } else {
      handleCopy();
    }
  };

  const shareLinks = [
    {
      href: `https://wa.me/?text=${encodeURIComponent(url)}`,
      icon: <WhatsAppIcon size={20} className="text-white" />,
      label: "WhatsApp",
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      icon: <XIcon size={18} className="text-white" />,
      label: "X",
    },
    {
      href: `https://t.me/share/url?url=${encodeURIComponent(url)}`,
      icon: <TelegramIcon size={20} className="text-white" />,
      label: "Telegram",
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: <LinkedInIcon size={20} className="text-white" />,
      label: "LinkedIn",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xs border-zinc-800 bg-black p-6 shadow-2xl rounded-3xl text-white">
        <DialogHeader className="items-center">
          <DialogTitle className="sr-only">Share & QR Code</DialogTitle>
        </DialogHeader>

        {/* QR Code Container with 100% reliable image */}
        <div className="flex flex-col items-center justify-center p-2">
          <div className="rounded-2xl border border-zinc-800 bg-black p-4 shadow-inner flex items-center justify-center">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt="QR Code for https://pankaj.gay"
                className="w-44 h-44 rounded-xl block object-contain"
              />
            ) : (
              <div className="w-44 h-44 flex items-center justify-center text-xs text-zinc-500">
                Loading QR...
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons: Copy & Native Share */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <Button
            variant={copied ? "default" : "secondary"}
            size="icon"
            onClick={handleCopy}
            className={`h-12 w-12 rounded-2xl ${
              copied
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800"
            }`}
            aria-label="Copy Link"
          >
            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
          </Button>

          {typeof navigator !== "undefined" && "share" in navigator && (
            <Button
              variant="secondary"
              size="icon"
              onClick={handleNativeShare}
              className="h-12 w-12 rounded-2xl bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800"
              aria-label="Share Link"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Quick Social Forward Row */}
        <div className="flex items-center justify-center gap-2.5 pt-4 border-t border-zinc-850">
          {shareLinks.map((item, idx) => (
            <Button
              key={idx}
              variant="secondary"
              size="icon"
              asChild
              className="h-10 w-10 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-white"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
