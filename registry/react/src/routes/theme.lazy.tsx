import { useLayoutEffect } from 'react'
import { Button } from '@/components/Button'
import { dark, light, matchMediaCasted, themeBaseKey } from '@/theme'

import { createLazyFileRoute } from '@tanstack/react-router'
import { useThemeStore } from '@/stores/theme'

export const Route = createLazyFileRoute('/theme')({
  component: ThemeComponent,
})

function ThemeComponent() {
  const [{ theme }, { updateTheme }] = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === dark ? light : dark
    localStorage.setItem(themeBaseKey, newTheme)
    document.documentElement.classList.toggle(dark, newTheme === dark)
    updateTheme(newTheme)
  }

  useLayoutEffect(() => {
    document.documentElement.classList.toggle(dark, theme === dark)

    const unsubscribe = matchMediaCasted(
      '(prefers-color-scheme: dark)',
    ).addEventListener('change', ({ matches }) => {
      if (!localStorage.getItem(themeBaseKey)) {
        updateTheme(matches ? dark : light)
      }
    })

    return unsubscribe
  }, [theme])

  return (
    <div className="px-2 py-2 flex flex-col bg-orange-2 dark:bg-gray-900 h-screen">
      <p className="text-white-5 dark:text-white-1">Legend:</p>
      <p className="text-white-5 dark:text-white-1">🖥 - system theme</p>
      <p className="text-white-5 dark:text-white-1">🌚 - dark theme</p>
      <p className="text-white-5 dark:text-white-1">🌝 - light theme</p>
      <Button onClick={() => {
        localStorage.removeItem(themeBaseKey);
        const prefersDark = matchMediaCasted('(prefers-color-scheme: dark)').matches
        updateTheme(prefersDark ? dark : light);
      }} className="mt-1 w-fit">
        to 🖥
      </Button>
      <Button onClick={toggleTheme} className="w-fit mt-1">
        {theme
          ? `to ${theme === dark ? '🌝' : '🌚'}`
          : 'from 🖥 to 🌚'}
      </Button>
    </div>
  )
}

export default ThemeComponent
