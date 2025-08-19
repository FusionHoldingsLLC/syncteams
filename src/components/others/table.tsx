import { Text } from '@mantine/core'

export const TableTitleText = ({ title, className }: { title: string; className?: string }) => {
  return <Text className={`${className} table-title-text`}>{title}</Text>
}
export const TableHeaderText = ({ title, className }: { title: string; className?: string }) => {
  return <Text className={`table-header-text ${className}`}>{title}</Text>
}
export const TableItemText = ({ title, className }: { title: string; className?: string }) => {
  return <Text className={` table-item-text ${className}`}>{title}</Text>
}
