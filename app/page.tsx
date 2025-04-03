import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Code, Brain, ChevronRight, Zap } from "lucide-react"
import { LeaderboardPreview } from "@/components/leaderboard-preview"
import { UpcomingMatches } from "@/components/upcoming-matches"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <h1 className="text-xl font-bold">CodeDuel</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/battles" className="text-sm font-medium hover:underline">
              Battles
            </Link>
            <Link href="/leaderboard" className="text-sm font-medium hover:underline">
              Leaderboard
            </Link>
            <Link href="/problems" className="text-sm font-medium hover:underline">
              Problems
            </Link>
            <Link href="/learn" className="text-sm font-medium hover:underline">
              Learn
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Challenge Your Coding Skills in Real-Time Battles
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Compete in 1v1 coding duels, improve your skills, and climb the leaderboard with our skill-based
                    matchmaking system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/battles/new">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Start a Battle
                    </Button>
                  </Link>
                  <Link href="/learn">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Card className="w-full max-w-md border-2 shadow-lg">
                  <CardHeader className="bg-muted/50 pb-4">
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      Live Battle
                    </CardTitle>
                    <CardDescription>Problem: Balanced Parentheses</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 divide-x">
                      <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          <span className="text-sm font-medium">AlgoMaster</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Elo: 1850</div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-3/4" />
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-sm font-medium">CodeNinja</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Elo: 1820</div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 w-1/2" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <div className="text-sm font-medium">Time Remaining: 12:45</div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 pt-4">
                    <Link href="/battles/live/123" className="w-full">
                      <Button variant="outline" className="w-full">
                        Watch Live
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to improve your coding skills through competitive programming
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Skill-Based Matchmaking</CardTitle>
                  <CardDescription>
                    Our Elo rating system ensures fair competition by matching you with players of similar skill levels.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Pseudocode Submission</CardTitle>
                  <CardDescription>
                    Submit solutions in pseudocode to eliminate language barriers or choose your preferred programming
                    language.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>AI-Powered Evaluation</CardTitle>
                  <CardDescription>
                    Our ML model evaluates pseudocode based on correctness, efficiency, and creativity.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Trophy className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Gamification</CardTitle>
                  <CardDescription>
                    Earn ranks, climb leaderboards, and collect rewards to stay motivated on your coding journey.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Adaptive Problem Selection</CardTitle>
                  <CardDescription>
                    Problems are selected based on your skill level to ensure balanced and effective learning.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Interactive Learning</CardTitle>
                  <CardDescription>
                    Learn from your battles with detailed feedback and analysis of your solutions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Top Coders</h2>
                <LeaderboardPreview />
                <div className="mt-4 text-right">
                  <Link href="/leaderboard" className="inline-flex items-center text-sm font-medium text-primary">
                    View Full Leaderboard <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Upcoming Matches</h2>
                <UpcomingMatches />
                <div className="mt-4 text-right">
                  <Link href="/battles" className="inline-flex items-center text-sm font-medium text-primary">
                    View All Battles <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            <p className="text-sm text-muted-foreground">© 2025 CodeDuel. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

