import { type FC } from 'react'

interface LabelProps extends React.ComponentProps<'label'> {
  text?: string
}

const Label: FC<LabelProps> = ({ text }) => {
  if (!text) return null
  return <label className={'text-sm font-medium text-foreground'}>{text}</label>
}

export default Label
