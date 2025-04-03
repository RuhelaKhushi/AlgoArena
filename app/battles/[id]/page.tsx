import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Clock, MessageSquare, ThumbsUp, Zap } from "lucide-react"
import Link from "next/link"
import { CodeEditor } from "@/components/code-editor"
import { ProblemDescription } from "@/components/problem-description"

export default function BattlePage({ params }: { params: { id: string } }) {
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">14:32</span>
            </div>
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
          <Link href="/battles">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Battle #{params.id}</h1>
          <Badge className="ml-2">In Progress</Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Problem: Balanced Parentheses</CardTitle>
                <CardDescription>Difficulty: Medium</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="description">
                  <TabsList className="mb-4">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                    <TabsTrigger value="constraints">Constraints</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description">
                    <ProblemDescription />
                  </TabsContent>
                  <TabsContent value="examples">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Example 1:</h3>
                        <div className="bg-muted p-3 rounded-md">
                          <p>
                            <strong>Input:</strong> s = "()[]&#123;&#125;"
                          </p>
                          <p>
                            <strong>Output:</strong> true
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Example 2:</h3>
                        <div className="bg-muted p-3 rounded-md">
                          <p>
                            <strong>Input:</strong> s = "([)]"
                          </p>
                          <p>
                            <strong>Output:</strong> false
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Example 3:</h3>
                        <div className="bg-muted p-3 rounded-md">
                          <p>
                            <strong>Input:</strong> s = "&#123;&#125;[]"
                          </p>
                          <p>
                            <strong>Output:</strong> true
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="constraints">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>1 ≤ s.length ≤ 10^4</li>
                      <li>s consists of parentheses only '()[]{}'</li>
                      <li>Time Limit: 1 second</li>
                      <li>Memory Limit: 256 MB</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Your Solution</CardTitle>
                <CardDescription>Submit either pseudocode or code in your preferred language</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="code">
                  <TabsList className="mb-4">
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="pseudocode">Pseudocode</TabsTrigger>
                  </TabsList>
                  <TabsContent value="code">
                    <CodeEditor />
                  </TabsContent>
                  <TabsContent value="pseudocode">
                    <div className="border rounded-md">
                      <textarea
                        className="w-full h-64 p-4 font-mono text-sm resize-none focus:outline-none bg-transparent"
                        placeholder="Write your pseudocode solution here..."
                      ></textarea>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button>Submit Solution</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Battle Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">You</div>
                          <div className="text-xs text-muted-foreground">Elo: 1820</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">In Progress</div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-1/2" />
                    </div>
                  </div>

                  <div className="text-center text-sm font-medium">vs</div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Opponent" />
                          <AvatarFallback>O</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium">AlgoMaster</div>
                          <div className="text-xs text-muted-foreground">Elo: 1850</div>
                        </div>
                      </div>
                      <div className="text-sm font-medium">In Progress</div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-3/4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Battle Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 h-64 overflow-y-auto mb-4 border rounded-md p-3">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="System" />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-2 rounded-md text-sm">
                      <p className="font-medium">System</p>
                      <p>Battle has started! Good luck to both participants.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AlgoMaster" />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div className="bg-muted p-2 rounded-md text-sm">
                      <p className="font-medium">AlgoMaster</p>
                      <p>Good luck! This is a fun problem.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-primary/10 p-2 rounded-md text-sm">
                      <p className="font-medium">You</p>
                      <p>Thanks! Good luck to you too!</p>
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                      <AvatarFallback>Y</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button type="submit" size="icon">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Spectators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Spectator 1" />
                    <AvatarFallback>S1</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Spectator 2" />
                    <AvatarFallback>S2</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Spectator 3" />
                    <AvatarFallback>S3</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-xs font-medium">
                    +5
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="outline" size="sm" className="w-full">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Cheer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

