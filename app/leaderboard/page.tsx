import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Trophy, Zap } from "lucide-react"
import Link from "next/link"

export default function LeaderboardPage() {
  const topUsers = [
    {
      id: 1,
      name: "AlgoMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 2150,
      wins: 124,
      losses: 32,
      rank: "Grandmaster",
      badges: ["Contest Winner", "Problem Creator"],
    },
    {
      id: 2,
      name: "CodeNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 2080,
      wins: 98,
      losses: 41,
      rank: "Master",
      badges: ["Fast Solver"],
    },
    {
      id: 3,
      name: "ByteWizard",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1950,
      wins: 87,
      losses: 45,
      rank: "Expert",
      badges: ["Consistent Performer"],
    },
    {
      id: 4,
      name: "DevGenius",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1920,
      wins: 76,
      losses: 38,
      rank: "Expert",
      badges: ["Clean Coder"],
    },
    {
      id: 5,
      name: "LogicQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1890,
      wins: 82,
      losses: 51,
      rank: "Expert",
      badges: ["Algorithm Specialist"],
    },
    {
      id: 6,
      name: "SyntaxSage",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1870,
      wins: 68,
      losses: 42,
      rank: "Advanced",
      badges: [],
    },
    {
      id: 7,
      name: "BugHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1840,
      wins: 72,
      losses: 55,
      rank: "Advanced",
      badges: ["Debugger"],
    },
    {
      id: 8,
      name: "DataDragon",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1820,
      wins: 65,
      losses: 48,
      rank: "Advanced",
      badges: [],
    },
    {
      id: 9,
      name: "FunctionFury",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1790,
      wins: 59,
      losses: 43,
      rank: "Intermediate",
      badges: [],
    },
    {
      id: 10,
      name: "LoopLegend",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1760,
      wins: 54,
      losses: 46,
      rank: "Intermediate",
      badges: [],
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
            <Link href="/leaderboard" className="text-sm font-medium hover:underline text-primary">
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
          <h1 className="text-2xl font-bold">Leaderboard</h1>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Global Rankings</CardTitle>
            <CardDescription>
              Top coders ranked by Elo rating based on their performance in coding battles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search users..." className="pl-8" />
              </div>
              <Tabs defaultValue="global" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="global">Global</TabsTrigger>
                  <TabsTrigger value="friends">Friends</TabsTrigger>
                  <TabsTrigger value="country">Country</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 p-4 font-medium border-b bg-muted/50">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-5 md:col-span-4">User</div>
                <div className="col-span-2 text-center hidden md:block">W/L</div>
                <div className="col-span-2 text-center">Rank</div>
                <div className="col-span-4 md:col-span-3 text-center">Elo Rating</div>
              </div>
              {topUsers.map((user, index) => (
                <div
                  key={user.id}
                  className="grid grid-cols-12 gap-2 p-4 items-center border-b last:border-0 hover:bg-muted/50"
                >
                  <div className="col-span-1 text-center">
                    {index === 0 ? (
                      <Trophy className="h-5 w-5 text-yellow-500 mx-auto" />
                    ) : index === 1 ? (
                      <Trophy className="h-5 w-5 text-gray-400 mx-auto" />
                    ) : index === 2 ? (
                      <Trophy className="h-5 w-5 text-amber-700 mx-auto" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="col-span-5 md:col-span-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {user.badges.map((badge, i) => (
                            <Badge key={i} variant="outline" className="text-xs py-0">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center hidden md:block text-sm">
                    {user.wins}W - {user.losses}L
                  </div>
                  <div className="col-span-2 text-center">
                    <Badge
                      variant={
                        user.rank === "Grandmaster" ? "destructive" : user.rank === "Master" ? "default" : "secondary"
                      }
                      className="font-normal"
                    >
                      {user.rank}
                    </Badge>
                  </div>
                  <div className="col-span-4 md:col-span-3 text-center font-bold">{user.elo}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load More</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

