function Link ({href, label, color = 'blue', intensity = '500'}) {
  return (
    <a href={href} className={`text-${color}-${intensity} underline`}>{label}</a>
  )
}

export default Link