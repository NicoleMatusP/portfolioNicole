const isVideo = (src) => /\.(mp4|webm)(\?.*)?$/i.test(src)

const ImagePlaceholder = ({ label, aspectRatio = "16/9", instruction, src }) => {
  if (src) {
    return (
      <div className="image-placeholder image-placeholder--filled" style={{ aspectRatio }}>
        {isVideo(src) ? (
          <video src={src} autoPlay muted loop playsInline aria-label={label} />
        ) : (
          <img src={src} alt={label} />
        )}
      </div>
    )
  }

  return (
    <div className="image-placeholder" style={{ aspectRatio }}>
      <svg
        className="image-placeholder__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="18" rx="0" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="8" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 17L8.5 11.5L13 15L17 11.5L22 16" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="image-placeholder__label">{label}</span>
      {instruction && <span className="image-placeholder__instruction">{instruction}</span>}
    </div>
  )
}

export default ImagePlaceholder
