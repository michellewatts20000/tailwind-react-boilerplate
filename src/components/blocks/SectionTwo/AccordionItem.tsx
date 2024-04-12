export const AccordionItem = ({
  accordionNumber,
  className,
  handleClick,
  accordionItemWidth,
}: {
  accordionNumber?: string
  className?: string
  handleClick?: (accordionNum?: string) => void
  accordionItemWidth?: number
}) => {
  return (
    <div
      className={`relative ${className}`}
      onClick={() => handleClick && handleClick(accordionNumber)}
      style={{ width: `${accordionItemWidth}vw` }}>
      <span>accordion: ${accordionNumber} </span>
    </div>
  )
}
