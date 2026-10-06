import { gradeSchema } from "@zmaths/shared"

console.log(gradeSchema.parse({ studentId: "abc", score: 95 }));
