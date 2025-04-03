"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CodeEditor() {
  const [language, setLanguage] = useState("javascript")

  const sampleCode = {
    javascript: `function isBalanced(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}`,
    python: `def is_balanced(s):
    stack = []
    pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    for char in s:
        if char in pairs:
            stack.append(char)
        else:
            if not stack or pairs[stack.pop()] != char:
                return False
    
    return len(stack) == 0`,
    java: `public boolean isBalanced(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> pairs = Map.of(
        '(', ')',
        '[', ']',
        '{', '}'
    );
    
    for (char c : s.toCharArray()) {
        if (pairs.containsKey(c)) {
            stack.push(c);
        } else {
            if (stack.isEmpty() || pairs.get(stack.pop()) != c) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}`,
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button variant="outline">Run Tests</Button>
          <Button>Submit</Button>
        </div>
      </div>
      <div className="border rounded-md">
        <pre className="p-4 font-mono text-sm h-64 overflow-auto">
          <code>{sampleCode[language]}</code>
        </pre>
      </div>
    </div>
  )
}

