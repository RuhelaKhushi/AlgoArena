import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function UpcomingMatches() {
  const matches = [
    {
      id: 1,
      player1: {
        name: "AlgoMaster",
        avatar: "/placeholder.svg?height=40&width=40",
        elo: 2150,
      },
      player2: {
        name: "ByteWizard",
        avatar: "/placeholder.svg?height=40&width=40",
        elo: 1950,
      },
      difficulty: "Hard",
      startTime: "10:30 AM",
    },
    {
      id: 2,
      player1: {
        name: "CodeNinja",
        avatar: "/placeholder.svg?height=40&width=40",
        elo: 2080,
      },
      player2: {
        name: "LogicQueen",
        avatar: "/placeholder.svg?height=40&width=40",
        elo: 1890,
      },
      difficulty: "Medium",
      startTime: "11:15 AM",
    },
    {
      id: 3,
      player1: {
        name: "DevGenius",
        avatar: "/placeholder.svg?height=40&width=40",
        elo: 1920,
      },
      player2: {
        name: "SyntaxSage",
        avatar: "/placeholder.svg?height=40&width=40",
        elo: 1870,
      },
      difficulty: "Medium",
      startTime: "12:00 PM",
    },
  ]

  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y">
          {matches.map((match) => (
            <div key={match.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-muted-foreground">Starting at {match.startTime}</div>
                <Badge variant={match.difficulty === "Hard" ? "destructive" : "secondary"}>{match.difficulty}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={match.player1.avatar} alt={match.player1.name} />
                    <AvatarFallback>{match.player1.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">{match.player1.name}</div>
                    <div className="text-xs text-muted-foreground">Elo: {match.player1.elo}</div>
                  </div>
                </div>
                <div className="text-sm font-medium">vs</div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-sm font-medium">{match.player2.name}</div>
                    <div className="text-xs text-muted-foreground">Elo: {match.player2.elo}</div>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={match.player2.avatar} alt={match.player2.name} />
                    <AvatarFallback>{match.player2.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className="mt-3">
                <Link href={`/battles/${match.id}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Watch
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

