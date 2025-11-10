import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CodeSamples from './components/CodeSamples'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <CodeSamples />
      <Trust />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} HoloAuth Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
