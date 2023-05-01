interface ColorType {
  name: string
  value: string
  background: string
}

const Color = ({ value, background, name }: ColorType) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.375rem',
    }}
  >
    <div
      style={{
        width: 150,
        height: 90,
        boxShadow: '0 0 0 1px',
        borderRadius: '4px',
        background,
      }}
      title="Click to copy this color's value"
    />
    <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>{name}</p>
    <p style={{ margin: 0 }}>{value}</p>
  </div>
)

export type ColorDemoType = ColorType & {
  hoverColor?: string
  hoverValue?: string
}

export const ColorDemo = ({ hoverColor, hoverValue, ...colorTypes }: ColorDemoType) =>
  hoverColor && hoverValue ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Color {...colorTypes} />
      <Color
        name={`${colorTypes.name} Hover`}
        background={hoverColor}
        value={hoverValue}
      />
    </div>
  ) : (
    <Color {...colorTypes} />
  )
