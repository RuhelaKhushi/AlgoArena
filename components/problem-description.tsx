export function ProblemDescription() {
  return (
    <div className="space-y-4">
      <p>
        Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>,{" "}
        <code>'{"</code>, <code>"}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is
        valid.
      </p>
      <p>An input string is valid if:</p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Open brackets must be closed by the same type of brackets.</li>
        <li>Open brackets must be closed in the correct order.</li>
        <li>Every close bracket has a corresponding open bracket of the same type.</li>
      </ol>
      <p>
        Your task is to implement a function that takes a string as input and returns a boolean indicating whether the
        string is valid according to the rules above.
      </p>
      <div className="bg-muted p-3 rounded-md mt-4">
        <p className="font-medium">Function Signature:</p>
        <pre className="text-sm mt-2">
          <code>function isBalanced(s: string): boolean</code>
        </pre>
      </div>
    </div>
  )
}

