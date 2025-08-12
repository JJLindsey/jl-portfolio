import { styled } from '@mui/material'
import Card from '@mui/material/Card'

export const FrostedCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: "1rem",
  overflow: "hidden",
  fontSize: "2rem",
  padding: theme.spacing(2),
  background: "rgba(255, 255, 255, 0.1)", // frosted dark background
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid transparent",
  zIndex: 1,

  // Gradient border overlay
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "1px", // thin border
    borderRadius: "inherit",
    background: `linear-gradient(to bottom right,
     rgba(255,255,255,0.9) 0%,
    rgba(255,255,255,0.1) 40%,
    rgba(0,150,255,0.1) 60%,
    rgba(0, 225, 255, 0.9) 100%)`,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "difference",
    pointerEvents: "none",
  },
}))