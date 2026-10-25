export interface NavigationItem {
  label: string
  to: string
}

export type ToolLogoKind = 'adobe' | 'figma' | 'canva' | 'capcut' | 'davinci' | 'office'

export interface CreativeTool {
  id: string
  name: string
  mark: string
  logoKind: ToolLogoKind
}

export interface JourneyMilestone {
  id: string
  period: string
  title: string
  description: string
  toolIds: string[]
}

export interface SkillGroup {
  id: string
  title: string
  description: string
  toolIds: string[]
  practices: string[]
}

export interface CreativePractice {
  title: string
  description: string
  mark: string
}

export interface HomeHighlight {
  label: string
  value: string
  detail: string
}

export interface SocialLink {
  label: string
  shortLabel: string
  href: string
}
