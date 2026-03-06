export function PixelMoth({ className = '' }: { className?: string }) {
  return (
    <div className={`moth-container ${className}`}>
      <svg width="48" height="48" viewBox="0 0 16 16" fill="none" className="moth" shapeRendering="crispEdges">
        <g className="moth-body" transform="translate(8, 8)">
          <rect x="-1" y="-3" width="2" height="1" fill="#a4f0c9" />
          <rect x="-1" y="-2" width="2" height="1" fill="#8ee8b8" />
          <rect x="-1" y="-1" width="2" height="1" fill="#70d0a0" />
          <rect x="-1" y="0" width="2" height="1" fill="#8ee8b8" />
          <rect x="-1" y="1" width="2" height="1" fill="#70d0a0" />
          <rect x="-1" y="2" width="2" height="1" fill="#60c090" />
          <rect x="-3" y="-5" width="1" height="1" fill="#c0ffdc" />
          <rect x="-2" y="-4" width="1" height="1" fill="#a4f0c9" />
          <rect x="1" y="-4" width="1" height="1" fill="#a4f0c9" />
          <rect x="2" y="-5" width="1" height="1" fill="#c0ffdc" />
          <g className="moth-wing-left">
            <rect x="-1.5" y="-2" width="1" height="1" fill="#60d0a0" opacity="0.8" />
            <rect x="-2.5" y="-3" width="1" height="1" fill="#70e0b0" opacity="0.7" />
            <rect x="-2.5" y="-2" width="1" height="1" fill="#60d0a0" opacity="0.8" />
            <rect x="-3.5" y="-2" width="1" height="1" fill="#50c090" opacity="0.6" />
            <rect x="-3.5" y="-1" width="1" height="1" fill="#60d0a0" opacity="0.7" />
            <rect x="-2.5" y="-1" width="1" height="1" fill="#70e0b0" opacity="0.8" />
            <rect x="-1.5" y="-1" width="1" height="1" fill="#80f0c0" opacity="0.7" />
            <rect x="-4.5" y="-1" width="1" height="1" fill="#40b080" opacity="0.5" />
            <rect x="-4.5" y="0" width="1" height="1" fill="#50c090" opacity="0.5" />
            <rect x="-3.5" y="0" width="1" height="1" fill="#60d0a0" opacity="0.7" />
            <rect x="-2.5" y="0" width="1" height="1" fill="#70e0b0" opacity="0.7" />
            <rect x="-1.5" y="0" width="1" height="1" fill="#60d0a0" opacity="0.6" />
            <rect x="-3.5" y="1" width="1" height="1" fill="#50c090" opacity="0.5" />
            <rect x="-2.5" y="1" width="1" height="1" fill="#60d0a0" opacity="0.6" />
            <rect x="-1.5" y="1" width="1" height="1" fill="#50c090" opacity="0.5" />
          </g>
          <g className="moth-wing-right">
            <rect x="0.5" y="-2" width="1" height="1" fill="#60d0a0" opacity="0.8" />
            <rect x="1.5" y="-3" width="1" height="1" fill="#70e0b0" opacity="0.7" />
            <rect x="1.5" y="-2" width="1" height="1" fill="#60d0a0" opacity="0.8" />
            <rect x="2.5" y="-2" width="1" height="1" fill="#50c090" opacity="0.6" />
            <rect x="2.5" y="-1" width="1" height="1" fill="#60d0a0" opacity="0.7" />
            <rect x="1.5" y="-1" width="1" height="1" fill="#70e0b0" opacity="0.8" />
            <rect x="0.5" y="-1" width="1" height="1" fill="#80f0c0" opacity="0.7" />
            <rect x="3.5" y="-1" width="1" height="1" fill="#40b080" opacity="0.5" />
            <rect x="3.5" y="0" width="1" height="1" fill="#50c090" opacity="0.5" />
            <rect x="2.5" y="0" width="1" height="1" fill="#60d0a0" opacity="0.7" />
            <rect x="1.5" y="0" width="1" height="1" fill="#70e0b0" opacity="0.7" />
            <rect x="0.5" y="0" width="1" height="1" fill="#60d0a0" opacity="0.6" />
            <rect x="2.5" y="1" width="1" height="1" fill="#50c090" opacity="0.5" />
            <rect x="1.5" y="1" width="1" height="1" fill="#60d0a0" opacity="0.6" />
            <rect x="0.5" y="1" width="1" height="1" fill="#50c090" opacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  )
}
