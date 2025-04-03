import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export function LeaderboardPreview() {
  const topUsers = [
    {
      id: 1,
      name: "AlgoMaster",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 2150,
      wins: 124,
      losses: 32,
    },
    {
      id: 2,
      name: "CodeNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 2080,
      wins: 98,
      losses: 41,
    },
    {
      id: 3,
      name: "ByteWizard",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1950,
      wins: 87,
      losses: 45,
    },
    {
      id: 4,
      name: "DevGenius",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1920,
      wins: 76,
      losses: 38,
    },
    {
      id: 5,
      name: "LogicQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      elo: 1890,
      wins: 82,
      losses: 51,
    },
  ]

  return (
    <Card>
      <CardContent className="p-0">
        <div className="divide-y">
          {topUsers.map((user, index) => (
            <div key={user.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8">
                  {index === 0 ? (
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <span className="text-sm font-medium">{index + 1}</span>
                  )}
                </div>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {user.wins}W - {user.losses}L
                  </div>
                </div>
              </div>
              <div className="font-bold">{user.elo}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

