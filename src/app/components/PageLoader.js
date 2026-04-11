"use client";

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { keyframes } from "@mui/system";

const ACCENT = "#3B82F6";
const ORANGE = "#F97316";
const DARK = "#131313";
const FD = "var(--font-syne), sans-serif";

const pulse = keyframes`
  0%, 100% { opacity: 0.8; transform: scale(0.96); }
  50%       { opacity: 1;   transform: scale(1.04); }
`;

const ring = keyframes`
  0%   { transform: scale(0.85); opacity: 0.7; }
  100% { transform: scale(1.5);  opacity: 0;   }
`;

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const hide = () => {
      setFading(true);
      setTimeout(() => setVisible(false), 650);
    };

    if (document.readyState === "complete") {
      setTimeout(hide, 400);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 400));
    }
  }, []);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: DARK,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.65s ease",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Logo + pulsing rings */}
      <Box sx={{ position: "relative", width: "96px", height: "96px" }}>
        {/* Ring 1 */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: `1.5px solid ${ACCENT}`,
            animation: `${ring} 1.8s ease-out infinite`,
          }}
        />
        {/* Ring 2 — offset */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: `1.5px solid ${ACCENT}`,
            animation: `${ring} 1.8s ease-out infinite 0.6s`,
          }}
        />
        {/* Logo */}
        <Box
          sx={{
            position: "absolute",
            inset: "14px",
            animation: `${pulse} 1.8s ease-in-out infinite`,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Iron Goose"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>

      {/* Wordmark */}
      <Typography
        sx={{
          fontFamily: FD,
          fontWeight: 800,
          fontSize: "22px",
          letterSpacing: "-0.5px",
        }}
      >
        <Box component="span" sx={{ color: ACCENT }}>Iron</Box>
        <Box component="span" sx={{ color: ORANGE }}> Goose</Box>
      </Typography>
    </Box>
  );
}
