import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="hidden absolute inset-y-0 h-full w-full rounded-r-3xl overflow-hidden lg:block"
        >
          <svg fill="none" height="1200" viewBox="0 0 400 1200" width="400" xmlns="http://www.w3.org/2000/svg">
            <g id="blob3">
              <mask fill="white" id="path-1-inside-1">
                <path
                  clipRule="evenodd"
                  d="M400 0C400 0 330.5 0 300.5 30C270.5 60 200 120 200 120C200 120 130 180 100 240C70 300 0 420 0 600C0 780 70 900 100 960C130 1020 200 1080 200 1080C200 1080 270 1140 300 1170C330 1200 400 1200 400 1200V0Z"
                  fillRule="evenodd"
                />
              </mask>
              <path
                clipRule="evenodd"
                d="M400 0C400 0 330.5 0 300.5 30C270.5 60 200 120 200 120C200 120 130 180 100 240C70 300 0 420 0 600C0 780 70 900 100 960C130 1020 200 1080 200 1080C200 1080 270 1140 300 1170C330 1200 400 1200 400 1200V0Z"
                fill="#4B5563"
                fillOpacity="0.1"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M400 0C400 0 330.5 0 300.5 30C270.5 60 200 120 200 120C200 120 130 180 100 240C70 300 0 420 0 600C0 780 70 900 100 960C130 1020 200 1080 200 1080C200 1080 270 1140 300 1170C330 1200 400 1200 400 1200V0Z"
                fill="#4B5563"
                fillOpacity="0.25"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M400 0C400 0 330.5 0 300.5 30C270.5 60 200 120 200 120C200 120 130 180 100 240C70 300 0 420 0 600C0 780 70 900 100 960C130 1020 200 1080 200 1080C200 1080 270 1140 300 1170C330 1200 400 1200 400 1200V0Z"
                fill="#4B5563"
                fillOpacity="0.5"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </div>
        <div className="relative py-16 sm:py-24 lg:py-32">
          <div className="mx-4 flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-10">
              <div className="space-y-4 lg:space-y-6">
                <header className="space-y-1.5 text-center">
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Track
                    <br className="sm:hidden" />
                    <span className="shadcn-typing-gradient">Progress</span>
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                    The app that helps you improve your game by tracking your biometric data.
                  </p>
                </header>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 lg:gap-10">
                  <Link className="shadcn-grad-button" href="#">
                    <Button size="lg" variant="grad">
                      Player
                    </Button>
                  </Link>
                  <Link className="shadcn-grad-button" href="#">
                    <Button size="lg" variant="grad">
                      Coach
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full max-w-3xl">
                <img
                  className="aspect-2/1 rounded-xl overflow-hidden"
                  height="450"
                  src="/placeholder.svg"
                  width="900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 grid gap-6 lg:gap-8">
            <div className="flex flex-col items-center space-y-4 lg:text-center lg:items-start lg:space-y-6">
              <div className="flex flex-col items-center space-y-3 lg:items-start lg:space-y-2">
                <div className="inline-flex items-center p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="font-semibold ml-2">Player</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl/none">
                  Improve your game with biometric data.
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                Track your progress, set goals, and optimize your performance with our easy-to-use app.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:text-center lg:items-start lg:space-y-6">
              <div className="flex flex-col items-center space-y-3 lg:items-start lg:space-y-2">
                <div className="inline-flex items-center p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="font-semibold ml-2">Coach</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl/none">
                  Manage your team with advanced analytics.
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                Gain insights, create training programs, and keep your team at peak performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-950">
        <div className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 grid gap-6 lg:gap-8">
            <div className="flex flex-col items-center space-y-4 lg:text-center lg:items-start lg:space-y-6">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl/none">Choose your path.</h2>
            </div>
            <div className="flex flex-col items-center space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col items-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">For Players</h3>
                    <p className="text-gray-500 dark:text-gray-400">Track your progress</p>
                  </div>
                  <img
                    className="aspect-2/1 rounded-xl overflow-hidden"
                    height="200"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <Link className="underline" href="#">
                    <a className="underline" href="#">
                      Learn more
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">For Coaches</h3>
                    <p className="text-gray-500 dark:text-gray-400">Manage your team</p>
                  </div>
                  <img
                    className="aspect-2/1 rounded-xl overflow-hidden"
                    height="200"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <Link className="underline" href="#">
                    <a className="underline" href="#">
                      Learn more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
