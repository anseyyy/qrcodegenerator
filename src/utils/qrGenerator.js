import QRCode from "qrcode";

// Preset logo SVG strings
export const PRESET_LOGOS = {
  instagram: {
    name: "Instagram",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`
  },
  facebook: {
    name: "Facebook",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`
  },
  youtube: {
    name: "YouTube",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
  },
  whatsapp: {
    name: "WhatsApp",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489 0 9.954-4.41 9.957-9.829.002-2.624-1.013-5.093-2.858-6.941C16.476 1.988 14.027 1.01 11.4 1.01 5.91 1.01 1.446 5.421 1.443 10.84c0 1.516.406 3.002 1.176 4.306L1.623 21.14l6.19-1.613c1.29.704 2.68 1.069 4.097 1.07h.01a9.9 9.9 0 0 0-.01-.003z"/></svg>`
  },
  linkedin: {
    name: "LinkedIn",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  github: {
    name: "GitHub",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#181717"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
  },
  link: {
    name: "Web Link",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  }
};

// Curated beautiful background frame templates
export const FRAMES = [
  { id: "none", name: "No Frame (Classic)", bgColor: "transparent" },
  { id: "charcoal", name: "Charcoal Slate", bgColor: "#18181B", textColor: "#18181B", labelText: "SCAN ME", accentColor: "#A6E22E", themeDark: "#18181B" },
  { id: "mint", name: "Mint Gradient", bgColor: "linear-gradient", colors: ["#D9F99D", "#A6E22E", "#65A30D"], textColor: "#3F6212", labelText: "SCAN ME", accentColor: "#FFFFFF", themeDark: "#3F6212" },
  { id: "ocean", name: "Ocean Breeze", bgColor: "linear-gradient", colors: ["#E0F2FE", "#0284C7", "#0369A1"], textColor: "#0369A1", labelText: "SCAN TO VISIT", accentColor: "#FFFFFF", themeDark: "#0369A1" },
  { id: "sunset", name: "Sunset Orange", bgColor: "linear-gradient", colors: ["#FDF2F8", "#EC4899", "#C2410C"], textColor: "#9D174D", labelText: "CONNECT ME", accentColor: "#FFFFFF", themeDark: "#9D174D" },
  { id: "polaroid", name: "Retro Polaroid", bgColor: "#FAFAF9", textColor: "#1C1917", labelText: "Scan Me! 💚", accentColor: "#A6E22E", isPolaroid: true, themeDark: "#1C1917" },
  { id: "neon", name: "Cyberpunk Grid", bgColor: "#09090B", textColor: "#09090B", labelText: "SCAN QR CODE", accentColor: "#A6E22E", isCyber: true, themeDark: "#09090B" }
];

export const getSvgDataUrl = (svgString) => {
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
};

export const generateQrWithCustomizations = async (text, options = {}) => {
  const {
    foregroundColor = "#101010",
    backgroundColor = "#FFFFFF",
    logoDataUrl = null,
    logoSizePercent = 0.20,
    badgeShape = "circle",
    frameId = "none",
    frameText = ""
  } = options;

  const hasText = frameText && frameText.trim().length > 0;
  const isSquare = frameId === "none";
  const isOutputSquare = isSquare || !hasText;
  const canvas = document.createElement("canvas");
  
  // Set dimensions based on layout aspect ratio
  const width = 1024;
  const height = isOutputSquare ? 1024 : 1380;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas.toDataURL("image/png");

  // 1. Draw Frame background if a frame is chosen
  const frame = FRAMES.find(f => f.id === frameId) || FRAMES[0];

  if (!isSquare) {
    if (frame.bgColor === "linear-gradient" && frame.colors) {
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      frame.colors.forEach((c, idx) => {
        grad.addColorStop(idx / (frame.colors.length - 1), c);
      });
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    } else {
      ctx.fillStyle = frame.bgColor;
      ctx.fillRect(0, 0, width, height);
    }

    // Grid details for Cyberpunk frame
    if (frame.isCyber) {
      ctx.strokeStyle = "rgba(192, 132, 252, 0.12)";
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    // Polaroid subtle drop-shadow details
    if (frame.isPolaroid) {
      // Inset photo line
      ctx.strokeStyle = "rgba(0, 0, 0, 0.05)";
      ctx.lineWidth = 10;
      ctx.strokeRect(5, 5, width - 10, height - 10);
    }
  }

  // 2. Setup temporary canvas for the standalone QR code
  const qrCanvasSize = isSquare ? width : 680;
  const qrTempCanvas = document.createElement("canvas");
  qrTempCanvas.width = qrCanvasSize;
  qrTempCanvas.height = qrCanvasSize;

  const qrColorDark = isSquare ? foregroundColor : (frame.themeDark || foregroundColor);
  const qrColorLight = isSquare ? backgroundColor : "#FFFFFF"; // Frame container must be white for contrast

  await QRCode.toCanvas(qrTempCanvas, text, {
    width: qrCanvasSize,
    margin: isSquare ? 2 : 3,
    errorCorrectionLevel: "H",
    color: {
      dark: qrColorDark,
      light: qrColorLight
    }
  });

  const qrCtx = qrTempCanvas.getContext("2d");
  
  // 3. Draw Logo in center of QR Canvas if specified
  if (logoDataUrl && qrCtx) {
    const logoImg = new Image();
    logoImg.src = logoDataUrl;

    await new Promise((resolve) => {
      logoImg.onload = resolve;
      logoImg.onerror = () => resolve();
    });

    if (logoImg.complete && logoImg.naturalWidth > 0) {
      const qrCenter = qrCanvasSize / 2;
      const logoSize = Math.floor(qrCanvasSize * logoSizePercent);
      const logoX = qrCenter - logoSize / 2;
      const logoY = qrCenter - logoSize / 2;

      // Draw background badge behind the logo
      const badgeSize = Math.floor(logoSize * 1.32);
      const badgeX = qrCenter - badgeSize / 2;
      const badgeY = qrCenter - badgeSize / 2;

      qrCtx.save();
      qrCtx.fillStyle = "#FFFFFF"; // Clean white background badge
      
      // Realistic shadow
      qrCtx.shadowColor = "rgba(0, 0, 0, 0.12)";
      qrCtx.shadowBlur = 18;
      qrCtx.shadowOffsetX = 0;
      qrCtx.shadowOffsetY = 4;
      
      if (badgeShape === "circle") {
        qrCtx.beginPath();
        qrCtx.arc(qrCenter, qrCenter, badgeSize / 2, 0, 2 * Math.PI);
        qrCtx.fill();
        
        qrCtx.shadowColor = "transparent";
        qrCtx.strokeStyle = "#E4E4E7"; // Zinc-200 border
        qrCtx.lineWidth = Math.max(2, Math.floor(qrCanvasSize * 0.003));
        qrCtx.stroke();
      } else {
        const radius = Math.floor(badgeSize * 0.22);
        qrCtx.beginPath();
        drawRoundedRect(qrCtx, badgeX, badgeY, badgeSize, badgeSize, radius);
        qrCtx.fill();
        
        qrCtx.shadowColor = "transparent";
        qrCtx.strokeStyle = "#E4E4E7"; // Zinc-200 border
        qrCtx.lineWidth = Math.max(2, Math.floor(qrCanvasSize * 0.003));
        qrCtx.stroke();
      }
      qrCtx.restore();

      // Draw Logo clipped inside badge
      qrCtx.save();
      if (badgeShape === "circle") {
        qrCtx.beginPath();
        qrCtx.arc(qrCenter, qrCenter, logoSize / 2, 0, 2 * Math.PI);
        qrCtx.clip();
      } else {
        const radius = Math.floor(logoSize * 0.22);
        qrCtx.beginPath();
        drawRoundedRect(qrCtx, logoX, logoY, logoSize, logoSize, radius);
        qrCtx.clip();
      }
      qrCtx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
      qrCtx.restore();
    }
  }

  // 4. Output or Combine onto main canvas
  if (isSquare) {
    // If no frame is selected, standard QR canvas is the output
    return qrTempCanvas.toDataURL("image/png");
  } else {
    // Draw the white rounded square container for the QR code on the main frame canvas
    const hasText = frameText.trim().length > 0;
    const containerSize = 740;
    const containerX = (width - containerSize) / 2;
    const containerY = hasText ? 120 : (height - containerSize) / 2;

    ctx.save();
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0, 0, 0, 0.16)";
    ctx.shadowBlur = 35;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 12;
    ctx.beginPath();
    drawRoundedRect(ctx, containerX, containerY, containerSize, containerSize, 40);
    ctx.fill();
    ctx.restore();

    // Draw temporary QR code canvas centered inside the white square container
    ctx.drawImage(qrTempCanvas, containerX + 30, containerY + 30, 680, 680);

    // 5. Draw the Label Text at the bottom (only if entered!)
    if (hasText) {
      const textToDraw = frameText.trim();
      
      if (frame.isPolaroid) {
        ctx.save();
        ctx.fillStyle = frame.textColor;
        ctx.textAlign = "center";
        // Cursive style font
        ctx.font = "italic 700 52px cursive, Brush Script MT, Chalkboard SE, sans-serif";
        ctx.fillText(textToDraw, width / 2, 1070);
        ctx.restore();
      } else {
        // Draw capsule pill button for Standard Frames
        const pillWidth = 560;
        const pillHeight = 110;
        const pillX = width / 2 - pillWidth / 2;
        const pillY = 1040;

        ctx.save();
        ctx.fillStyle = frame.accentColor;
        
        // Shadow for button capsule
        ctx.shadowColor = "rgba(0, 0, 0, 0.08)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 5;

        ctx.beginPath();
        drawRoundedRect(ctx, pillX, pillY, pillWidth, pillHeight, 30);
        ctx.fill();

        // Text inside pill button
        ctx.shadowColor = "transparent";
        ctx.fillStyle = frame.textColor;
        ctx.font = "800 42px system-ui, -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(textToDraw, width / 2, pillY + pillHeight / 2);
        ctx.restore();
      }
    }

    return canvas.toDataURL("image/png");
  }
};

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
