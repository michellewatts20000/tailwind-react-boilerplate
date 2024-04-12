import { CSSProperties } from 'react'

export const InfoBlock = ({
  className,
  style,
  children,
}: {
  className?: string
  accordionItemWidth?: string
  style?: CSSProperties
  children?: React.ReactNode
}) => {
  return (
    <div className={`bg-blue text-white overflow-hidden ${className}`} style={style}>
      {children}
      <div className="block-inner p-[2rem]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed arcu sit amet augue
          iaculis blandit sit amet eleifend arcu.
        </p>
        <p>
          Quisque ut ipsum ac eros scelerisque fringilla ac at magna. Aliquam suscipit lectus non
          odio posuere bibendum. Sed a arcu quis mauris mollis aliquet.
        </p>
        <p>
          Maecenas justo erat, mollis vitae fermentum vitae, feugiat quis lacus. Aliquam
          consectetur, sapien ut euismod pellentesque, felis sem gravida neque, vel malesuada elit
          dolor vel augue.
        </p>
      </div>
    </div>
  )
}
