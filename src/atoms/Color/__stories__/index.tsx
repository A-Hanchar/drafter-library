import { ColorGroup } from './ColorGroup'

export const Colors = () => (
  <>
    <ColorGroup
      title="Core"
      colors={[
        {
          background: 'var(--colorPrimary)',
          name: 'Primary',
          value: '#3DA9FC',
        },
        {
          background: 'var(--colorSecondary)',
          name: 'Secondary',
          value: '#5F6C7B',
        },
      ]}
    />

    <ColorGroup
      title="Base"
      colors={[
        {
          background: 'var(--colorLight)',
          name: 'Light',
          value: '#FFFFFE',
        },
        {
          background: 'var(--colorDark)',
          name: 'Dark',
          value: '#094067',
        },
      ]}
    />

    <ColorGroup
      title="Status"
      colors={[
        {
          background: 'var(--colorAlert)',
          name: 'Alert',
          value: '#EF4565',
          hoverColor: 'var(--colorAlertHover)',
          hoverValue: '#E11439',
        },
        {
          background: 'var(--colorWarning)',
          name: 'Warning',
          value: '#F18F01',
          hoverColor: 'var(--colorWarningHover)',
          hoverValue: '#DF8601',
        },
        {
          background: 'var(--colorSuccess)',
          name: 'Success',
          value: '#61D095',
          hoverColor: 'var(--colorSuccessHover)',
          hoverValue: '#38BC76',
        },
      ]}
    />
  </>
)

export default {
  title: 'Atoms/Colors',
  component: Colors,
}
