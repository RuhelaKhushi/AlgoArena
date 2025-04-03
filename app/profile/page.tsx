import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Award, Calendar, Code, Trophy, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const recentBattles = [
    {
      id: 1,
      opponent: "AlgoMaster",
      opponentAvatar: "/placeholder.svg?height=40&width=40",
      problem: "Balanced Parentheses",
      result: "Loss",
      date: "Today",
      eloChange: -12,
    },
    {
      id: 2,
      opponent: "ByteWizard",
      opponentAvatar: "/placeholder.svg?height=40&width=40",
      problem: "Two Sum",
      result: "Win",
      date: "Yesterday",
      eloChange: 15,
    },
    {
      id: 3,
      opponent: "CodeNinja",
      opponentAvatar: "/placeholder.svg?height=40&width=40",
      problem: "Merge Intervals",
      result: "Win",
      date: "3 days ago",
      eloChange: 18,
    },
  ]

  const achievements = [
    {
      id: 1,
      name: "First Blood",
      description: "Win your first coding battle",
      icon: <Trophy className="h-5 w-5" />,
      completed: true,
    },
    {
      id: 2,
      name: "Streak Master",
      description: "Win 5 battles in a row",
      icon: <Award className="h-5 w-5" />,
      completed: false,
      progress: 60,
    },
    {
      id: 3,
      name: "Problem Solver",
      description: "Solve 50 different problems",
      icon: <Code className="h-5 w-5" />,
      completed: false,
      progress: 42,
    },
    {
      id: 4,
      name: "Social Coder",
      description: "Add 10 friends to your network",
      icon: <Users className="h-5 w-5" />,
      completed: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              <h1 className="text-xl font-bold">CodeDuel</h1>
            </Link>
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
            <Link href="/profile">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Your Profile</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-3">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
                  <AvatarFallback className="text-2xl">U</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold">CodeWarrior</h2>
                  <p className="text-muted-foreground">Member since January 2025</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                    <Badge>Advanced</Badge>
                    <Badge variant="outline">Problem Solver</Badge>
                    <Badge variant="outline">Fast Coder</Badge>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-3xl font-bold">1820</div>
                  <div className="text-sm text-muted-foreground">Elo Rating</div>
                  <div className="text-sm">Rank #8 Global</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
              <CardDescription>Your performance in coding battles</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="problems">Problems</TabsTrigger>
                  <TabsTrigger value="languages">Languages</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Total Battles</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">78</div>
                        <div className="text-xs text-muted-foreground">+12 this month</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">65%</div>
                        <div className="text-xs text-muted-foreground">51 wins, 27 losses</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Avg. Solve Time</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">14:32</div>
                        <div className="text-xs text-muted-foreground">-2:15 from last month</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-4">Recent Battles</h3>
                    <div className="space-y-4">
                      {recentBattles.map((battle) => (
                        <div key={battle.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={battle.opponentAvatar} alt={battle.opponent} />
                              <AvatarFallback>{battle.opponent.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">vs {battle.opponent}</div>
                              <div className="text-sm text-muted-foreground">{battle.problem}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{battle.date}</span>
                            </div>
                            <Badge variant={battle.result === "Win" ? "default" : "secondary"} className="font-normal">
                              {battle.result}
                            </Badge>
                            <div
                              className={`text-sm font-medium ${
                                battle.eloChange > 0 ? "text-green-500" : "text-red-500"
                              }`}
                            >
                              {battle.eloChange > 0 ? "+" : ""}
                              {battle.eloChange}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline">View All Battles</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="problems">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Problems Solved</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">42</div>
                          <div className="flex gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              Easy: 18
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Medium: 20
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Hard: 4
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Favorite Category</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">Arrays</div>
                          <div className="text-xs text-muted-foreground">15 problems solved</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Hardest Problem</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-lg font-bold">Median of Two Sorted Arrays</div>
                          <Badge variant="destructive" className="mt-1 text-xs">
                            Hard
                          </Badge>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="languages">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">JavaScript</div>
                        <div className="text-sm">65%</div>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">Python</div>
                        <div className="text-sm">25%</div>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">Java</div>
                        <div className="text-sm">10%</div>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-medium mb-2">Pseudocode Usage</h3>
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold">18%</div>
                        <div className="text-sm text-muted-foreground">of all submissions</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Your progress and accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start gap-3 p-3 border rounded-lg">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        achievement.completed ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{achievement.name}</div>
                      <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      {achievement.progress !== undefined && (
                        <div className="mt-2">
                          <Progress value={achievement.progress} className="h-1" />
                          <div className="text-xs text-right mt-1">{achievement.progress}%</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Achievements</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

