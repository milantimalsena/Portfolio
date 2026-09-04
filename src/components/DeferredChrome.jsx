import ScrollProgress from './ScrollProgress'
import CustomCursor from './CustomCursor'
import CommandPalette from './CommandPalette'
import TerminalEasterEgg from './TerminalEasterEgg'
import Footer from './Footer'

export default function DeferredChrome() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      <TerminalEasterEgg />
      <Footer />
    </>
  )
}
